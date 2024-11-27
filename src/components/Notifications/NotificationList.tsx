import React from 'react';
import { Bell, AlertTriangle, RefreshCw } from 'lucide-react';
import type { Notification } from '../../types';

interface NotificationListProps {
  notifications: Notification[];
}

export function NotificationList({ notifications }: NotificationListProps) {
  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {notifications.map((notification, idx) => (
          <li key={notification.id}>
            <div className="relative pb-8">
              {idx !== notifications.length - 1 && (
                <span
                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              )}
              <div className="relative flex space-x-3">
                <div>
                  <span className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white ${
                    notification.type === 'missed_dose' ? 'bg-red-500' :
                    notification.type === 'update' ? 'bg-blue-500' : 'bg-yellow-500'
                  }`}>
                    {notification.type === 'missed_dose' ? (
                      <AlertTriangle className="h-5 w-5 text-white" />
                    ) : notification.type === 'update' ? (
                      <RefreshCw className="h-5 w-5 text-white" />
                    ) : (
                      <Bell className="h-5 w-5 text-white" />
                    )}
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm text-gray-500">{notification.message}</p>
                  </div>
                  <div className="whitespace-nowrap text-right text-sm text-gray-500">
                    <time dateTime={notification.timestamp}>
                      {new Date(notification.timestamp).toLocaleDateString()}
                    </time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}