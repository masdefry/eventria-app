'use client';

import { useState, useCallback, useTransition } from 'react';
import { FilterPills } from './FilterPills';
import { EventCard } from './EventCard';
import {
  FILTER_LABELS,
  FILTER_LABELS_MAP,
  FilterLabel,
} from '@/features/events/constants/filter-labels';
import { Events } from '@/features/events/types/event.type';
import { getEvents } from '@/features/events/actions/get-popular-events.action';
import PopularEventsSkeleton from './PopularEventsSkeleton';
import { NoEventsFound } from '../NoEventsFound';

interface PopularEventsClientProps {
  initialEvents: Events[];
}

export function PopularEventsClient({
  initialEvents,
}: PopularEventsClientProps) {
  const [events, setEvents] = useState<Events[]>(initialEvents);
  const [activeFilter, setActiveFilter] = useState(0);
  const [isPending, startTransition] = useTransition();

  const handleFilterSelect = useCallback((index: number) => {
    setActiveFilter(index);
    const filterLabel = FILTER_LABELS_MAP[FILTER_LABELS[index] as FilterLabel];
    startTransition(async () => {
      const filtered = await getEvents({
        category: filterLabel,
      });
      setEvents(filtered);
    });
  }, []);

  const renderContent = () => {
    if (isPending) {
      return <PopularEventsSkeleton />;
    }

    if (events.length === 0) {
      return (
        <NoEventsFound
          activeFilterLabel={FILTER_LABELS[activeFilter]}
          onReset={() => handleFilterSelect(0)}
        />
      );
    }

    return (
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    );
  };

  return (
    <>
      <FilterPills
        labels={FILTER_LABELS}
        activeIndex={activeFilter}
        onSelect={handleFilterSelect}
      />
      {renderContent()}
    </>
  );
}
