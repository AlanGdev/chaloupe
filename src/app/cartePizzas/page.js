import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function CartePizzasPage() {
  return (
    <>
      <Header />
      <main className="py-8 px-4 max-w-4xl mx-auto bg-gray-50">
        <h1 className="text-3xl font-bold text-center mb-6">
          Pizzas & Burgers (sur place ou à emporter)
        </h1>
        <div className="bg-amber-50 rounded shadow p-4">
          <h2 className="text-xl font-semibold text-center underline">
            BURGERS
          </h2>
          <p className="text-center">Servis avec frites et salade</p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Burger Classique</p>
                <p className="text-gray-600">
                  Bun, steack VBF, salade, tomate, cheddar, oignons rouges,
                  cornichons, sauce burger
                </p>
              </div>
              <p>14.00€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Burger Chef</p>
                <p className="text-gray-600">
                  Bun, steack VBF, salade, tomate, cheddar, tome de Rhuys,
                  confiture d&apos;oignons, cornichons, sauce burger
                </p>
              </div>
              <p>15.50€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Burger Veggie</p>
                <p className="text-gray-600">
                  Steack de légumes, salade, tomate, cheddar, tome de Rhuys,
                  confiture d&apos;oignons, cornichons, sauce burger
                </p>
              </div>
              <p>14.50€</p>
            </li>
          </ul>
          <h2 className="text-xl font-semibold text-center underline mt-8">
            PIZZAS
          </h2>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Bambino (enfant)</p>
                <p className="text-gray-600">Tomate, mozzarella, jambon</p>
              </div>
              <p>7.50€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Margarita</p>
                <p className="text-gray-600">Tomate, mozzarella, olives</p>
              </div>
              <p>8.50€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Venise</p>
                <p className="text-gray-600">Tomate, mozzarella, jambon</p>
              </div>
              <p>9.50€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Reine</p>
                <p className="text-gray-600">
                  Tomate, fromage, jambon, champignons
                </p>
              </div>
              <p>11.00€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Rustique</p>
                <p className="text-gray-600">
                  Tomate, mozzarella, jambon cru, crème fraîche, oeuf
                </p>
              </div>
              <p>12.50€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Napolitaine</p>
                <p className="text-gray-600">
                  Tomate, mozzarella, anchois, champignons, câpres, olives
                </p>
              </div>
              <p>13.00€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Végétarienne</p>
                <p className="text-gray-600">
                  Tomate, mozzarella, oignons rouges, poivrons, champignons,
                  tomates cerises, olives, persillade
                </p>
              </div>
              <p>13.00€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Trio</p>
                <p className="text-gray-600">
                  Tomate, mozzarella, chèvre, gorgonzola, reblochon
                </p>
              </div>
              <p>13.00€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Bretonne</p>
                <p className="text-gray-600">
                  Tomate, mozzarella, lardons, andouille, pomme fruit, oignons
                  rouges
                </p>
              </div>
              <p>13.00€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Bolognaise</p>
                <p className="text-gray-600">
                  Tomate, mozzarella, viande hachée, oignons rouges, oeuf,
                  persillade
                </p>
              </div>
              <p>13.00€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Méxicaine</p>
                <p className="text-gray-600">
                  Tomate, mozzarella, chorizo, merguez, poivrons, oignons rouges
                </p>
              </div>
              <p>13.00€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Montagnarde</p>
                <p className="text-gray-600">
                  Tomate, mozzarella, jambon cru, reblochon, oignons rouges,
                  lardons, crème fraîche
                </p>
              </div>
              <p>14.00€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Californienne</p>
                <p className="text-gray-600">
                  Tomate, fromage, poulet au curry, poivrons, oignons rouges,
                  ananas
                </p>
              </div>
              <p>14.00€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Kébab</p>
                <p className="text-gray-600">
                  Tomate, mozzarella, viande kebab, tomates cerises, oignons
                  rouges, sauce blanche
                </p>
              </div>
              <p>14.00€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Sinagote</p>
                <p className="text-gray-600">
                  Tomate, mozzarella, poivrons, chorizo, encornets, beurre
                  d&apos;ail
                </p>
              </div>
              <p>14.50€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Chaloupe</p>
                <p className="text-gray-600">
                  Tomate, mozzarella, noix de St Jacques, crevettes roses,
                  moules, persillade
                </p>
                <p className="text-gray-600 underline font-semibold">
                  Modification en base crème: +0.50€
                </p>
              </div>
              <p>15.50€</p>
            </li>
          </ul>
          <p className="underline mt-4 font-bold">Base crème:</p>
          <ul>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Saumonette</p>
                <div className="text-gray-600 flex flex-col">
                  <p className="text-gray-600">
                    Crème fraîche, mozzarella, saumon fumé, citron, salicornes
                  </p>
                </div>
              </div>
              <p>14.50€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Fermière</p>
                <p className="text-gray-600">
                  Crème fraîche, mozzarella, oignons rouges, lardons, tome de
                  Rhuys, champignons
                </p>
              </div>
              <p>14.00€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Seguin</p>
                <p className="text-gray-600">
                  Crème fraîche, mozzarella, chèvre, coppa, oignons rouges, miel
                </p>
              </div>
              <p>13.00€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-bold">Supplément hors viande</p>
              </div>
              <p>1.30€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-bold">Supplément viande</p>
                <p className="text-gray-600">
                  merguez, chorizo, poulet, viande hachée
                </p>
              </div>
              <p>1.80€</p>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  )
}
