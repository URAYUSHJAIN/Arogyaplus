import { GoogleGenerativeAI } from '@google/generative-ai';

// Check for API key early
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
if (!apiKey || apiKey === 'your_api_key_here') {
  console.error('Gemini API key is not configured. Please add VITE_GEMINI_API_KEY to your .env.local file.');
}

// Initialize Gemini AI
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;
const model = genAI ? genAI.getGenerativeModel({ model: 'gemini-1.5-flash' }) : null;

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

  // Try to extract sections based on common headings
  const summaryMatch = text.match(/(?:Summary|Key Findings)[:\s]*([\s\S]*?)(?=\n(?:Explanation|Medical|Health|Modern|Ayurvedic|Lifestyle|$))/i);
  const insightsMatch = text.match(/(?:Explanation|Medical|Health Insights)[:\s]*([\s\S]*?)(?=\n(?:Modern|Ayurvedic|Lifestyle|$))/i);
  const modernMatch = text.match(/(?:Modern Medicine|Recommendations)[:\s]*([\s\S]*?)(?=\n(?:Ayurvedic|Lifestyle|$))/i);
  const ayurvedicMatch = text.match(/(?:Ayurvedic|Traditional)[:\s]*([\s\S]*?)(?=\n(?:Lifestyle|$))/i);
  const lifestyleMatch = text.match(/(?:Lifestyle|Dietary)[:\s]*([\s\S]*?)$/i);

  sections.summary = summaryMatch ? summaryMatch[1].trim() : text.substring(0, 300);
  sections.insights = insightsMatch ? insightsMatch[1].trim() : '';
  sections.modernMedicine = modernMatch ? modernMatch[1].trim() : '';
  sections.ayurvedic = ayurvedicMatch ? ayurvedicMatch[1].trim() : '';
  sections.lifestyle = lifestyleMatch ? lifestyleMatch[1].trim() : '';

  return sections;
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

    // Validate file
    const validation = validateFile(file);
    if (!validation.valid) {
      throw new Error(validation.error);
    }

    // Convert file to base64
    const base64Data = await fileToBase64(file);
    const mimeType = file.type;

    // Create detailed medical analysis prompt
    const prompt = `You are an AI medical assistant with expertise in both modern medicine and Ayurveda. Analyze this medical report and provide:

1. SUMMARY: A brief overview of key findings and test results (2-3 sentences)

2. MEDICAL INSIGHTS: Detailed explanation of medical terms and what the results indicate in simple, easy-to-understand language

3. MODERN MEDICINE RECOMMENDATIONS: Evidence-based medical advice, lifestyle modifications, and any recommended follow-up actions based on the results

4. AYURVEDIC SOLUTIONS: Traditional Ayurvedic treatment suggestions, herbal remedies, and holistic approaches that complement the condition shown in the report

5. LIFESTYLE & DIET: Specific dietary recommendations, exercise suggestions, stress management techniques, and daily routine modifications

Format your response with clear section headings. Be empathetic, informative, and provide actionable advice. Important: This is for informational purposes only and should not replace professional medical consultation.`;

    // Make API call to Gemini with updated format for @google/genai v1.x
    const result = await model.generateContent({
      contents: [
        {
          role: 'user',
          parts: [
            { text: prompt },
            {
              inlineData: {
                mimeType: mimeType,
                data: base64Data,
              },
            },
          ],
        },
      ],
    });

    const response = await result.response;
    const text = response.text();

    // Parse response into structured sections
    const parsedSections = parseResponse(text);

    return {
      success: true,
      data: parsedSections,
    };
  } catch (error) {
    console.error('Error analyzing report:', error);

    // Handle specific error types
    let errorMessage = 'Failed to analyze report. Please try again.';

    if (error.message.includes('API key')) {
      errorMessage = 'Invalid API key. Please check your configuration.';
    } else if (error.message.includes('quota') || error.message.includes('rate limit')) {
      errorMessage = 'Service temporarily unavailable. Please try again in a few moments.';
    } else if (error.message.includes('network') || error.message.includes('fetch')) {
      errorMessage = 'Network error. Please check your internet connection.';
    } else if (error.message.includes('Invalid file')) {
      errorMessage = error.message;
    }

    return {
      success: false,
      error: errorMessage,
    };
  }
};
