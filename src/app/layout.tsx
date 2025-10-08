import './globals.css';
import type { ReactNode } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>AI Resume Scanner</title>
      </head>
      <body>
        <div className="gradient-bg">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
