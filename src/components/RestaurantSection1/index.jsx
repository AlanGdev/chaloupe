export function RestaurantSection1() {
  return (
    <div className="w-full bg-amber-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className=" flex flex-col sm:flex-row items-center gap-6">
          <div className="my-6 w-full sm:w-1/2">
            <img
              src="/salleChaloupe.avif"
              alt="Salle de La Chaloupe"
              className="mx-auto rounded-md w-full max-w-lg object-cover"
            />
          </div>
          <div className="w-full sm:w-1/2 space-y-4">
            <h3 className="text-4xl font-semibold underline">
              À l&apos;intérieur
            </h3>
            <p className="text-xl text-gray-700 leading-loose">
              Découvrez notre salle de restaurant chaleureuse et conviviale,
              parfaite pour partager un repas en famille ou entre amis dans une
              ambiance détendue.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestaurantSection1
