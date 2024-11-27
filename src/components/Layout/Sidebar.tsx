import React from 'react';
import { Home, Users, Map, Bell, ClipboardList } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', icon: Home, current: true },
  { name: 'Patients', icon: Users, current: false },
  { name: 'Hotspots', icon: Map, current: false },
  { name: 'Notifications', icon: Bell, current: false },
  { name: 'Reports', icon: ClipboardList, current: false },
];

export function Sidebar() {
  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col flex-grow bg-indigo-700 pt-5 pb-4 overflow-y-auto">
          <nav className="mt-5 flex-1 px-2 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href="#"
                className={`${
                  item.current
                    ? 'bg-indigo-800 text-white'
                    : 'text-indigo-100 hover:bg-indigo-600'
                } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
              >
                <item.icon
                  className="mr-3 h-6 w-6 flex-shrink-0 text-indigo-300"
                  aria-hidden="true"
                />
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}