export default function CalendarPage() {
  const calendarEmbedUrl = `https://calendar.google.com/calendar/embed?src=c_5dbf12dbc1c0445c7a47b4a4e70c0e3ab17a49f11d3446a30b1f9b9fed7b8961%40group.calendar.google.com&ctz=UTC`;

  return (
    <section className="max-w-4xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Class Schedule</h1>

      <div className="border rounded overflow-hidden aspect-video">
        <iframe
          title="Google Calendar"
          src={calendarEmbedUrl}
          className="w-full h-full"
        ></iframe>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400">
        To sync events, go to Google Calendar settings and share your calendar ID.
      </p>
    </section>
  );
}
