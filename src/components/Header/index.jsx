// Header de l'application Chaloupe (daisyUI)
import React from 'react'
import Link from 'next/link'

// Composant Header responsive
// - Mobile-first : le menu principal est un dropdown sur petites tailles
// - Desktop : navigation centrale affichée (`navbar-center`) lorsque `lg` est atteint
// - Utilise des classes daisyUI/Tailwind (`navbar`, `dropdown`, `menu`) pour le style
// - Les images du logo changent selon le breakpoint : `logomob.png`, `logotab.png`, `logodesktop.png`
// - Le bouton d'appel utilise un lien `tel:` pour ouvrir le composeur sur mobile

const Header = () => {
  return (
    <header>
      <div className="flex justify-center items-center py-2 bg-white shadow-md h-24">
        <Link
          href="/"
          className="btn btn-ghost normal-case text-xl flex items-center gap-3 hover:bg-transparent hover:border-none"
        >
          {/* Trois images selon le breakpoint pour optimiser l'affichage */}
          <img
            src="/logodesktop.png"
            alt="La Chaloupe"
            width={100}
            height={100}
            className="object-contain"
          />

          {/* Nom de la marque : taille responsive */}
          {/*<span className="text-lg md:text-2xl lg:text-3xl font-semibold ">
              La Chaloupe
            </span>*/}
        </Link>
      </div>

      {/* Conteneur principal du header. Hauteur responsive : mobile(64px) md(80px) lg(100px) */}
      <div className="navbar bg-base-100 px-2 h-16 md:h-20 lg:h-[100px] items-center ">
        {/* Section gauche : menu mobile (dropdown) + logo */}
        <div className="navbar-start">
          {/* Dropdown hamburger visible uniquement < lg */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              {/* Icône hamburger (accessible via `label` interactif) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>

            {/* Contenu du dropdown (menu mobile) */}
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-lg md:text-xl"
            >
              {/* Liens simples ; on peut ajouter `aria-current` si nécessaire */}
              <li>
                <Link href="/">Accueil</Link>
              </li>
              <li>
                <Link href="/restaurant">Restaurant</Link>
              </li>
              <li>
                <Link href="/carte">Carte</Link>
              </li>
              <li>
                <Link href="/contact">Contact & horaires</Link>
              </li>
            </ul>
          </div>

          {/* Logo + nom : lien vers la page d'accueil */}
          {/* Lien vers la page Facebook */}
          <a
            href="https://www.facebook.com/p/La-Chaloupe-100057433330072/"
            aria-label="Facebook"
            className="btn btn-ghost btn-sm rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.12 8.44 9.93v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.76-1.61 1.54v1.84h2.74l-.44 2.9h-2.3V22C18.34 21.19 22 17.06 22 12.07z" />
            </svg>
          </a>
        </div>

        {/* Section centrale : menu horizontal visible en desktop (lg+) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-2 text-lg md:text-xl lg:text-xl">
            <li>
              <Link
                className="font-semibold hover:text-blue-400 hover:bg-transparent transition-colors"
                href="/"
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                className="font-semibold hover:text-blue-400 hover:bg-transparent transition-colors"
                href="/restaurant"
              >
                Restaurant
              </Link>
            </li>
            <li>
              <Link
                className="font-semibold hover:text-blue-400 hover:bg-transparent transition-colors"
                href="/carte"
              >
                Carte
              </Link>
            </li>
            <li>
              <Link
                className="font-semibold hover:text-blue-400 hover:bg-transparent transition-colors"
                href="/contact"
              >
                Contact & horaires
              </Link>
            </li>
          </ul>
        </div>

        {/* Section droite : bouton d'appel téléphonique */}
        <div className="navbar-end">
          {/* Lien `tel:` ouvre le composeur sur mobile. Couleurs pastel pour style doux. */}
          <a
            href="tel:+33687190292"
            className="btn text-lg md:text-xl flex items-center bg-red-200 text-red-800 hover:bg-red-300 border-transparent shadow-sm focus:outline-none"
            aria-label="Appeler +33 6 87 19 02 92"
          >
            {/* Icône téléphone SVG (inline pour éviter dépendances supplémentaires) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h2.2a1 1 0 01.95.684l.8 2.4a1 1 0 01-.217.93l-1 1a11 11 0 005 5l1-1a1 1 0 01.93-.217l2.4.8A1 1 0 0121 16.8V19a2 2 0 01-2 2A19 19 0 013 5z"
              />
            </svg>
            <span>02 97 43 05 48</span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
