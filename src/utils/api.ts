import type { Patient, Notification } from '../types';

// Mock data - replace with actual API calls in production
const mockPatient: Patient = {
  id: '1',
  name: 'John Doe',
  phone: '+1234567890',
  location: {
    address: '123 Main St, City',
    coordinates: [0, 0]
  },
  symptoms: ['cough', 'fever'],
  adherenceRate: 85,
  lastDose: '2024-03-10T08:00:00Z',
  status: 'active'
};

const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'missed_dose',
    message: 'Patient John Doe missed their morning dose',
    timestamp: '2024-03-10T08:00:00Z',
    patientId: '1',
    read: false
  },
  {
    id: '2',
    type: 'update',
    message: 'Monthly report generated',
    timestamp: '2024-03-09T15:30:00Z',
    patientId: '1',
    read: true
  }
];

export async function fetchPatients(): Promise<Patient[]> {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => resolve([mockPatient]), 500);
  });
}

export async function fetchNotifications(): Promise<Notification[]> {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockNotifications), 500);
  });
}