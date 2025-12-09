"use client";

import { useEffect, useState } from "react";

const galleryCategories = [
  "Living Room",
  "Kitchen",
  "Dining Room",
  "Bedroom",
  "Washroom",
  "Balcony",
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("Living Room");
  const [galleryItems, setGalleryItems] = useState([]);

  // Load images from database
  const fetchGallery = async () => {
    const res = await fetch("/api/gallery/list");
    const data = await res.json();
    setGalleryItems(data);
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  const filteredItems = galleryItems.filter((item: any) => item.category === activeTab);

  return (
    <section id="gallery" className="py-20 md:py-32 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">Gallery</h2>
          <div className="w-12 h-1 bg-accent mx-auto" />
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-6 mb-12 border-b border-border pb-6">
          {galleryCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`text-sm font-medium transition-all pb-2 relative group ${
                activeTab === category ? "text-accent font-semibold" : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {category}
              {activeTab === category && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accent" />}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item: any) => (
            <div key={item.id} className="group relative h-72 rounded-lg overflow-hidden shadow-md cursor-pointer">
              <img
                src={item.image_path}  // <-- Use DB path
                alt={`${item.category} design`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="px-6 py-2 bg-accent text-accent-foreground rounded-full font-semibold hover:opacity-90 transition-opacity">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* If Empty */}
        {filteredItems.length === 0 && (
          <p className="text-center text-gray-600 mt-10">No images uploaded yet in this category.</p>
        )}
      </div>
    </section>
  );
}
