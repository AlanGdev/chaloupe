export function RestaurantSection2() {
  return (
    <div className="w-full bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className=" flex flex-col sm:flex-row items-center gap-6">
          <div className="w-full sm:w-1/2 space-y-4">
            <h3 className="text-4xl font-semibold underline">La Véranda</h3>
            <p className="text-xl text-gray-700 leading-loose">
              La véranda de La Chaloupe offre un cadre lumineux et aéré, idéal
              pour profiter d&apos;un repas tout en admirant la vue sur le Golfe
              du Morbihan. Que ce soit pour un déjeuner ensoleillé ou un dîner
              romantique, cet espace vous accueille dans une ambiance
              chaleureuse et conviviale.
            </p>
          </div>

          <div className="my-6 w-full sm:w-1/2">
            <img
              src="/verandaChaloupe.avif"
              alt="Véranda de La Chaloupe"
              className="mx-auto rounded-md w-full max-w-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantSection2;
