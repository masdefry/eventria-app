import Hero from '@/components/landing-page/Hero';
import NewsLetter from '@/components/landing-page/NewsLetter';
import PopularEvents from '@/components/landing-page/PolularEvents';
import PopularEventsSkeleton from '@/components/landing-page/PopularEventsSkeleton';
import { Suspense } from 'react';
export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<PopularEventsSkeleton />}>
        <PopularEvents />
      </Suspense>
      <NewsLetter />
    </>
  );
}
