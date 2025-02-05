import React, { useState } from 'react';
import { Activity, AlertCircle, CheckCircle2, Pill, Guitar as Hospital, MapPin, Search } from 'lucide-react';
import { symptoms, diseases, Symptom, Disease } from '../data/symptoms';

export default function SymptomChecker() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [location, setLocation] = useState('');
  const [result, setResult] = useState<Disease | null>(null);
  const [showHospitals, setShowHospitals] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const handleSymptomSelect = (symptomName: string) => {
    if (selectedSymptoms.includes(symptomName)) {
      setSelectedSymptoms(prev => prev.filter(s => s !== symptomName));
    } else {
      setSelectedSymptoms(prev => [...prev, symptomName]);
    }
  };

  const analyzeSymptoms = () => {
    let bestMatch: Disease | null = null;
    let maxMatchCount = 0;

    diseases.forEach(disease => {
      const matchCount = disease.symptoms.filter(s => 
        selectedSymptoms.includes(s)
      ).length;

      if (matchCount > maxMatchCount) {
        maxMatchCount = matchCount;
        bestMatch = disease;
      }
    });

    setResult(bestMatch);
    setShowHospitals(true);
  };

  const categories = ['All', ...Array.from(new Set(symptoms.map(s => s.category)))];
  
  const filteredSymptoms = symptoms.filter(symptom => 
    selectedCategory === 'All' || symptom.category === selectedCategory
  );

  const mockHospitals = [
    { name: "City General Hospital", distance: "2.5 km", rating: 4.5 },
    { name: "Medical Center West", distance: "3.8 km", rating: 4.8 },
    { name: "St. Mary's Hospital", distance: "5.1 km", rating: 4.3 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Activity className="w-12 h-12 text-blue-400" />
          </div>
          <h1 className="text-4xl font-bold mb-2">AI Medical Assistant</h1>
          <p className="text-blue-300">Advanced Symptom Analysis & Hospital Finder</p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Search className="w-5 h-5 mr-2" />
                Select Your Symptoms
              </h2>
              
              <div className="mb-4 flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1 rounded-full text-sm transition-all ${
                      selectedCategory === category
                        ? 'bg-blue-500 text-white'
                        : 'bg-white/5 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6 max-h-[400px] overflow-y-auto">
                {filteredSymptoms.map((symptom) => (
                  <button
                    key={symptom.id}
                    onClick={() => handleSymptomSelect(symptom.name)}
                    className={`p-3 rounded-lg text-sm transition-all ${
                      selectedSymptoms.includes(symptom.name)
                        ? 'bg-blue-500 text-white'
                        : 'bg-white/5 hover:bg-white/20'
                    }`}
                  >
                    {symptom.name}
                    {symptom.severity === 'Severe' && (
                      <AlertCircle className="w-4 h-4 inline ml-2 text-red-400" />
                    )}
                  </button>
                ))}
              </div>

              <div className="mb-6">
                <label className="block mb-2 flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Your Location
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-white/5 border border-white/20 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your location"
                />
              </div>

              <button
                onClick={analyzeSymptoms}
                disabled={selectedSymptoms.length === 0 || !location}
                className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-800 disabled:cursor-not-allowed py-3 rounded-lg font-semibold transition-colors"
              >
                Analyze Symptoms
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {result && (
              <>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
                  <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <CheckCircle2 className="w-5 h-5 mr-2 text-green-400" />
                    Analysis Result
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <h3 className="font-semibold text-lg mb-2">{result.name}</h3>
                      <p className="text-blue-300">{result.description}</p>
                      <div className="mt-3">
                        <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                          result.urgency === 'Emergency' ? 'bg-red-500' :
                          result.urgency === 'High' ? 'bg-orange-500' :
                          result.urgency === 'Medium' ? 'bg-yellow-500' :
                          'bg-green-500'
                        }`}>
                          {result.urgency} Priority
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
                  <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <Pill className="w-5 h-5 mr-2" />
                    Recommended Medications
                  </h2>
                  <div className="space-y-4">
                    {result.medications.map((medication, index) => (
                      <div key={index} className="bg-white/5 rounded-lg p-4">
                        <h3 className="font-semibold text-lg mb-2">{medication.name}</h3>
                        <div className="space-y-2 text-blue-300">
                          <p>Dosage: {medication.dosage}</p>
                          <p>Frequency: {medication.frequency}</p>
                          <p>Duration: {medication.duration}</p>
                          {medication.notes && (
                            <p className="text-yellow-300">Note: {medication.notes}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {showHospitals && (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Hospital className="w-5 h-5 mr-2" />
                  Nearby Hospitals
                </h2>
                <div className="space-y-3">
                  {mockHospitals.map((hospital, index) => (
                    <div key={index} className="bg-white/5 rounded-lg p-4">
                      <h3 className="font-semibold">{hospital.name}</h3>
                      <div className="text-sm text-blue-300">
                        <span>{hospital.distance}</span>
                        <span className="mx-2">•</span>
                        <span>Rating: {hospital.rating}/5</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}