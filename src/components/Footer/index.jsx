// Composant Footer (daisyUI)
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer p-6 md:p-10 bg-base-200 text-base-content">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logodesktop.png"
              alt="La Chaloupe"
              className="h-10 md:h-12"
            />
            <span className="text-lg md:text-xl font-semibold">
              La Chaloupe
            </span>
          </Link>
          <p className="mt-2 text-sm md:text-base">
            Restaurant & bar — pizzeria - burgers, cuisine locale et ambiance
            bord de mer.
            <br />
            Sur place ou à emporter.
          </p>
        </div>

        <div>
          <h3 className="footer-title">Liens</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link href="/" className="hover:underline">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/restaurant" className="hover:underline">
                Restaurant
              </Link>
            </li>
            <li>
              <Link href="/carte" className="hover:underline">
                Carte
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact & horaires
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="footer-title">Contact</h3>
          <a
            href="tel:+33687190292"
            className="flex items-center gap-3 text-base md:text-lg text-red-800 hover:text-red-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
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

          <div className="mt-4">
            <h4 className="font-semibold">Horaires</h4>
            <p className="text-sm">
              Mer–Dim: 09:00–22:00
              <br />
              Lun–Mar: Fermé
            </p>
          </div>

          <div className="mt-4 flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="btn btn-ghost btn-sm rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.12 8.44 9.93v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.76-1.61 1.54v1.84h2.74l-.44 2.9h-2.3V22C18.34 21.19 22 17.06 22 12.07z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-center mt-6 border-t pt-4">
        <p className="text-sm">
          © {new Date().getFullYear()} La Chaloupe — Tous droits réservés
        </p>
      </div>
    </footer>
  );
}
