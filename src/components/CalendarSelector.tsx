'use client';

import { useState } from 'react';
import { calendars } from '@/lib/calendars';

export default function CalendarSelector() {
  const [activeId, setActiveId] = useState(calendars[0].id);
  const activeCalendar = calendars.find(c => c.id === activeId)!;

  return (
    <section className="space-y-4">
      {/* Tabs */}
      <div className="flex gap-2 flex-wrap">
        {calendars.map(calendar => (
          <button
            key={calendar.id}
            onClick={() => setActiveId(calendar.id)}
            className={`px-4 py-2 rounded border text-sm font-medium
              ${
                activeId === calendar.id
                  ? 'bg-gray-900 text-white dark:bg-gray-100 dark:text-black'
                  : 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
          >
            {calendar.name}
          </button>
        ))}
      </div>

      {/* Calendar iframe */}
      <div className="w-full aspect-video border rounded overflow-hidden">
        <iframe
          key={activeCalendar.id}
          src={activeCalendar.embedUrl}
          className="w-full h-full"
          loading="lazy"
        />
      </div>
    </section>
  );
}
