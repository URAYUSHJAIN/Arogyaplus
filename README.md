# ArogyaPlus - AI-Powered Healthcare Platform

ArogyaPlus is an innovative AI-powered healthcare technology platform that transforms medical report interpretation using advanced OCR, computer vision, and natural language processing.

## Features

- **AI-Powered Medical Report Analysis** - Upload medical reports and get instant personalized insights
- **OCR, Computer Vision, and NLP Integration** - Advanced AI technologies for accurate report analysis
- **Personalized Health Insights** - Get detailed explanations of medical terms and test results
- **Modern Medicine + Ayurvedic Recommendations** - Unique blend of evidence-based medicine and traditional Ayurvedic wisdom
- **Drag-and-Drop Report Upload** - Easy-to-use interface for uploading PDF, JPG, and PNG files
- **Real-Time Analysis with Loading States** - Visual feedback during the analysis process
- **Responsive Design** - Optimized for all devices from mobile to desktop

## Technology Stack

- **React 19** - Latest version of React for building user interfaces
- **Vite** - Fast build tool and development server
- **React Router v6** - Client-side routing with data router APIs
- **Tailwind CSS v4** - Utility-first CSS framework
- **Google Gemini AI** (@google/genai) - Advanced AI for medical report analysis

## Environment Setup

1. Create a `.env.local` file in the project root:

```env
VITE_GEMINI_API_KEY=your_api_key_here
```

2. Get your Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)

3. **Important Security Steps:**
   - Add HTTP referrer restrictions in [Google Cloud Console](https://console.cloud.google.com/)
   - Restrict to your development domain: `http://localhost:5173`
   - Restrict to your production domain after deployment
   - Add API restrictions to limit usage to Gemini API only
   - **Never commit `.env.local` to version control** (already in .gitignore)

4. For production deployments:
   - Set `VITE_GEMINI_API_KEY` environment variable in your hosting platform
   - Consider moving API calls to a backend proxy for better security and billing control

## Development

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Security Notes

⚠️ **Client-Side API Key Considerations:**

- The Gemini API key is bundled in the client code when using Vite environment variables
- This approach is suitable for demos and small projects with API restrictions enabled
- For production applications with billing concerns:
  - Implement a backend proxy server to handle API calls
  - Keep API keys server-side only
  - Add rate limiting and authentication
- Always set HTTP referrer restrictions in Google Cloud Console
- Monitor API usage regularly in Google Cloud Console

## Project Structure

```
agogyaplus/
├── public/
│   └── logo.png
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── AIFeatures.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Services.jsx
│   │   ├── PatientCare.jsx
│   │   ├── Specialties.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Doctors.jsx
│   │   ├── MobileApp.jsx
│   │   └── Blog.jsx
│   ├── pages/             # Route-level page components
│   │   ├── HomePage.jsx
│   │   └── AIAnalysisPage.jsx
│   ├── services/          # API integration and business logic
│   │   └── geminiService.js
│   ├── App.jsx            # Root layout component
│   ├── main.jsx           # Application entry point with routing
│   └── index.css          # Global styles
├── .env.local             # Environment variables (not committed)
└── README.md
```

## Routes

- `/` - Home page with all sections (Hero, About, Features, Services, etc.)
- `/ai-analysis` - AI-powered medical report analysis page

## How It Works

1. **Upload** - Drag and drop or select your medical report (PDF, JPG, PNG)
2. **Analyze** - AI processes the report using OCR, computer vision, and NLP
3. **Get Insights** - Receive personalized health insights with:
   - Summary of key findings
   - Medical term explanations
   - Modern medicine recommendations
   - Ayurvedic treatment suggestions
   - Lifestyle and dietary advice

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Disclaimer

This AI analysis tool is for informational purposes only and should not replace professional medical consultation. Always consult with qualified healthcare professionals for medical advice and treatment.

---

Built with ❤️ using React, Vite, and Google Gemini AI
