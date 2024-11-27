import { useState, useEffect } from 'react';
import type { Patient } from '../types';
import { fetchPatients } from '../utils/api';

export function usePatients() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPatients = async () => {
      try {
        const data = await fetchPatients();
        setPatients(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load patients');
      } finally {
        setLoading(false);
      }
    };

    loadPatients();
  }, []);

  return { patients, loading, error };
}