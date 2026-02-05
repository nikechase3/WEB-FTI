import CalendarSelector from '@/components/CalendarSelector';

export const metadata = {
  title: 'Calendar',
};

export default function CalendarPage() {
  return (
    <main className="
      max-w-6xl mx-auto p-6 space-y-6
      bg-white text-black
      dark:bg-neutral-900 dark:text-neutral-100
      transition-colors
    ">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold">
          Academic Calendars
        </h1>

        <p className="text-gray-600 dark:text-gray-400">
          Switch between schedules.
        </p>
      </header>

      <CalendarSelector />
    </main>
  );
}
