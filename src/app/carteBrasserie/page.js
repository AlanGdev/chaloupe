import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function CarteBrasseriePage() {
  return (
    <>
      <Header />
      <main className="py-8 px-4 max-w-4xl mx-auto bg-gray-50">
        <h1 className="text-3xl font-bold text-center mb-6">
          Le Restaurant (sur place)
        </h1>
        <div className="bg-amber-50 rounded shadow p-4">
          <h2 className="text-xl font-semibold text-center underline">
            ENTRÉES
          </h2>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Crevettes sautées</p>
                <p className="text-gray-600">
                  Sauce curry-coco (crevettes non décortiquées)
                </p>
              </div>
              <p>9.80€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Rillettes de poissons</p>
              </div>
              <p>7.50€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Poêlon d&apos;encornets</p>
                <p className="text-gray-600">Au beurre d&apos;ail</p>
              </div>
              <p>9.00€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Assiette de jambon Cru</p>
              </div>
              <p>6.50€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Planche campagne à partager (2 personnes)</p>
                <p className="text-gray-600">
                  Jambon cru, coupe andouille de campagne, tome de Rhuys, chèvre
                  frais aux 3 poivres, salade verte
                </p>
              </div>
              <p>14.00€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Saucisson sec à partager</p>
                <p className="text-gray-600">nature ou au comté</p>
              </div>
              <p>6.50€</p>
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-center underline mt-8">
            SALADES
          </h2>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Salade Godaille</p>
                <p className="text-gray-600">
                  Salade, saumon fumé, crevettes, asperge, tomate, oignon rouge,
                  crème citronnée
                </p>
              </div>
              <p>15.00€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Salade Océane</p>
                <p className="text-gray-600">
                  Salade, tomate, concombre, noix de St jacques, crevettes et
                  lardons déglacés au vinaigre balsamique
                </p>
              </div>
              <p>19.00€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Salade verte</p>
              </div>
              <p>3.50€</p>
            </li>
          </ul>
          <h2 className="text-xl font-semibold text-center underline mt-8">
            MENU MOUSSAILLON 9.50€
          </h2>
          <p className="text-center mt-2 text-gray-600">
            (Pour les enfants de moins de 12 ans)
          </p>
          <ul className=" list-inside mt-4 space-y-2 text-center">
            <li className="my-2">
              Steak haché (VBF) - frites ou Jambon frites
            </li>
            <li className="my-2">
              Glace en pot vanille/fraise ou vanille/chocolat
            </li>
            <li className="my-2">
              <p>Boisson</p>
              <p className="text-gray-600">(Diabolo, sirop à l&apos;eau)</p>
            </li>
          </ul>
          <h2 className="text-xl font-semibold text-center underline mt-8">
            VIANDES
          </h2>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>
                  Pavé d&apos;andouille de campagne bretonne grillé, confiture
                  d&apos;oignons
                </p>
                <p className="text-gray-600">Frites - salade</p>
              </div>
              <p>17.50€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Tartare de boeuf au couteau Charolais non préparé</p>
                <p className="text-gray-600">Frites - salade</p>
              </div>
              <p>17.90€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Entrecôte grillée (frites - salade) VBF environ 280/300gr</p>
                <p className="text-gray-600">
                  Sauce au choix: béarnaise, poivre, gorgonzola
                </p>
              </div>
              <p>23.50€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Entrecôte Seguin VBF environ 280/300gr</p>
                <p className="text-gray-600">
                  Tranche de chèvre, napée sauce poivre, frites - salade
                </p>
              </div>
              <p>25.00€</p>
            </li>
          </ul>
          <h2 className="text-xl font-semibold text-center underline mt-8">
            POISSONS
          </h2>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Encornets au beurre d&apos;ails, riz et légumes</p>
              </div>
              <p>17.50€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Sauté de crevettes, sauce curry coco, riz et légumes</p>
                <p className="text-gray-600">(crevettes non décortiquées)</p>
              </div>
              <p>18.50€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>
                  Saint-Jacques cuisinées au cidre, crème et champignons, en
                  galette de blé noir
                </p>
                <p className="text-gray-600">servis avec salade verte</p>
              </div>
              <p>21.00€</p>
            </li>
          </ul>
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

          <h2 className="text-xl font-semibold text-center underline mt-8">
            DESSERTS
          </h2>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Crêpe gratinée aux pommes</p>
                <p className="text-gray-600">Caramel beurre salé</p>
              </div>
              <p>7.50€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Avec Supp. boule glace vanille</p>
              </div>
              <p>8.50€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Crème brûlée</p>
              </div>
              <p>6.80€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Brownie chocolat</p>
                <p className="text-gray-600">Caramel beurre salé, chantilly</p>
              </div>
              <p>6.80€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Nougat glacé</p>
                <p className="text-gray-600">Coulis fruits rouges, chantilly</p>
              </div>
              <p>8.00€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Petit délice</p>
                <p className="text-gray-600">
                  Crème mascarpone, pommes tièdes, caramel au beurre salé,
                  brisures palet breton, chantilly
                </p>
              </div>
              <p>8.00€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Pizza dessert</p>
                <div className="text-gray-600 flex flex-col">
                  <p className="text-gray-600">
                    Pomme-caramel beurre salé, chantilly
                  </p>
                  <p className="text-gray-600">Banane-chocolat, chantilly</p>
                </div>
              </div>
              <p>8.00€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Assiette du berger</p>
                <p className="text-gray-600">
                  Tome de Rhuys, chèvre, reblochon, salade verte
                </p>
              </div>
              <p>7.50€</p>
            </li>
          </ul>
          <h2 className="text-xl font-semibold text-center underline mt-8">
            COUPES GLACÉES
          </h2>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Dame Blanche</p>
                <p className="text-gray-600">
                  vanille, chocolat chaud, chantilly
                </p>
              </div>
              <p>7.30€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Chocolat Liégeois</p>
                <p className="text-gray-600">
                  chocolat, chocolat chaud, chantilly
                </p>
              </div>
              <p>7.30€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Café Liégeois</p>
                <p className="text-gray-600">café, sauce café, chantilly</p>
              </div>
              <p>7.30€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Goulue</p>
                <p className="text-gray-600">
                  vanille, caramel, crème brûlée, caramel beurre salé, chantilly
                </p>
              </div>
              <p>8.00€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Salidou</p>
                <p className="text-gray-600">
                  vanille, pommes caramélisées, caramel beurre salé, chantilly
                </p>
              </div>
              <p>8.00€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Caraïbes</p>
                <p className="text-gray-600">
                  passion, mangue, citron, coulis exotique, chantilly
                </p>
              </div>
              <p>8.00€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Antillaise</p>
                <p className="text-gray-600">
                  vanille, rhum raisin, café, raisins au rhum, chantilly
                </p>
              </div>
              <p>8.20€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Banana Split</p>
                <p className="text-gray-600">
                  vanille, chocolat, fraise, banane fruit, chocolat chaud,
                  chantilly
                </p>
              </div>
              <p>8.50€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Colonel</p>
                <p className="text-gray-600">citron, vodka</p>
              </div>
              <p>8.00€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>After eight</p>
                <p className="text-gray-600">menthe-chocolat, pippemint</p>
              </div>
              <p>8.00€</p>
            </li>
          </ul>
          <p>
            <span className="underline">Les parfums:</span>
            &nbsp;vanille, chocolat, café, caramel, crème brûlée, rhum-raisin,
            menthe-chocolat, fraise, citron, passion, mangue
          </p>
          <ul>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Coupe 1 boule</p>
              </div>
              <p>2.30€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Coupe 2 boules</p>
              </div>
              <p>4.50€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Coupe 3 boules</p>
              </div>
              <p>6.40€</p>
            </li>
          </ul>
          <ul>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Supplément chantilly</p>
              </div>
              <p>1.60€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p>Chocolat maison, caramel beurre salé maison</p>
              </div>
              <p>1.60€</p>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  )
}
