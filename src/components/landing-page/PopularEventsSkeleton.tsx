import { Skeleton } from '@/components/ui/skeleton';

export default function PopularEventsSkeleton() {
  return (
    <section className='px-4 py-10'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='flex items-center justify-between mb-6'>
          <div className='space-y-2'>
            <Skeleton className='h-7 w-48 rounded-md' />
            <Skeleton className='h-4 w-64 rounded-md' />
          </div>
          <Skeleton className='h-4 w-20 rounded-md' />
        </div>

        {/* Filter Pills */}
        <div className='flex flex-wrap gap-3 mb-8'>
          {Array.from({ length: 7 }).map((_, i) => (
            <Skeleton
              key={i}
              className='h-8 rounded-full'
              style={{ width: `${60 + (i % 3) * 20}px` }}
            />
          ))}
        </div>

        {/* Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className='space-y-3'>
              {/* Image placeholder — badge & tag tidak perlu skeleton
                  terpisah karena tertutup oleh Skeleton gambar */}
              <Skeleton className='w-full h-64 rounded-2xl' />

              {/* Info */}
              <div className='space-y-2 mt-3'>
                <Skeleton className='h-3 w-28' />
                <Skeleton className='h-4 w-full' />
                <Skeleton className='h-3 w-36' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
