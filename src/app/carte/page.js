import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function CartePage() {
  return (
    <>
      <Header />
      <h1 className="text-4xl text-black font-bold text-center bg-amber-50 py-8">
        Nos Cartes
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-4 my-8">
        <a href="/carteBrasserie" className="inline-block focus:outline-none">
          <img src="/carteBrasserie.jpg" alt="Carte Brasserie" />
        </a>

        <a href="/cartePizzas" className="inline-block focus:outline-none">
          <img src="/carteAemporter.jpg" alt="Carte Pizzas & Burgers" />
        </a>

        <a
          href="https://www.facebook.com/p/La-Chaloupe-100057433330072/"
          className="inline-block focus:outline-none"
        >
          <img src="/carteMenuJour.jpg" alt="Menu du jour - lien Facebook" />
        </a>
      </div>

      <Footer />
    </>
  )
}
