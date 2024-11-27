import React from 'react';
import { PatientCard } from './PatientCard';
import type { Patient } from '../../types';

interface PatientListProps {
  patients: Patient[];
  loading?: boolean;
  error?: string | null;
}

export function PatientList({ patients, loading, error }: PatientListProps) {
  if (loading) {
    return <div className="text-center py-4">Loading patients...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600 py-4">{error}</div>;
  }

  if (patients.length === 0) {
    return <div className="text-center py-4">No patients found</div>;
  }

  return (
    <div className="space-y-4">
      {patients.map((patient) => (
        <PatientCard key={patient.id} patient={patient} />
      ))}
    </div>
  );
}