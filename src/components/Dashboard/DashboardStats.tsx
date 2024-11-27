import React from 'react';
import { Users, MapPin, Activity, Bell } from 'lucide-react';
import { StatCard } from './StatCard';

interface DashboardStatsProps {
  totalPatients: number;
  activeHotspots: number;
  averageAdherence: number;
  newAlerts: number;
}

export function DashboardStats({
  totalPatients,
  activeHotspots,
  averageAdherence,
  newAlerts
}: DashboardStatsProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Patients"
        value={totalPatients.toLocaleString()}
        icon={Users}
        trend={{ value: 12, isPositive: true }}
      />
      <StatCard
        title="Active Hotspots"
        value={activeHotspots}
        icon={MapPin}
        trend={{ value: 5, isPositive: false }}
      />
      <StatCard
        title="Average Adherence"
        value={`${averageAdherence}%`}
        icon={Activity}
        trend={{ value: 3, isPositive: true }}
      />
      <StatCard
        title="New Alerts"
        value={newAlerts}
        icon={Bell}
      />
    </div>
  );
}