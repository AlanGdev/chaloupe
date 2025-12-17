export function RestaurantSection3() {
  return (
    <div className="w-full bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className=" flex flex-col sm:flex-row items-center gap-6">
          <div className="my-6 w-full sm:w-1/2">
            <img
              src="/terrasseChaloupe.avif"
              alt="Terrasse de La Chaloupe"
              className="mx-auto rounded-md w-full max-w-lg object-cover"
            />
          </div>
          <div className="w-full sm:w-1/2 space-y-4">
            <h3 className="text-4xl font-semibold underline">La Terrasse</h3>
            <p className="text-xl text-gray-700 leading-loose">
              Découvrez notre terrasse ensoleillée, un espace extérieur idéal
              pour savourer un repas tout en profitant de l&apos;air frais et de
              la vue sur le Golfe du Morbihan. Que ce soit pour un déjeuner
              décontracté ou un dîner sous les étoiles, la terrasse vous offre
              une ambiance agréable et conviviale.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantSection3;
