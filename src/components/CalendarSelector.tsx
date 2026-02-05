'use client';

import { useState } from 'react';
import { calendars } from '@/lib/calendars';

export default function CalendarSelector() {
  const [activeId, setActiveId] = useState(calendars[0].id);
  const activeCalendar = calendars.find(c => c.id === activeId)!;

  return (
    <section className="space-y-4">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2">
        {calendars.map(calendar => {
          const isActive = activeId === calendar.id;

          return (
            <button
              key={calendar.id}
              onClick={() => setActiveId(calendar.id)}
              className={`
                px-4 py-2 rounded-md text-sm font-medium border
                transition-colors
                ${
                  isActive
                    ? 'bg-neutral-900 text-white border-neutral-900 dark:bg-neutral-100 dark:text-black dark:border-neutral-100'
                    : 'bg-transparent text-neutral-700 border-neutral-300 hover:bg-neutral-100 dark:text-neutral-300 dark:border-neutral-700 dark:hover:bg-neutral-800'
                }
              `}
            >
              {calendar.name}
            </button>
          );
        })}
      </div>

      {/* Calendar iframe container */}
      <div
        className="
          w-full aspect-video rounded-md overflow-hidden
          border border-neutral-300 dark:border-neutral-700
          bg-white dark:bg-neutral-900
        "
      >
        <iframe
          key={activeCalendar.id}
          src={activeCalendar.embedUrl}
          className="w-full h-full"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>
    </section>
  );
}
