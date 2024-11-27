export interface Patient {
  id: string;
  name: string;
  phone: string;
  location: {
    address: string;
    coordinates: [number, number];
  };
  symptoms: string[];
  adherenceRate: number;
  lastDose: string;
  status: 'active' | 'completed' | 'defaulted';
  videos?: AdherenceVideo[];
  xrays?: XRayResult[];
}

export interface Notification {
  id: string;
  type: 'missed_dose' | 'update' | 'alert';
  message: string;
  timestamp: string;
  patientId: string;
  read: boolean;
}

export interface AdherenceVideo {
  id: string;
  url: string;
  timestamp: string;
  verified: boolean;
  notes?: string;
}

export interface XRayResult {
  id: string;
  imageUrl: string;
  timestamp: string;
  aiPrediction: {
    probability: number;
    diagnosis: string;
    confidence: number;
  };
  verified: boolean;
  doctorNotes?: string;
}