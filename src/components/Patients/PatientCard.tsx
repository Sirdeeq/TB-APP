import React from 'react';
import { Phone, MapPin, Activity } from 'lucide-react';
import type { Patient } from '../../types';

interface PatientCardProps {
  patient: Patient;
}

export function PatientCard({ patient }: PatientCardProps) {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center space-x-4">
        <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
          <span className="text-indigo-600 text-lg font-medium">
            {patient.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900">{patient.name}</h3>
          <div className="mt-1 flex items-center space-x-2 text-sm text-gray-500">
            <Phone className="h-4 w-4" />
            <span>{patient.phone}</span>
          </div>
        </div>
      </div>
      
      <div className="mt-4 border-t border-gray-200 pt-4">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <MapPin className="h-4 w-4" />
          <span>{patient.location.address}</span>
        </div>
        <div className="mt-2 flex items-center space-x-2">
          <Activity className="h-4 w-4 text-gray-500" />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Adherence Rate</span>
              <span className="text-sm font-medium text-gray-900">{patient.adherenceRate}%</span>
            </div>
            <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${
                  patient.adherenceRate >= 80 ? 'bg-green-500' :
                  patient.adherenceRate >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${patient.adherenceRate}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}