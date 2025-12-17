import { GoogleGenerativeAI } from '@google/generative-ai';

// Check for API key early
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
if (!apiKey || apiKey === 'your_api_key_here') {
  console.error('Gemini API key is not configured. Please add VITE_GEMINI_API_KEY to your .env.local file.');
}

// Rate limiting variables
let lastRequestTime = 0;
const MIN_REQUEST_INTERVAL = 2000; // Minimum 2 seconds between requests

// Initialize Gemini AI
const genAI = apiKey && apiKey !== 'your_api_key_here' ? new GoogleGenerativeAI(apiKey) : null;
const model = genAI ? genAI.getGenerativeModel({ 
  model: 'gemini-2.5-flash',
  generationConfig: {
    temperature: 0.4,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
  },
}) : null;

// File validation helpers
export const validateFile = (file) => {
  // Only accept images for now (PDFs require Files API or text extraction)
  const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  const maxSize = 10 * 1024 * 1024; // 10MB

  if (!validTypes.includes(file.type)) {
    return {
      valid: false,
      error: 'Invalid file type. Please upload JPG or PNG files only. PDF support coming soon.',
    };
  }

  if (file.size > maxSize) {
    return {
      valid: false,
      error: 'File size exceeds 10MB. Please upload a smaller file.',
    };
  }

  return { valid: true, error: null };
};

// Convert file to base64
const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result.split(',')[1];
      resolve(base64String);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

// Parse AI response into structured sections
const parseResponse = (text) => {
  const sections = {
    summary: '',
    insights: '',
    modernMedicine: '',
    ayurvedic: '',
    lifestyle: '',
    fullText: text,
  };

  // Check if text is empty or just whitespace
  if (!text || text.trim().length === 0) {
    sections.summary = 'No response received from AI. Please try again.';
    return sections;
  }

  try {
    // Clean up markdown code blocks and extra formatting
    let cleanText = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    
    // Check if cleanText is empty after cleaning
    if (cleanText.length === 0) {
      throw new Error('Empty text after cleaning');
    }
    
    // Try to extract JSON object if it's embedded in text
    const jsonMatch = cleanText.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      cleanText = jsonMatch[0];
    }
    
    // Attempt to fix common JSON formatting issues
    // Replace nested quotes and fix malformed strings
    cleanText = cleanText
      .replace(/\*\*/g, '') // Remove markdown bold
      .replace(/\n\s*\n/g, '\n') // Remove extra newlines
      .replace(/\\n/g, '\\\\n'); // Escape newlines properly
    
    const data = JSON.parse(cleanText);
    
    return {
        summary: data.summary || '',
        insights: data.insights || '',
        modernMedicine: data.modernMedicine || '',
        ayurvedic: data.ayurvedic || '',
        lifestyle: data.lifestyle || '',
        fullText: text
    };
  } catch {
    // Advanced extraction: Find each field in the JSON-like text
    try {
      const extractField = (fieldName) => {
        // Match the field with its value, handling multi-line strings
        const pattern = new RegExp(`"${fieldName}"\\s*:\\s*"([\\s\\S]*?)(?="\\s*[,}]|$)`, 'i');
        const match = text.match(pattern);
        if (match && match[1]) {
          // Clean up the extracted text
          return match[1]
            .replace(/\\n/g, '\n')
            .replace(/\*\*/g, '')
            .replace(/\s+\n/g, '\n')
            .trim();
        }
        return '';
      };

      sections.summary = extractField('summary');
      sections.insights = extractField('insights');
      sections.modernMedicine = extractField('modernMedicine');
      sections.ayurvedic = extractField('ayurvedic');
      sections.lifestyle = extractField('lifestyle');

      // If any section is still empty, try fallback regex
      if (!sections.summary) {
        const summaryMatch = text.match(/(?:"summary"\s*:\s*")([^"]+)/i);
        sections.summary = summaryMatch ? summaryMatch[1] : '';
      }

      return sections;
    } catch {
      // Final fallback - return full text as summary
      sections.summary = text.length > 500 ? text.substring(0, 500) + "..." : text;
      return sections;
    }
  }
};

// Helper function to wait for rate limit
const waitForRateLimit = async () => {
  const now = Date.now();
  const timeSinceLastRequest = now - lastRequestTime;
  
  if (timeSinceLastRequest < MIN_REQUEST_INTERVAL) {
    const waitTime = MIN_REQUEST_INTERVAL - timeSinceLastRequest;
    await new Promise(resolve => setTimeout(resolve, waitTime));
  }
  
  lastRequestTime = Date.now();
};

// Main function: Analyze medical report
export const analyzeReport = async (file) => {
  try {
    // Check if API is configured
    if (!apiKey || apiKey === 'your_api_key_here') {
      return {
        success: false,
        error: 'Gemini API key is not configured. Please add your API key to the .env.local file.',
      };
    }

    if (!model) {
      return {
        success: false,
        error: 'AI service is not initialized. Please check your API configuration.',
      };
    }
    
    // Wait for rate limit before making request
    await waitForRateLimit();

    // Validate file
    const validation = validateFile(file);
    if (!validation.valid) {
      throw new Error(validation.error);
    }

    // Convert file to base64
    const base64Data = await fileToBase64(file);
    const mimeType = file.type;
    
    // Create comprehensive prompt that does both OCR and analysis in one call
    const prompt = `You are an AI medical assistant with expertise in both modern medicine and Ayurveda. 

Analyze this medical report image and provide a comprehensive health analysis.

First, carefully read and extract ALL text from the image including:
- Test names and parameters
- Test values and results
- Reference ranges
- Patient information
- Doctor's notes and observations

Then, based on what you see in the report, provide your analysis in this EXACT JSON format.
CRITICAL: Ensure all text fields are properly escaped and do not contain unescaped quotes or newlines that break JSON formatting.

{
  "summary": "Brief overview of key findings and test results in 2-3 sentences",
  "insights": "Detailed explanation of medical terms and what the results indicate in simple easy-to-understand language. Explain any abnormal values and their potential implications",
  "modernMedicine": "Evidence-based medical advice lifestyle modifications and any recommended follow-up actions based on the results",
  "ayurvedic": "Traditional Ayurvedic treatment suggestions herbal remedies and holistic approaches that complement the condition shown in the report",
  "lifestyle": "Specific dietary recommendations exercise suggestions stress management techniques and daily routine modifications"
}

IMPORTANT RULES:
1. Return ONLY valid JSON - no extra text before or after
2. Use simple quotes within strings or escape them properly
3. Keep each field as a single continuous paragraph without line breaks
4. Remove all markdown formatting like ** or * from the output
5. Do not use nested quotes
6. This is for informational purposes only and should not replace professional medical consultation`;

    // Single API call with image for both OCR and analysis
    let result;
    try {
      result = await model.generateContent([
        prompt,
        {
          inlineData: {
            mimeType: mimeType,
            data: base64Data,
          },
        },
      ]);
    } catch (apiError) {
      // Check if it's a rate limit error
      if (apiError.status === 429 || apiError.message?.includes('quota') || apiError.message?.includes('rate limit')) {
        throw new Error('Rate limit exceeded. Please wait a minute and try again. The free tier has limited requests per minute.');
      }
      throw apiError;
    }

    const response = await result.response;
    
    // Check if response has candidates
    if (!response.candidates || response.candidates.length === 0) {
      throw new Error('AI did not generate any response. This might be due to content filtering or API restrictions.');
    }
    
    const text = response.text();
    
    // Validate response is not empty
    if (!text || text.trim().length === 0) {
      throw new Error('Empty response received from Gemini AI. The image might not be readable or the API might have content restrictions.');
    }

    // Parse response into structured sections
    const parsedSections = parseResponse(text);

    return {
      success: true,
      data: parsedSections,
    };
  } catch (error) {
    // Handle specific error types
    let errorMessage = 'Failed to analyze report. Please try again.';

    if (error.message.includes('API key') || error.message.includes('API_KEY')) {
      errorMessage = 'Invalid or restricted API key. Please check your Google Cloud Console settings and ensure the Generative Language API is enabled.';
    } else if (error.message.includes('quota') || error.message.includes('rate limit') || error.message.includes('429') || error.message.includes('Rate limit')) {
      errorMessage = 'Rate limit exceeded. Please wait at least 1 minute before trying again. The free tier allows limited requests per minute.';
    } else if (error.message.includes('503') || error.message.includes('temporarily unavailable')) {
      errorMessage = 'Gemini service is temporarily unavailable. This might be due to: \n1. API key restrictions (check Google Cloud Console)\n2. Service maintenance\n3. Rate limiting\n\nPlease try again in a few moments.';
    } else if (error.message.includes('network') || error.message.includes('fetch') || error.message.includes('Failed to fetch')) {
      errorMessage = 'Network error. Please check your internet connection and try again.';
    } else if (error.message.includes('Invalid file')) {
      errorMessage = error.message;
    } else if (error.message.includes('400')) {
      errorMessage = 'Invalid request. Please ensure your file is a valid medical report image (JPG/PNG).';
    }

    return {
      success: false,
      error: errorMessage,
    };
  }
};
