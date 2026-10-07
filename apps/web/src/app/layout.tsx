import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tamga Zakaz',
  description: 'Multilingual delivery platform for restaurants, cafes, and taxi services',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
