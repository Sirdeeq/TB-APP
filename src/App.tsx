import React from 'react';
import { Header } from './components/Layout/Header';
import { Sidebar } from './components/Layout/Sidebar';
import { DashboardStats } from './components/Dashboard/DashboardStats';
import { HotspotMap } from './components/Map/HotspotMap';
import { PatientList } from './components/Patients/PatientList';
import { NotificationList } from './components/Notifications/NotificationList';
import { usePatients } from './hooks/usePatients';
import { useNotifications } from './hooks/useNotifications';

function App() {
  const { patients, loading: patientsLoading, error: patientsError } = usePatients();
  const { notifications, loading: notificationsLoading, error: notificationsError } = useNotifications();

  const stats = {
    totalPatients: 1234,
    activeHotspots: 23,
    averageAdherence: 87,
    newAlerts: notifications.filter(n => !n.read).length
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <DashboardStats {...stats} />

            <div className="mt-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">TB Hotspots Map</h2>
              <HotspotMap />
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Patients</h2>
                <PatientList 
                  patients={patients}
                  loading={patientsLoading}
                  error={patientsError}
                />
              </div>
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Notifications</h2>
                <div className="bg-white shadow rounded-lg p-6">
                  {notificationsLoading ? (
                    <div className="text-center py-4">Loading notifications...</div>
                  ) : notificationsError ? (
                    <div className="text-center text-red-600 py-4">{notificationsError}</div>
                  ) : (
                    <NotificationList notifications={notifications} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;