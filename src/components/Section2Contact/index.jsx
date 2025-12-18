export function Section2Contact() {
  return (
    <section className="bg-gray-500 py-6">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">Où nous trouver</h2>
        <div className="w-full max-w-4xl mx-auto">
          <div className="aspect-[16/9] w-full rounded-md overflow-hidden shadow">
            <iframe
              title="La Chaloupe - emplacement"
              src="https://www.google.com/maps?q=1+rue+du+moulin+%C3%A0+mar%C3%A9e+56450+Theix-noyalo&output=embed"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-sm text-gray-100 mt-2">
            1 rue du moulin à marée, 56450 Theix-Noyalo
          </p>
        </div>
      </div>
    </section>
  )
}
