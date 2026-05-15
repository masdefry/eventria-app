'use client';

import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='bg-background border-t border-border mt-10'>
      <div className='max-w-7xl mx-auto px-4 py-10'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Brand */}
          <div>
            <div className='flex items-center gap-2 mb-3'>
              <Image
                src='/images/logo-only-eventria.png'
                alt='Eventria Logo Icon'
                width={32}
                height={32}
                className='h-8 w-auto'
              />

              <Image
                src='/images/logo-text-only-eventria.png'
                alt='Eventria Logo Text'
                width={120}
                height={40}
                className='h-6 md:h-8 w-auto'
              />
            </div>

            <p className='text-sm text-foreground-muted mb-4'>
              Making every day an adventure. Find your next favorite experience
              with the world’s friendliest ticketing platform.
            </p>

            {/* Social */}
            <div className='flex gap-3'>
              <div className='p-2 rounded-full bg-background-muted hover:bg-primary hover:text-primary-foreground cursor-pointer transition'>
                <FaFacebookF size={14} />
              </div>
              <div className='p-2 rounded-full bg-background-muted hover:bg-primary hover:text-primary-foreground cursor-pointer transition'>
                <FaTwitter size={14} />
              </div>
              <div className='p-2 rounded-full bg-background-muted hover:bg-primary hover:text-primary-foreground cursor-pointer transition'>
                <FaInstagram size={14} />
              </div>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className='text-sm font-semibold text-foreground mb-3'>
              EXPLORE
            </h4>
            <ul className='space-y-2 text-sm text-foreground-muted'>
              <li>
                <Link href='#'>Online Joy</Link>
              </li>
              <li>
                <Link href='#'>Hottest Events</Link>
              </li>
              <li>
                <Link href='#'>Nearby Fun</Link>
              </li>
              <li>
                <Link href='#'>Today's Vibe</Link>
              </li>
            </ul>
          </div>

          {/* For Hosts */}
          <div>
            <h4 className='text-sm font-semibold text-foreground mb-3'>
              FOR HOSTS
            </h4>
            <ul className='space-y-2 text-sm text-foreground-muted'>
              <li>
                <Link href='#'>Create Event</Link>
              </li>
              <li>
                <Link href='#'>Simple Pricing</Link>
              </li>
              <li>
                <Link href='#'>Growth Tools</Link>
              </li>
            </ul>
          </div>

          {/* Care */}
          <div>
            <h4 className='text-sm font-semibold text-foreground mb-3'>CARE</h4>
            <ul className='space-y-2 text-sm text-foreground-muted'>
              <li>
                <Link href='#'>Help Center</Link>
              </li>
              <li>
                <Link href='#'>Safety Rules</Link>
              </li>
              <li>
                <Link href='#'>Privacy First</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className='border-t border-border mt-8 pt-4 text-sm text-foreground-muted text-center'>
          © {new Date().getFullYear()} Eventria. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
