// Requires Next.js server to be running, do not use in tests

import type { NextFont } from 'next/dist/compiled/@next/font';
import { Inter } from 'next/font/google';

export const inter: NextFont = Inter({
  subsets: ['latin'],
  display: 'swap', // Loads font asynchronously
});
