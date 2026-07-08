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
                <p className="font-semibold">Poëlon d&apos;encornets</p>
                <p className="text-gray-600">au beurre d&apos;ail</p>
              </div>
              <p>9.30€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">
                  Duo de crevettes mayo & Rillettes de poisson
                </p>
              </div>
              <p>9.50€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Tartare de thon au pesto</p>
              </div>
              <p>9.50€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Rillettes de poissons</p>
              </div>
              <p>7.80€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Poêlon de gésiers</p>
                <p className="text-gray-600">
                  Déglacés au vinaigre framboise, croûtons, sur lit de
                  salade{' '}
                </p>
              </div>
              <p>7.50€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Assiette de jambon Cru</p>
              </div>
              <p>6.50€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">
                  Planche de la mer à partager (2 personnes)
                </p>
                <p className="text-gray-600">
                  (Tartare de thon au pesto, rillettes de poissons, crevettes
                  sauce salsa,toasts)
                </p>
              </div>
              <p>16.00€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">
                  Planche campagne à partager (2 personnes)
                </p>
                <p className="text-gray-600">
                  (Jambon cru, coppa, andouille de campagne, tome de Rhuys,
                  chèvre frais aux 3 poivres, salade verte)
                </p>
              </div>
              <p>14.50€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Saucisson sec à partager</p>
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
                <p className="font-semibold">La César</p>
                <p className="text-gray-600">
                  (Salade, poulet, tomate cerise, croûtons, oignon rouge,
                  parmesan, sauce César)
                </p>
              </div>
              <p>14.50€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Godaille</p>
                <p className="text-gray-600">
                  (Salade, saumon fumé, crevettes, asperge, tomate, oignon
                  rouge, crème citronnée)
                </p>
              </div>
              <p>15.50€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Océane</p>
                <p className="text-gray-600">
                  (Salade, tomate, concombre, noix de St jacques, crevettes et
                  lardons déglacés au vinaigre balsamique)
                </p>
              </div>
              <p>19.50€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Salade verte</p>
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
            <li className="my-2">Boule de glace ou glace pot</li>
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
                <p className="font-semibold">
                  Pavé d&apos;andouille de campagne bretonne grillé, confiture
                  d&apos;oignons
                </p>
                <p className="text-gray-600">Frites - salade</p>
              </div>
              <p>17.50€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">
                  Tartare de boeuf au couteau Charolais non préparé
                </p>
                <p className="text-gray-600">Frites - salade</p>
              </div>
              <p>18.00€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">
                  Entrecôte grillée (frites - salade) VBF environ 280/300gr
                </p>
                <p className="text-gray-600">
                  Sauce au choix: béarnaise, poivre, gorgonzola
                </p>
              </div>
              <p>24.00€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">
                  Entrecôte Seguin VBF environ 280/300gr
                </p>
                <p className="text-gray-600">
                  Tranche de chèvre, napée sauce poivre, frites - salade
                </p>
              </div>
              <p>25.50€</p>
            </li>
          </ul>
          <h2 className="text-xl font-semibold text-center underline mt-8">
            POISSONS
          </h2>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">
                  Encornets au beurre d&apos;ail, riz et légumes
                </p>
              </div>
              <p>18.00€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">
                  Tartare de thon au pesto, parmesan, frites, salade
                </p>
              </div>
              <p>19.50€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">
                  Saint-Jacques cuisinées au cidre, crème et champignons, en
                  galette de blé noir gratinée
                </p>
                <p className="text-gray-600">servis avec salade verte</p>
              </div>
              <p>21.00€</p>
            </li>
          </ul>
          <h2 className="text-xl font-semibold text-center underline mt-8">
            MOULES
          </h2>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Moules marinières - frites</p>
              </div>
              <p>14.80€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Moules frites</p>
                <p className="text-gray-600">
                  sauce au choix: crème, gorgonzola, chorizo/poivrons
                </p>
              </div>
              <p>16.80€</p>
            </li>
          </ul>
          <h2 className="text-xl font-semibold text-center underline">
            BURGERS
          </h2>
          <p className="text-center">Servis avec frites et salade</p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Burger Classique</p>
                <p className="text-gray-600">
                  Bun, steack VBF, salade, tomate, cheddar, oignons rouges,
                  cornichons, sauce burger
                </p>
              </div>
              <p>14.00€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Burger Chef</p>
                <p className="text-gray-600">
                  Bun, steack VBF, salade, tomate, cheddar, tome de Rhuys,
                  confiture d&apos;oignons, cornichons, sauce burger
                </p>
              </div>
              <p>15.50€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Burger Fraîcheur (servi froid)</p>
                <p className="text-gray-600">
                  Burger feuilleté, fromage fouetté citronné,saumon fumé,
                  salade, concombre, oignon rouge
                </p>
              </div>
              <p>15.50€</p>
            </li>
          </ul>
          <h2 className="text-xl font-semibold text-center underline mt-8">
            PIZZAS
          </h2>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Bambino (enfant)</p>
                <p className="text-gray-600">Tomate, mozzarella, jambon</p>
              </div>
              <p>7.50€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Margarita</p>
                <p className="text-gray-600">Tomate, mozzarella, olives</p>
              </div>
              <p>8.50€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Venise</p>
                <p className="text-gray-600">Tomate, mozzarella, jambon</p>
              </div>
              <p>9.50€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Reine</p>
                <p className="text-gray-600">
                  Tomate, fromage, jambon, champignons
                </p>
              </div>
              <p>11.00€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Rustique</p>
                <p className="text-gray-600">
                  Tomate, mozzarella, jambon cru, crème fraîche, oeuf
                </p>
              </div>
              <p>12.50€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Napolitaine</p>
                <p className="text-gray-600">
                  Tomate, mozzarella, anchois, champignons, câpres, olives
                </p>
              </div>
              <p>13.00€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Végétarienne</p>
                <p className="text-gray-600">
                  Tomate, mozzarella, oignons rouges, poivrons, champignons,
                  tomates cerises, olives, persillade
                </p>
              </div>
              <p>13.00€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Trio</p>
                <p className="text-gray-600">
                  Tomate, mozzarella, chèvre, gorgonzola, reblochon
                </p>
              </div>
              <p>13.00€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Bretonne</p>
                <p className="text-gray-600">
                  Tomate, mozzarella, lardons, andouille, pomme fruit, oignons
                  rouges
                </p>
              </div>
              <p>13.00€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Bolognaise</p>
                <p className="text-gray-600">
                  Tomate, mozzarella, viande hachée, oignons rouges, oeuf,
                  persillade
                </p>
              </div>
              <p>13.00€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Méxicaine</p>
                <p className="text-gray-600">
                  Tomate, mozzarella, chorizo, merguez, poivrons, oignons rouges
                </p>
              </div>
              <p>13.00€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Montagnarde</p>
                <p className="text-gray-600">
                  Tomate, mozzarella, jambon cru, reblochon, oignons rouges,
                  lardons, crème fraîche
                </p>
              </div>
              <p>14.00€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Californienne</p>
                <p className="text-gray-600">
                  Tomate, fromage, poulet au curry, poivrons, oignons rouges,
                  ananas
                </p>
              </div>
              <p>14.00€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Kébab</p>
                <p className="text-gray-600">
                  Tomate, mozzarella, viande kebab, tomates cerises, oignons
                  rouges, sauce blanche
                </p>
              </div>
              <p>14.00€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Sinagote</p>
                <p className="text-gray-600">
                  Tomate, mozzarella, poivrons, chorizo, encornets, beurre
                  d&apos;ail
                </p>
              </div>
              <p>14.50€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Chaloupe</p>
                <p className="text-gray-600">
                  Tomate, mozzarella, noix de St Jacques, crevettes roses,
                  moules, persillade
                </p>
                <p className="text-gray-600 underline font-semibold">
                  Modification en base crème: +1.00€
                </p>
              </div>
              <p>15.50€</p>
            </li>
          </ul>
          <p className="underline mt-4 font-bold">Base crème:</p>
          <ul>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Saumonette</p>
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
                <p className="font-semibold">Fermière</p>
                <p className="text-gray-600">
                  Crème fraîche, mozzarella, oignons rouges, lardons, tome de
                  Rhuys, champignons
                </p>
              </div>
              <p>14.00€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Seguin</p>
                <p className="text-gray-600">
                  Crème fraîche, mozzarella, chèvre, coppa, oignons rouges, miel
                </p>
              </div>
              <p>13.00€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Supplément hors viande</p>
                <p className="text-gray-600">fromage, oeuf, légume</p>
              </div>
              <p>1.50€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Supplément viande</p>
                <p className="text-gray-600">
                  merguez, chorizo, poulet, viande hachée
                </p>
              </div>
              <p>2.00€</p>
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-center underline mt-8">
            DESSERTS
          </h2>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Crêpe gratinée aux pommes</p>
                <p className="text-gray-600">Caramel beurre salé</p>
              </div>
              <p>7.80€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Avec Supp. boule glace vanille</p>
              </div>
              <p>8.80€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Crème brûlée</p>
              </div>
              <p>7.00€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Brownie chocolat</p>
                <p className="text-gray-600">Caramel beurre salé, chantilly</p>
              </div>
              <p>7.00€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Nougat glacé</p>
                <p className="text-gray-600">Coulis fruits rouges, chantilly</p>
              </div>
              <p>8.00€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Petit délice</p>
                <p className="text-gray-600">
                  Crème mascarpone, pommes tièdes, caramel au beurre salé,
                  brisures palet breton, chantilly
                </p>
              </div>
              <p>8.50€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Pizza dessert</p>
                <div className="text-gray-600 flex flex-col">
                  <p className="text-gray-600">
                    Pomme-caramel beurre salé, chantilly
                  </p>
                  <p className="text-gray-600">Banane-chocolat, chantilly</p>
                </div>
              </div>
              <p>8.30€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Assiette du berger</p>
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
                <p className="font-semibold">Dame Blanche</p>
                <p className="text-gray-600">
                  vanille, chocolat chaud, chantilly
                </p>
              </div>
              <p>7.50€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Chocolat Liégeois</p>
                <p className="text-gray-600">
                  chocolat, chocolat chaud, chantilly
                </p>
              </div>
              <p>7.50€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Café Liégeois</p>
                <p className="text-gray-600">café, sauce café, chantilly</p>
              </div>
              <p>7.50€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Goulue</p>
                <p className="text-gray-600">
                  vanille, caramel, crème brûlée, caramel beurre salé, chantilly
                </p>
              </div>
              <p>8.20€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Salidou</p>
                <p className="text-gray-600">
                  vanille, pommes caramélisées, caramel beurre salé, chantilly
                </p>
              </div>
              <p>8.20€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Caraïbes</p>
                <p className="text-gray-600">
                  passion, mangue, citron, coulis exotique, chantilly
                </p>
              </div>
              <p>8.20€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Antillaise</p>
                <p className="text-gray-600">
                  vanille, rhum raisin, café, raisins au rhum, chantilly
                </p>
              </div>
              <p>8.40€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Fraise Melba</p>
                <p className="text-gray-600">
                  vanille, fraise, coulis de fruis rouges, chantilly
                </p>
              </div>
              <p>8.70€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Banana Split</p>
                <p className="text-gray-600">
                  vanille, chocolat, fraise, banane fruit, chocolat chaud,
                  chantilly
                </p>
              </div>
              <p>8.70€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Colonel</p>
                <p className="text-gray-600">citron, vodka</p>
              </div>
              <p>8.20€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">After eight</p>
                <p className="text-gray-600">menthe-chocolat, pippemint</p>
              </div>
              <p>8.20€</p>
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
                <p className="font-semibold">Coupe 1 boule</p>
              </div>
              <p>2.40€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Coupe 2 boules</p>
              </div>
              <p>4.70€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Coupe 3 boules</p>
              </div>
              <p>7.00€</p>
            </li>
          </ul>
          <ul>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">Supplément chantilly</p>
              </div>
              <p>1.80€</p>
            </li>
            <li className="flex justify-between my-2">
              <div className="flex flex-col">
                <p className="font-semibold">
                  Chocolat maison, caramel beurre salé maison
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
