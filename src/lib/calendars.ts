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
      'https://calendar.google.com/calendar/embed?src=CLASS_CALENDAR_ID&ctz=Asia%2FJakarta',
  },
  {
    id: 'exams',
    name: 'Exams',
    embedUrl:
      'https://calendar.google.com/calendar/embed?src=EXAM_CALENDAR_ID&ctz=Asia%2FJakarta',
  },
  {
    id: 'events',
    name: 'Academic Events',
    embedUrl:
      'https://calendar.google.com/calendar/embed?src=EVENT_CALENDAR_ID&ctz=Asia%2FJakarta',
  },
];
