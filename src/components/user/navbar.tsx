'use client';

import { FiMenu, FiSearch } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ThemeToggle } from '../toggle-theme';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className='w-full border-b bg-white'>
      <div className='max-w-7xl mx-auto px-4 h-16 flex items-center justify-between'>
        {/* Left: Logo */}
        <div className='flex items-center gap-2'>
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

        {/* Center: Search (desktop only) */}
        <div className='hidden md:flex flex-1 justify-center px-6'>
          <div className='w-full max-w-xl'>
            <Input
              placeholder='Find your next happy moment...'
              className='rounded-full px-5'
            />
          </div>
        </div>

        {/* Right: Menu (desktop) */}
        <nav className='hidden md:flex items-center gap-6'>
          <Link href='#' className='text-sm text-gray-600 hover:text-black'>
            Music
          </Link>
          <Link href='#' className='text-sm text-gray-600 hover:text-black'>
            Workshops
          </Link>
          <Link href='#' className='text-sm text-gray-600 hover:text-black'>
            Sports
          </Link>
          <Link href='#' className='text-sm text-gray-600 hover:text-black'>
            Sign In
          </Link>
          <Button className='rounded-full bg-primary cursor-pointer hover:bg-primary-hover'>
            Sign Up
          </Button>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu */}
        <div className='md:hidden'>
          <Sheet>
            <SheetTrigger>
              <span className='cursor-pointer inline-flex'>
                <FiMenu className='w-6 h-6' />
              </span>
            </SheetTrigger>

            <SheetContent side='right' className='w-[280px] p-6'>
              {/* Search Mobile */}
              <div className='relative mb-6'>
                <FiSearch className='absolute left-3 top-3 w-4 h-4 text-gray-400' />
                <Input placeholder='Search events...' className='pl-9' />
              </div>

              {/* Menu */}
              <div className='flex flex-col gap-4'>
                <Link href='#' className='text-gray-700'>
                  Music
                </Link>
                <Link href='#' className='text-gray-700'>
                  Workshops
                </Link>
                <Link href='#' className='text-gray-700'>
                  Sports
                </Link>
              </div>

              {/* Divider */}
              <div className='my-6 border-t' />

              {/* Auth */}
              <div className='flex flex-col gap-3'>
                <Button variant='outline'>Sign In</Button>
                <Button className='bg-red-400 hover:bg-red-500'>Sign Up</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
