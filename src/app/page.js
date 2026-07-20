import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Section1Accueil } from '@/components/Section1Accueil'
import { Section2Accueil } from '@/components/Section2Accueil'
export const metadata = {
  title: 'Restaurant à Theix-Noyalo | La Chaloupe',

  description:
    'Restaurant, pizzeria, burgers et plats à emporter à Theix-Noyalo près de Vannes. Terrasse, véranda et cuisine conviviale.',
}

export default function Home() {
  return (
    <>
      <Header />
      <Section1Accueil />
      <Section2Accueil />
      {
        //<Gallery250 />
      }
      <Footer />
    </>
  )
}
