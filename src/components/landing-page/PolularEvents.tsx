import { getEvents } from '@/features/events/actions/get-popular-events.action';
import { PopularEventsClient } from './PopularEventsClient';

export default async function PopularEvents() {
  const events = await getEvents({ sortBy: 'popular' });

  return (
    <section className='px-4 py-10'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex items-center justify-between mb-6'>
          <div>
            <h2 className='text-xl md:text-2xl font-semibold text-foreground'>
              Popular Right Now
            </h2>
            <p className='text-sm text-foreground-muted'>
              Grab your spot before they're all gone!
            </p>
          </div>
          <button className='text-sm text-primary cursor-pointer hover:underline'>
            Explore All →
          </button>
        </div>{' '}
        <PopularEventsClient initialEvents={events ?? []} />
      </div>
    </section>
  );
}
