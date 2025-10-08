import './globals.css';
import type { ReactNode } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>AI Resume Scanner</title>
      </head>
      <body className={inter.className}>
        <div className="gradient-bg">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
