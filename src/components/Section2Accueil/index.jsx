// Section 2 Accueil component
export function Section2Accueil() {
  return (
    <>
    {//Nouvelles section dont la largeur sera égale à 60% su parent en mode desktop, 80% en tablette et 100% en mobile
    <section className="w-full md:w-4/5 sm:w-4/5 xs:w-full mx-auto my-8 p-2 rounded-lg bg-transparent">
      <h2 className="text-3xl font-semibold mb-4 text-center">Bienvenue à La Chaloupe</h2>
      <p className="text-2xl leading-loose text-center">
        Nichée à Noyalo, au pied du Golfe du Morbihan, La Chaloupe est un lieu authentique o&ugrave; l&apos;on vient autant pour bien manger que pour passer un moment convivial. Notre restaurant vous accueille dans une ambiance chaleureuse et d&eacute;contract&eacute;e, id&eacute;ale pour savourer des plats faits maison pr&eacute;par&eacute;s avec soin.<br/>
        Ici, on aime les choses simples mais de qualité : des produits frais, des fournisseurs locaux et une ambiance qui sent bon les vacances. Que vous soyez amateurs de bons plats, de pizzas ou de burgers, notre carte variée saura satisfaire toutes vos envies.<br/>
        Venez d&eacute;couvrir notre terrasse ensoleill&eacute;e ou profiter de notre int&eacute;rieur cosy, parfait pour un repas en famille, entre amis ou en couple.<br/>
        &Agrave; La Chaloupe, chaque visite est une invitation &agrave; la d&eacute;tente et au plaisir des papilles.
      </p>
    </section>
        }
        </>)
}