import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Section1Contact } from '@/components/Section1Contact'
import { Section2Contact } from '@/components/Section2Contact'

export const metadata = {
  title: 'Contact et horaires',

  description:
    'Horaires, téléphone, adresse et itinéraire pour rejoindre le restaurant La Chaloupe à Theix-Noyalo.',
}

export default function contactPage() {
  return (
    <>
      <Header />
      <Section1Contact />
      <Section2Contact />
      <Footer />
    </>
  )
}
