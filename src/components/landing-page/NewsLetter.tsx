'use client';

import { Mail } from 'lucide-react';

export default function NewsLetter() {
  return (
    <section className='px-4 py-12'>
      <div className='max-w-5xl mx-auto'>
        <div
          className='relative rounded-3xl p-6 md:p-10 text-center overflow-hidden
          bg-gradient-to-br from-background-muted to-background
          dark:from-background-muted dark:to-background
          border border-border'
        >
          {/* Icon */}
          <div className='w-14 h-14 mx-auto mb-4 rounded-xl bg-yellow-400 flex items-center justify-center shadow-md'>
            <Mail className='w-6 h-6 text-black' />
          </div>

          {/* Title */}
          <h2 className='text-xl md:text-2xl font-semibold text-foreground mb-2'>
            Don't miss the next big thing!
          </h2>

          {/* Description */}
          <p className='text-sm md:text-base text-foreground-muted mb-6 max-w-xl mx-auto'>
            Join 50,000+ event lovers and get exclusive access to early bird
            tickets and secret events.
          </p>

          {/* Input + Button */}
          <div className='flex flex-col sm:flex-row gap-3 max-w-xl mx-auto'>
            <input
              type='email'
              placeholder='your-email@happy.com'
              className='flex-1 rounded-full px-5 py-3
                bg-background border border-border
                text-foreground placeholder:text-foreground-subtle
                focus:outline-none focus:ring-2 focus:ring-primary'
            />

            <button
              className='rounded-full px-6 py-3
                bg-primary hover:bg-primary-hover
                text-primary-foreground font-medium shadow-lg transition'
            >
              Let's Go!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
