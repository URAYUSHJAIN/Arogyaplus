import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLocation, sortHospitalsByDistance, detectEmergencyNumber } from '../services/locationService';
import { formatMedicalSummaryForSharing, getConsentStatus, saveConsentStatus } from '../services/emergencyService';
import MapView from '../components/MapView';
import PillLoader from '../components/PillLoader';
import hospitals from '../data/hospitals';

const EmergencyPage = () => {
  const navigate = useNavigate();
  
  // State management
  const [stage, setStage] = useState('options'); // 'options' | 'calling' | 'finding' | 'map-view'
  const [userLocation, setUserLocation] = useState(null);
  const [nearestHospitals, setNearestHospitals] = useState([]);
  const [locationError, setLocationError] = useState(null);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [showConsentModal, setShowConsentModal] = useState(false);
  const [emergencyNumber, setEmergencyNumber] = useState(null);

  // Initialize emergency number on component mount
  useEffect(() => {
    const number = detectEmergencyNumber();
    setEmergencyNumber(number);
  }, []);

  // Handle call emergency services
  const handleCallEmergency = () => {
    setStage('calling');
    
    // Auto-dial after a short delay to show the calling screen
    setTimeout(() => {
      if (emergencyNumber) {
        window.location.href = `tel:${emergencyNumber.number}`;
      }
    }, 2000);
  };

  // Handle find hospitals
  const handleFindHospitals = async () => {
    setStage('finding');
    setIsLoadingLocation(true);
    setLocationError(null);

    try {
      const locationResult = await getLocation();
      
      if (locationResult.success) {
        setUserLocation(locationResult.data);
        
        // Sort hospitals by distance
        const sortedHospitals = sortHospitalsByDistance(locationResult.data, hospitals);
        setNearestHospitals(sortedHospitals);
        
        setStage('map-view');
      } else {
        setLocationError(locationResult.error);
        // Still show hospitals but without distance sorting
        setNearestHospitals(hospitals);
        setStage('map-view');
      }
    } catch (error) {
      console.error('Error finding hospitals:', error);
      setLocationError('Failed to find nearby hospitals');
      setNearestHospitals(hospitals);
      setStage('map-view');
    } finally {
      setIsLoadingLocation(false);
    }
  };

  // Handle hospital selection
  const handleHospitalSelect = (hospital) => {
    setSelectedHospital(hospital);
  };

  // Handle medical summary sharing
  const handleShareMedicalSummary = () => {
    const consent = getConsentStatus();
    if (consent.granted) {
      // Show summary directly
      showMedicalSummary();
    } else {
      // Show consent modal
      setShowConsentModal(true);
    }
  };

  // Show medical summary
  const showMedicalSummary = () => {
    const summaryResult = formatMedicalSummaryForSharing();
    if (summaryResult.success) {
      // Create a new window/tab with the summary
      const summaryWindow = window.open('', '_blank');
      summaryWindow.document.write(`
        <html>
          <head>
            <title>Emergency Medical Summary</title>
            <style>
              body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; }
              pre { white-space: pre-wrap; word-wrap: break-word; }
              .header { color: #dc2626; font-weight: bold; margin-bottom: 20px; }
              .disclaimer { background: #fef2f2; border: 1px solid #fecaca; padding: 10px; border-radius: 5px; margin-top: 20px; }
            </style>
          </head>
          <body>
            <div class="header">EMERGENCY MEDICAL SUMMARY</div>
            <pre>${summaryResult.data}</pre>
          </body>
        </html>
      `);
    } else {
      alert('No medical summary available. Please analyze a medical report first.');
    }
  };

  // Handle consent confirmation
  const handleConsentConfirm = () => {
    saveConsentStatus(true);
    setShowConsentModal(false);
    showMedicalSummary();
  };

  // Render options screen (Stage 1)
  const renderOptionsScreen = () => (
    <div className="min-h-screen bg-linear-to-br from-red-600 via-red-700 to-red-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            🚨 Emergency Assistance
          </h1>
          <p className="text-xl text-red-100 mb-8">
            Get immediate help when you need it most
          </p>
        </div>

        {/* Option Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Call Emergency Services Card */}
          <div 
            className="bg-white rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300 cursor-pointer transform hover:scale-105"
            onClick={handleCallEmergency}
          >
            <div className="text-center">
              <svg 
                className="w-20 h-20 text-red-600 mb-4 mx-auto" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Call Emergency Services</h2>
              <p className="text-gray-600 mb-6">
                Immediately connect to local emergency number ({emergencyNumber?.displayText || '112/911'})
              </p>
              <button 
                onClick={handleCallEmergency}
                className="bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-all duration-300 shadow-lg"
              >
                Call Now
              </button>
            </div>
          </div>

          {/* Find Nearest Hospital Card */}
          <div 
            className="bg-white rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300 cursor-pointer transform hover:scale-105"
            onClick={handleFindHospitals}
          >
            <div className="text-center">
              <svg 
                className="w-20 h-20 text-blue-600 mb-4 mx-auto" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Find Nearest Hospital</h2>
              <p className="text-gray-600 mb-6">
                Locate nearby hospitals and get directions
              </p>
              <button 
                onClick={handleFindHospitals}
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all duration-300 shadow-lg"
              >
                Find Hospitals
              </button>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/')}
            className="text-red-100 hover:text-white transition-colors duration-300 underline"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );

  // Render calling screen (Stage 2)
  const renderCallingScreen = () => (
    <div className="min-h-screen bg-linear-to-br from-red-600 via-red-700 to-red-800 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="animate-pulse mb-8">
            <svg 
              className="w-24 h-24 text-red-600 mx-auto mb-4" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Emergency Services</h2>
          
          <div className="text-6xl font-bold text-red-600 mb-8">
            {emergencyNumber?.number || '112'}
          </div>
          
          <p className="text-gray-600 mb-6">
            Tap the number to call emergency services
          </p>
          
          <a
            href={`tel:${emergencyNumber?.number || '112'}`}
            className="bg-red-600 text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition-all duration-300 shadow-lg text-lg inline-block"
          >
            📞 Call {emergencyNumber?.number || '112'}
          </a>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={() => setStage('options')}
              className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
            >
              ← Back to Options
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Render finding hospitals screen (Stage 3)
  const renderFindingScreen = () => {
    let loadingText = "Finding nearby hospitals and calculating distances...";
    
    if (isLoadingLocation) {
      loadingText = "Getting your location...";
    } else if (locationError) {
      loadingText = "Loading hospital data...";
    }
    
    return <PillLoader text={loadingText} />;
  };

  // Render map view with hospital list (Stage 4)
  const renderMapView = () => (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Nearby Hospitals</h1>
          <p className="text-gray-600">
            {userLocation ? 
              `Found ${nearestHospitals.length} hospitals near your location` : 
              `Showing ${nearestHospitals.length} hospitals in the area`
            }
          </p>
        </div>

        {/* Map and Hospital List Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Section (2/3 width on desktop) */}
          <div className="lg:col-span-2">
            <MapView
              userLocation={userLocation}
              hospitals={nearestHospitals.slice(0, 15)} // Limit to 15 for performance
              onHospitalSelect={handleHospitalSelect}
              selectedHospital={selectedHospital}
              className="h-96 lg:h-[600px]"
            />
          </div>

          {/* Hospital List Section (1/3 width on desktop) */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 h-96 lg:h-[600px] overflow-y-auto">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Hospital List</h2>
              
              <div className="space-y-4">
                {nearestHospitals.slice(0, 10).map((hospital, index) => (
                  <div
                    key={hospital.id}
                    className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                      selectedHospital?.id === hospital.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                    onClick={() => handleHospitalSelect(hospital)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-gray-900 text-sm">{hospital.name}</h3>
                      {index === 0 && userLocation && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          Nearest
                        </span>
                      )}
                    </div>
                    
                    <p className="text-xs text-gray-600 mb-1">{hospital.specialty}</p>
                    
                    {hospital.distance && (
                      <p className="text-sm font-semibold text-blue-600 mb-2">
                        {hospital.distanceText || `${hospital.distance} km away`}
                      </p>
                    )}
                    
                    <div className="flex justify-between items-center">
                      {hospital.emergency24x7 && (
                        <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                          24/7 Emergency
                        </span>
                      )}
                      
                      <div className="flex gap-2">
                        <a
                          href={`tel:${hospital.phone}`}
                          className="bg-green-600 text-white px-2 py-1 rounded text-xs hover:bg-green-700 transition-colors duration-200"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Call
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Medical Summary Sharing */}
            <div className="mt-6 bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">Emergency Tools</h3>
              
              <button
                onClick={handleShareMedicalSummary}
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 mb-3"
              >
                📋 Share Medical Summary
              </button>
              
              <p className="text-xs text-gray-600">
                Share your recent AI analysis with medical staff for faster treatment
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="text-center mt-8 space-x-4">
          <button
            onClick={() => setStage('options')}
            className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
          >
            ← Change Option
          </button>
          <button
            onClick={() => navigate('/')}
            className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
          >
            🏠 Back to Home
          </button>
        </div>
      </div>
    </div>
  );

  // Render consent modal
  const renderConsentModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Share Your Medical Information?</h3>
        
        <p className="text-gray-600 mb-6">
          This will prepare your recent AI analysis summary for sharing with the hospital. 
          The information will be formatted for medical staff to quickly understand your health status.
        </p>
        
        <div className="space-y-3 mb-6">
          <label className="flex items-center">
            <input type="checkbox" className="mr-3" required />
            <span className="text-sm text-gray-700">
              I consent to share my medical summary
            </span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-3" required />
            <span className="text-sm text-gray-700">
              I understand this is for emergency purposes only
            </span>
          </label>
        </div>
        
        <div className="flex gap-3">
          <button
            onClick={() => setShowConsentModal(false)}
            className="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-400 transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            onClick={handleConsentConfirm}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            Prepare Summary
          </button>
        </div>
      </div>
    </div>
  );

  // Main render
  return (
    <>
      {stage === 'options' && renderOptionsScreen()}
      {stage === 'calling' && renderCallingScreen()}
      {stage === 'finding' && renderFindingScreen()}
      {stage === 'map-view' && renderMapView()}
      {showConsentModal && renderConsentModal()}
    </>
  );
};

export default EmergencyPage;