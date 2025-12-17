import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Section1Accueil } from '@/components/Section1Accueil';
import { Section2Accueil } from '@/components/Section2Accueil';

export default function Home() {
  return (
    <>
      <Header />
      <Section1Accueil />
      <Section2Accueil />
      <Footer />
    </>
  );
}
