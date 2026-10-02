export function Section3Accueil() {
  // Section 3 de l'accueil : image responsive "1026-VendredisOctobre"
  return (
    <section className="w-full mx-auto my-8 p-2 rounded-lg bg-transparent">
      <div className="w-full max-w-4xl mx-auto overflow-hidden rounded-md">
        <picture>
          <source
            srcSet="/1026-VendredisOctobre.avif"
            type="image/avif"
            media="(min-width: 1024px)"
          />
          <source
            srcSet="/1026-VendredisOctobre.avif"
            type="image/avif"
            media="(min-width: 640px)"
          />
          <img
            src="/1026-VendredisOctobre.avif"
            alt="Vendredis d'Octobre à La Chaloupe"
            className="w-full h-auto object-cover object-center block"
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        </picture>
      </div>
    </section>
  )
}
