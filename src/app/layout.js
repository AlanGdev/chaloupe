import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  metadataBase: new URL('https://lachaloupe-theix.fr'),

  title: {
    default: 'Restaurant La Chaloupe à Theix-Noyalo',

    template: '%s | Restaurant La Chaloupe',
  },

  description:
    'Restaurant, pizzeria, burgers et bar à Theix-Noyalo près de Vannes. Découvrez notre carte, notre terrasse, notre véranda et nos plats à emporter.',

  keywords: [
    'restaurant Theix',

    'restaurant Theix-Noyalo',

    'restaurant Vannes',

    'restaurant Golfe du Morbihan',

    'pizzeria Theix',

    'burger Theix',

    'restaurant terrasse',

    'plats à emporter',

    'La Chaloupe',
  ],

  authors: [{ name: 'Restaurant La Chaloupe' }],

  creator: 'Restaurant La Chaloupe',

  publisher: 'Restaurant La Chaloupe',

  robots: {
    index: true,

    follow: true,
  },

  openGraph: {
    type: 'website',

    locale: 'fr_FR',

    url: 'https://lachaloupe-theix.fr',

    siteName: 'Restaurant La Chaloupe',

    title: 'Restaurant La Chaloupe à Theix-Noyalo',

    description:
      'Restaurant, pizzeria, burgers et bar à Theix-Noyalo près de Vannes.',

    images: [
      {
        url: '/images/og.jpg',

        width: 1200,

        height: 630,

        alt: 'Restaurant La Chaloupe',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Restaurant La Chaloupe',

    description: 'Restaurant, pizzeria, burgers et bar à Theix-Noyalo.',

    images: ['/images/og.jpg'],
  },

  icons: {
    icon: '/favicon.ico',

    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <div className="w-full mx-auto flex-1 min-h-screen flex flex-col justify-between">
          {children}
        </div>
      </body>
    </html>
  )
}
