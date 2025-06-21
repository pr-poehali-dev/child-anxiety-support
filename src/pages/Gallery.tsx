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
      title: "Урок с интерактивной доской",
      description: "Дети изучают животных с помощью современных технологий",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1544776527-d0bf49bbc0e8?w=800&h=600&fit=crop",
      title: "Творческие занятия",
      description: "Развитие креативности через рисование и лепку",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&fit=crop",
      title: "Игровая деятельность",
      description: "Социализация через совместные игры",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1566004100631-35d015d6a491?w=800&h=600&fit=crop",
      title: "Музыкальные занятия",
      description: "Развитие эмоционального интеллекта через музыку",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&h=600&fit=crop",
      title: "Физическая активность",
      description: "Здоровый образ жизни с раннего возраста",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
      title: "Чтение и развитие речи",
      description: "Формирование любви к книгам и знаниям",
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
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2">
                  {photo.title}
                </h3>
                <p className="text-sm text-gray-600">{photo.description}</p>
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
