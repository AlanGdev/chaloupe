"use client";

import React, { useState } from "react";

const thumbnails = [
    "/sauteCrevettes250px.avif",
    "/encornets250px.avif",
    "/tartareDeBoeuf250px.avif",
    "/saladeGodaille250px.avif",
    "/entrecoteGrillee250px.avif",
    "/saladeOceane250px.avif",
    "/burgerChef250px.avif",
     "/pizzaCalifornienne250px.avif",
  "/pizzaRustique250px.avif",
  "/petitDelice250px.avif",
  "/bananaSplit250px.avif",  
  "/nougatGlace250px.avif", 
];

function toFull(src) {
  return src.replace("250px", "");
}

export default function Gallery250() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const openAt = (i) => {
    setActive(i);
    setOpen(true);
  };

  const close = () => setOpen(false);

  return (
    <div className="w-full mx-auto p-4 bg-gray-200 rounded-lg my-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {thumbnails.map((src, i) => (
          <button
            key={src}
            onClick={() => openAt(i)}
            className="overflow-hidden rounded-md bg-gray-100"
            aria-label={`Ouvrir l'image ${i + 1}`}
            type="button"
          >
            <img src={src} alt={`thumb-${i + 1}`} className="w-full h-full object-cover block" />
          </button>
        ))}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={close}
        >
          <div className="max-w-4xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={close}
              className="mb-2 text-white bg-black/40 px-3 py-1 rounded"
              aria-label="Fermer"
            >
              Fermer
            </button>
            <img src={toFull(thumbnails[active])} alt={`full-${active + 1}`} className="w-full h-auto rounded-md shadow-lg" />
          </div>
        </div>
      )}
    </div>
  );
}
