export type CalendarConfig = {
  id: string;
  name: string;
  embedUrl: string;
};

export const calendars: CalendarConfig[] = [
  {
    id: 'classes',
    name: 'Class Schedule',
    embedUrl:
      'https://calendar.google.com/calendar/embed?src=c_5dbf12dbc1c0445c7a47b4a4e70c0e3ab17a49f11d3446a30b1f9b9fed7b8961%40group.calendar.google.com&ctz=UTC',
  },
  {
    id: 'exams',
    name: 'Exams',
    embedUrl:
      'https://calendar.google.com/calendar/embed?src=c_5dbf12dbc1c0445c7a47b4a4e70c0e3ab17a49f11d3446a30b1f9b9fed7b8961%40group.calendar.google.com&ctz=UTC',
  },
  {
    id: 'events',
    name: 'Academic Events',
    embedUrl:
      'https://calendar.google.com/calendar/embed?src=c_5dbf12dbc1c0445c7a47b4a4e70c0e3ab17a49f11d3446a30b1f9b9fed7b8961%40group.calendar.google.com&ctz=UTC',
  },
];
