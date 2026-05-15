import {
  formatDate,
  getLowestPrice,
  getPrimaryImage,
} from '@/features/events/utils/event.util';
import Image from 'next/image';

interface EventCardProps {
  event: any;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <div className='group cursor-pointer'>
      <div className='relative rounded-2xl overflow-hidden'>
        <Image
          src={getPrimaryImage(event?.eventImages)}
          alt={event?.title}
          width={400}
          height={500}
          className='w-full h-64 object-cover group-hover:scale-105 transition'
        />
        <span className='absolute top-3 right-3 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-semibold'>
          {getLowestPrice(event?.price)}
        </span>
        <span className='absolute bottom-3 left-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full'>
          {event?.title}
        </span>
      </div>
      <div className='mt-3'>
        <p className='text-xs text-foreground-subtle mb-1'>
          {formatDate(event?.startDate)}
        </p>
        <h3 className='font-medium text-foreground group-hover:text-primary transition'>
          {event?.title}
        </h3>
        <p className='text-sm text-foreground-muted'>{event?.location}</p>
      </div>
    </div>
  );
}
