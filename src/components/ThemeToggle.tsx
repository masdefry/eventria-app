'use client';

import { useTheme } from 'next-themes';
import { CiDark, CiLight } from 'react-icons/ci';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (theme === 'dark') {
    return (
      <CiLight className='dark:text-black' onClick={() => setTheme('light')} />
    );
  }

  return <CiDark onClick={() => setTheme('dark')} />;
}
