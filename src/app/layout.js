import './globals.css';
import { Koulen, Lato } from 'next/font/google';

const koulen = Koulen({ 
  subsets: ['latin'],
  variable: '--font-koulen',
  weight: '400',
});

const lato = Lato({ 
  subsets: ['latin'],
  variable: '--font-lato',
  weight: '300',
});

export const metadata = {
  title: 'Millys Takeaways',
  description: 'Authentic Chinese & More',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${koulen.variable} ${lato.variable}`}>
      <body>{children}</body>
    </html>
  )
}
