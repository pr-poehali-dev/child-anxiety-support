import React from "react";

const NavigationHeader = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "anxiety-signs", label: "Признаки тревожности" },
    { id: "parenting-styles", label: "Стили воспитания" },
    { id: "recommendations", label: "Рекомендации" },
    { id: "gallery", label: "Галерея работ" },
    { id: "cartoons", label: "Мультфильмы" },
  ];

  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-md sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gray-800">
            💙 Детская тревожность
          </div>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="md:hidden">
            <button className="text-gray-700">☰</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavigationHeader;
