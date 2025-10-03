import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Daniel Olojo | Pharmacist Intern & Full Stack Developer',
  description: 'Portfolio of Daniel Olojo - Pharmacist Intern and Full Stack Developer crafting impactful digital solutions with React Native, Next.js, and Node.js.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
