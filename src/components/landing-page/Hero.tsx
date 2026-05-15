'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Hero() {
  return (
    <section className='px-4 py-6 md:py-10'>
      <div className='relative max-w-7xl mx-auto rounded-3xl overflow-hidden'>
        {/* Background */}
        <Image
          src='/images/hero-background.png'
          alt='Hero'
          fill
          priority
          className='object-cover'
        />

        {/* Overlay */}
        <div className='absolute inset-0 bg-black/40 dark:bg-black/60' />

        {/* Content */}
        <div className='relative z-10 p-6 md:p-12 lg:p-16 max-w-2xl text-white'>
          {/* Badge */}
          <Badge className='mb-4 bg-yellow-400 text-black hover:bg-yellow-400'>
            FEATURED NOW
          </Badge>

          {/* Title */}
          <h1 className='text-3xl md:text-5xl font-bold leading-tight mb-4'>
            Moments that{' '}
            <span className='text-yellow-400'>make you smile.</span>
          </h1>

          {/* Description */}
          <p className='text-sm md:text-base text-white/80 mb-6'>
            Discover festivals, creative workshops, and high-energy sports
            events curated just for you.
          </p>

          {/* Actions */}
          <div className='flex flex-wrap gap-4'>
            {/* Primary CTA */}
            <Button className='cursor-pointer rounded-full px-6 py-3 shadow-lg'>
              Get Tickets
            </Button>

            {/* Secondary CTA */}
            <Button
              variant='outline'
              className='cursor-pointer rounded-full px-6 py-3 border-white/40 text-black hover:bg-white/10 hover:text-white backdrop-blur'
            >
              Explore Lineup
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
