import React, { useState } from "react";
import NavigationHeader from "@/components/NavigationHeader";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photos = [
    {
      id: 1,
      url: "https://cdn.poehali.dev/files/a2c3df8a-b11d-4c57-a308-b0e18e586e40.jpg",
    },
    {
      id: 2,
      url: "https://cdn.poehali.dev/files/8172abc0-befa-437f-bcea-b39d696a75ee.jpg",
    },
    {
      id: 3,
      url: "https://cdn.poehali.dev/files/8c835420-0662-4dad-a83f-2828a18b387a.jpg",
    },
    {
      id: 4,
      url: "https://cdn.poehali.dev/files/d5c2bd07-a678-4b75-abc5-893e0cbee58d.jpg",
    },
    {
      id: 5,
      url: "https://cdn.poehali.dev/files/3f5e6e4f-6088-4290-bef0-f7b484ff1538.jpg",
    },
    {
      id: 6,
      url: "https://cdn.poehali.dev/files/53029137-6ec3-4f97-b804-5a0e89a29551.jpg",
    },
    {
      id: 7,
      url: "https://cdn.poehali.dev/files/3c1e9803-0f7c-4c4d-a89c-4439f7c2d354.jpg",
    },
    {
      id: 8,
      url: "https://cdn.poehali.dev/files/7d65cd87-16c4-47b0-b4da-3ba9b30609d1.jpg",
    },
    {
      id: 9,
      url: "https://cdn.poehali.dev/files/bd3fe91e-8500-4222-9ad3-6f4ce5be4021.jpg",
    },
    {
      id: 10,
      url: "https://cdn.poehali.dev/files/a01a68c0-fba3-4d20-8fba-29f6c2d63cd1.jpg",
    },
    {
      id: 11,
      url: "https://cdn.poehali.dev/files/a83b78f6-ada3-49bc-86c2-6eea53e83030.jpg",
    },
    {
      id: 12,
      url: "https://cdn.poehali.dev/files/e8fba49b-6b4e-4b50-9345-183aa8af912e.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <NavigationHeader />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            👶 Наши дети
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Моменты роста, развития и радости наших малышей в детском саду
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(photo.url)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={photo.url}
                  alt="Фото из детского сада"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="bg-white/90 rounded-full p-3">
                  <Icon name="ZoomIn" size={24} className="text-gray-700" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
          <div className="relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
            >
              <Icon name="X" size={24} className="text-gray-700" />
            </button>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Полноразмерное фото"
                className="w-full h-auto rounded-lg"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
