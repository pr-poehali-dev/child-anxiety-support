import React from "react";
import { useLocation } from "react-router-dom";

const NavigationHeader = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (item: any) => {
    if (item.type === "link") {
      window.location.href = item.href;
    } else {
      scrollToSection(item.id);
    }
  };

  const navItems = [
    { id: "anxiety-signs", label: "Признаки тревожности" },
    { id: "parenting-styles", label: "Стили воспитания" },
    { type: "link", href: "/recommendations", label: "Рекомендации" },
    { type: "link", href: "/gallery", label: "Наши дети" },
    { type: "link", href: "/games", label: "Игры и мультфильмы" },
  ];

  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-md sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gray-800">
            💙 Детская тревожность
          </div>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item, index) =>
              item.type === "link" ? (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  {item.label}
                </button>
              ),
            )}
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
