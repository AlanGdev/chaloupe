// Header de l'application Chaloupe (daisyUI)
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header>
      <div className="navbar bg-base-100 px-4 h-16 md:h-20 lg:h-[100px] items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-lg md:text-xl"
            >
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

          <Link
            href="/"
            className="btn btn-ghost normal-case text-xl flex items-center gap-3"
          >
            {/* Utilise trois images différentes selon le breakpoint : mobile / tablette / desktop */}
            <Image
              src="/logomob.png"
              alt="La Chaloupe"
              width={40}
              height={40}
              className="block md:hidden"
            />
            <Image
              src="/logotab.png"
              alt="La Chaloupe"
              width={64}
              height={64}
              className="hidden md:block lg:hidden"
            />
            <Image
              src="/logodesktop.png"
              alt="La Chaloupe"
              width={80}
              height={80}
              className="hidden lg:block"
            />
            <span className="text-lg md:text-2xl lg:text-3xl font-semibold">
              La Chaloupe
            </span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg md:text-xl lg:text-xl">
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

        <div className="navbar-end">
          <a
            href="tel:+33687190292"
            className="btn btn-primary text-lg md:text-xl flex items-center"
            aria-label="Appeler +33 6 87 19 02 92"
          >
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
            <span>Appeler</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
