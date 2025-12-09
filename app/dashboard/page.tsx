"use client";

import { useState, useEffect } from "react";
import { Upload, ImageIcon, Home, LogOut, Trash2 } from "lucide-react";

const galleryCategories = [
  "Living Room",
  "Kitchen",
  "Dining Room",
  "Bedroom",
  "Washroom",
  "Balcony",
];

export default function Dashboard() {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [category, setCategory] = useState("Living Room");
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedImages(Array.from(e.target.files));
    }
  };

  const fetchImages = async () => {
    const res = await fetch("/api/gallery/list");
    const data = await res.json();
    setUploadedImages(data);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleUpload = async () => {
    if (!selectedImages.length) return alert("Please select images");

    const formData = new FormData();
    formData.append("category", category);
    selectedImages.forEach((img) => formData.append("images", img));

    const res = await fetch("/api/gallery/upload", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      alert("Images uploaded successfully!");
      setSelectedImages([]);
      fetchImages();
    } else {
      alert("Upload failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-blue-700 to-indigo-700 text-white p-6 flex flex-col gap-6 shadow-xl">
        <h1 className="text-2xl font-bold tracking-wide mb-4">Admin Panel</h1>

        <nav className="flex flex-col gap-3 font-medium">
          <a className="flex items-center gap-3 hover:bg-blue-600 px-3 py-2 rounded-lg cursor-pointer">
            <Home size={20} /> Dashboard
          </a>
          <a className="flex items-center gap-3 hover:bg-blue-600 px-3 py-2 rounded-lg cursor-pointer">
            <ImageIcon size={20} /> Gallery
          </a>
        </nav>

        <button className="mt-auto flex items-center gap-3 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-sm font-semibold">
          <LogOut size={18} /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Upload Gallery Images</h2>

        <div className="bg-white w-full p-6 rounded-xl shadow-md border border-gray-200">

          {/* Category Dropdown */}
          <label className="block mb-4 font-medium text-gray-700">
            Select Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mb-6 w-64 px-4 py-2 border rounded-lg shadow-sm outline-none"
          >
            {galleryCategories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>

          {/* Image Upload */}
          <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-xl p-6 cursor-pointer hover:border-indigo-500 transition">
            <Upload size={40} className="text-gray-600" />
            <span className="mt-2 text-gray-600">Click to select images</span>
            <input type="file" multiple hidden onChange={handleImageChange} />
          </label>

          {selectedImages.length > 0 && (
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Preview:</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {selectedImages.map((img, i) => (
                  <img
                    key={i}
                    src={URL.createObjectURL(img)}
                    className="w-full h-32 object-cover rounded-lg shadow"
                  />
                ))}
              </div>

              <button
                className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold flex gap-2 items-center"
                onClick={handleUpload}
              >
                <Upload size={20} /> Upload Images
              </button>
            </div>
          )}
        </div>

        {/* Display uploaded images */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4">Uploaded Gallery</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {uploadedImages.map((item: any) => (
              <div key={item.id} className="relative group">
                <img
                  src={item.image_path}
                  className="w-full h-32 object-cover rounded-lg shadow"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
