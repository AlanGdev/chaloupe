export function Section1Contact() {
  return (
    <section className="bg-blue-300 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-8 text-lg">
          Pour toute réservation ou question, n&apos;hésitez pas à nous
          contacter !
        </p>
        <div className="space-y-4 flex justify-around flex-wrap md:flex-nowrap">
          <div className="flex flex-col justify-center gap-4">
            <div>
              <h3 className="text-xl font-semibold">Adresse</h3>
              <p>
                1, rue du Moulin à Marée
                <br />
                56450 Theix-Noyalo
                <br /> France
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Contact</h3>
              <p>
                <a href="tel:+33687190292" className="hover:underline">
                  Téléphone : 02 97 43 05 48
                </a>
                <br />
                <a
                  href="mailto:contact@lachaloupe.fr"
                  className="hover:underline"
                >
                  Email : contact@lachaloupe.fr
                </a>
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-2">
              Horaires d&apos;ouverture
            </h3>
            <p>
              Lundi - Mardi : Fermé
              <br />
              Mercredi - Dimanche : 09h00 - 22h00
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
