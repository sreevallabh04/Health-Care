// Comprehensive list of symptoms and diseases
export interface Symptom {
  id: string;
  name: string;
  category: 'General' | 'Respiratory' | 'Digestive' | 'Neurological' | 'Cardiovascular' | 'Musculoskeletal' | 'ENT' | 'Dermatological' | 'Psychological' | 'Urological';
  severity: 'Mild' | 'Moderate' | 'Severe';
}

export interface Medication {
  name: string;
  dosage: string;
  frequency: string;
  duration: string;
  notes?: string;
}

export interface Disease {
  id: string;
  name: string;
  symptoms: string[];
  description: string;
  urgency: 'Low' | 'Medium' | 'High' | 'Emergency';
  medications: Medication[];
}

export const symptoms: Symptom[] = [
  // General Symptoms
  { id: '1', name: 'Fever', category: 'General', severity: 'Moderate' },
  { id: '2', name: 'Fatigue', category: 'General', severity: 'Mild' },
  { id: '3', name: 'Weakness', category: 'General', severity: 'Moderate' },
  { id: '4', name: 'Night sweats', category: 'General', severity: 'Moderate' },
  { id: '5', name: 'Weight loss', category: 'General', severity: 'Moderate' },

  // Respiratory Symptoms
  { id: '6', name: 'Cough', category: 'Respiratory', severity: 'Mild' },
  { id: '7', name: 'Shortness of breath', category: 'Respiratory', severity: 'Severe' },
  { id: '8', name: 'Wheezing', category: 'Respiratory', severity: 'Moderate' },
  { id: '9', name: 'Chest congestion', category: 'Respiratory', severity: 'Moderate' },
  { id: '10', name: 'Rapid breathing', category: 'Respiratory', severity: 'Severe' },

  // Cardiovascular Symptoms
  { id: '11', name: 'Chest pain', category: 'Cardiovascular', severity: 'Severe' },
  { id: '12', name: 'Palpitations', category: 'Cardiovascular', severity: 'Moderate' },
  { id: '13', name: 'High blood pressure', category: 'Cardiovascular', severity: 'Severe' },
  { id: '14', name: 'Irregular heartbeat', category: 'Cardiovascular', severity: 'Severe' },
  { id: '15', name: 'Swelling in legs', category: 'Cardiovascular', severity: 'Moderate' },

  // Neurological Symptoms
  { id: '16', name: 'Headache', category: 'Neurological', severity: 'Moderate' },
  { id: '17', name: 'Dizziness', category: 'Neurological', severity: 'Moderate' },
  { id: '18', name: 'Confusion', category: 'Neurological', severity: 'Severe' },
  { id: '19', name: 'Memory problems', category: 'Neurological', severity: 'Moderate' },
  { id: '20', name: 'Seizures', category: 'Neurological', severity: 'Severe' },

  // Digestive Symptoms
  { id: '21', name: 'Nausea', category: 'Digestive', severity: 'Moderate' },
  { id: '22', name: 'Vomiting', category: 'Digestive', severity: 'Moderate' },
  { id: '23', name: 'Abdominal pain', category: 'Digestive', severity: 'Moderate' },
  { id: '24', name: 'Diarrhea', category: 'Digestive', severity: 'Moderate' },
  { id: '25', name: 'Constipation', category: 'Digestive', severity: 'Mild' },

  // Musculoskeletal Symptoms
  { id: '26', name: 'Joint pain', category: 'Musculoskeletal', severity: 'Moderate' },
  { id: '27', name: 'Muscle aches', category: 'Musculoskeletal', severity: 'Moderate' },
  { id: '28', name: 'Back pain', category: 'Musculoskeletal', severity: 'Moderate' },
  { id: '29', name: 'Neck stiffness', category: 'Musculoskeletal', severity: 'Moderate' },
  { id: '30', name: 'Joint swelling', category: 'Musculoskeletal', severity: 'Moderate' },

  // ENT Symptoms
  { id: '31', name: 'Sore throat', category: 'ENT', severity: 'Mild' },
  { id: '32', name: 'Runny nose', category: 'ENT', severity: 'Mild' },
  { id: '33', name: 'Ear pain', category: 'ENT', severity: 'Moderate' },
  { id: '34', name: 'Hearing loss', category: 'ENT', severity: 'Moderate' },
  { id: '35', name: 'Sinus pressure', category: 'ENT', severity: 'Moderate' },

  // Dermatological Symptoms
  { id: '36', name: 'Rash', category: 'Dermatological', severity: 'Moderate' },
  { id: '37', name: 'Itching', category: 'Dermatological', severity: 'Mild' },
  { id: '38', name: 'Skin discoloration', category: 'Dermatological', severity: 'Mild' },
  { id: '39', name: 'Hives', category: 'Dermatological', severity: 'Moderate' },
  { id: '40', name: 'Dry skin', category: 'Dermatological', severity: 'Mild' },

  // Psychological Symptoms
  { id: '41', name: 'Anxiety', category: 'Psychological', severity: 'Moderate' },
  { id: '42', name: 'Depression', category: 'Psychological', severity: 'Moderate' },
  { id: '43', name: 'Insomnia', category: 'Psychological', severity: 'Moderate' },
  { id: '44', name: 'Mood swings', category: 'Psychological', severity: 'Moderate' },
  { id: '45', name: 'Panic attacks', category: 'Psychological', severity: 'Severe' },

  // Urological Symptoms
  { id: '46', name: 'Frequent urination', category: 'Urological', severity: 'Moderate' },
  { id: '47', name: 'Burning urination', category: 'Urological', severity: 'Moderate' },
  { id: '48', name: 'Blood in urine', category: 'Urological', severity: 'Severe' },
  { id: '49', name: 'Lower back pain', category: 'Urological', severity: 'Moderate' },
  { id: '50', name: 'Urinary incontinence', category: 'Urological', severity: 'Moderate' }
];

export const diseases: Disease[] = [
  {
    id: '1',
    name: 'Common Cold',
    symptoms: ['Fever', 'Cough', 'Fatigue', 'Runny nose', 'Sore throat'],
    description: 'A viral infection of the upper respiratory tract.',
    urgency: 'Low',
    medications: [
      {
        name: 'Acetaminophen',
        dosage: '500mg',
        frequency: 'Every 6 hours',
        duration: '3-5 days',
        notes: 'Take with food'
      },
      {
        name: 'Dextromethorphan',
        dosage: '30mg',
        frequency: 'Every 6-8 hours',
        duration: 'As needed',
        notes: 'For cough suppression'
      }
    ]
  },
  {
    id: '2',
    name: 'Pneumonia',
    symptoms: ['Fever', 'Cough', 'Shortness of breath', 'Chest pain', 'Rapid breathing'],
    description: 'An infection that inflames the air sacs in one or both lungs.',
    urgency: 'High',
    medications: [
      {
        name: 'Azithromycin',
        dosage: '500mg',
        frequency: 'Once daily',
        duration: '5 days',
        notes: 'Take with food'
      },
      {
        name: 'Ibuprofen',
        dosage: '400mg',
        frequency: 'Every 6 hours',
        duration: 'As needed for fever and pain'
      }
    ]
  },
  {
    id: '3',
    name: 'Migraine',
    symptoms: ['Headache', 'Nausea', 'Dizziness', 'Vision problems'],
    description: 'A headache of varying intensity, often accompanied by nausea and sensitivity to light and sound.',
    urgency: 'Medium',
    medications: [
      {
        name: 'Sumatriptan',
        dosage: '50mg',
        frequency: 'As needed',
        duration: 'Max 2 doses per 24 hours',
        notes: 'Take at first sign of migraine'
      },
      {
        name: 'Ondansetron',
        dosage: '4mg',
        frequency: 'Every 8 hours',
        duration: 'As needed for nausea'
      }
    ]
  },
  {
    id: '4',
    name: 'Appendicitis',
    symptoms: ['Abdominal pain', 'Nausea', 'Fever', 'Loss of appetite'],
    description: 'Inflammation of the appendix causing severe abdominal pain.',
    urgency: 'Emergency',
    medications: [
      {
        name: 'Surgical intervention required',
        dosage: 'N/A',
        frequency: 'N/A',
        duration: 'N/A',
        notes: 'Seek immediate medical attention'
      }
    ]
  },
  {
    id: '5',
    name: 'Hypertension',
    symptoms: ['High blood pressure', 'Headache', 'Dizziness', 'Chest pain'],
    description: 'Persistently elevated blood pressure that can lead to serious health problems.',
    urgency: 'High',
    medications: [
      {
        name: 'Lisinopril',
        dosage: '10mg',
        frequency: 'Once daily',
        duration: 'Long-term',
        notes: 'Take at the same time each day'
      },
      {
        name: 'Hydrochlorothiazide',
        dosage: '25mg',
        frequency: 'Once daily',
        duration: 'Long-term',
        notes: 'Take in the morning'
      }
    ]
  },
  {
    id: '6',
    name: 'Gastroenteritis',
    symptoms: ['Nausea', 'Vomiting', 'Diarrhea', 'Abdominal pain', 'Fever'],
    description: 'Inflammation of the digestive system, often caused by viral or bacterial infection.',
    urgency: 'Medium',
    medications: [
      {
        name: 'Loperamide',
        dosage: '2mg',
        frequency: 'After each loose stool',
        duration: 'Max 8mg per day',
        notes: 'Stop if fever develops'
      },
      {
        name: 'Oral Rehydration Solution',
        dosage: '200ml',
        frequency: 'After each loose stool',
        duration: 'Until symptoms resolve',
        notes: 'Maintain hydration'
      }
    ]
  },
  {
    id: '7',
    name: 'Bronchitis',
    symptoms: ['Cough', 'Chest congestion', 'Wheezing', 'Fatigue', 'Fever'],
    description: 'Inflammation of the bronchial tubes that carry air to and from the lungs.',
    urgency: 'Medium',
    medications: [
      {
        name: 'Amoxicillin',
        dosage: '500mg',
        frequency: 'Three times daily',
        duration: '7-10 days',
        notes: 'Complete full course'
      },
      {
        name: 'Guaifenesin',
        dosage: '400mg',
        frequency: 'Every 4 hours',
        duration: 'As needed',
        notes: 'For mucus relief'
      }
    ]
  },
  {
    id: '8',
    name: 'Urinary Tract Infection',
    symptoms: ['Frequent urination', 'Burning urination', 'Lower back pain', 'Fever'],
    description: 'Infection in any part of the urinary system, most commonly in the bladder and urethra.',
    urgency: 'Medium',
    medications: [
      {
        name: 'Nitrofurantoin',
        dosage: '100mg',
        frequency: 'Twice daily',
        duration: '5 days',
        notes: 'Take with food'
      },
      {
        name: 'Phenazopyridine',
        dosage: '200mg',
        frequency: 'Three times daily',
        duration: '2 days',
        notes: 'For pain relief'
      }
    ]
  },
  {
    id: '9',
    name: 'Anxiety Disorder',
    symptoms: ['Anxiety', 'Panic attacks', 'Insomnia', 'Fatigue', 'Chest pain'],
    description: 'A mental health condition characterized by persistent feelings of anxiety and panic.',
    urgency: 'Medium',
    medications: [
      {
        name: 'Sertraline',
        dosage: '50mg',
        frequency: 'Once daily',
        duration: 'Long-term',
        notes: 'Take in the morning'
      },
      {
        name: 'Alprazolam',
        dosage: '0.25mg',
        frequency: 'As needed',
        duration: 'Short-term only',
        notes: 'For panic attacks'
      }
    ]
  },
  {
    id: '10',
    name: 'Rheumatoid Arthritis',
    symptoms: ['Joint pain', 'Joint swelling', 'Fatigue', 'Fever', 'Morning stiffness'],
    description: 'An autoimmune disorder that primarily affects joints.',
    urgency: 'Medium',
    medications: [
      {
        name: 'Methotrexate',
        dosage: '7.5mg',
        frequency: 'Once weekly',
        duration: 'Long-term',
        notes: 'Take with folic acid'
      },
      {
        name: 'Prednisone',
        dosage: '5mg',
        frequency: 'Once daily',
        duration: 'As prescribed',
        notes: 'Take in the morning'
      }
    ]
  }
];