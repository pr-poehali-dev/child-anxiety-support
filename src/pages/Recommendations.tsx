import NavigationHeader from "@/components/NavigationHeader";
import RecommendationsList from "@/components/RecommendationsList";

const Recommendations = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 relative overflow-hidden">
      <NavigationHeader />

      {/* Анимированные фоновые элементы */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="floating-element top-20 left-10 float-1">
          <div className="text-6xl">💡</div>
        </div>
        <div className="floating-element top-32 right-20 float-2">
          <div className="text-5xl">📚</div>
        </div>
        <div className="floating-element top-80 left-1/4 drift-1">
          <div className="text-4xl">✨</div>
        </div>
        <div className="floating-element bottom-40 right-10 swing-1">
          <div className="text-6xl">🌟</div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 text-center bg-gradient-to-r from-green-100 to-blue-100 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
            📋 Рекомендации и материалы
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Практические советы для родителей и полезные ресурсы для работы с
            детской тревожностью
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-16 relative z-10">
        <div id="recommendations">
          <RecommendationsList />
        </div>

        {/* Additional Resources */}
        <section
          id="additional-materials"
          className="bg-white rounded-2xl p-8 shadow-sm border relative overflow-hidden"
        >
          <div className="absolute top-4 left-4 text-2xl opacity-20 bounce-1">
            📖
          </div>
          <div className="absolute bottom-4 right-4 text-xl opacity-20 drift-1">
            🌟
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center relative z-10">
            📚 Дополнительные материалы
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-3">
                📖 Рекомендуемая литература
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• "Тревожный ребёнок" Ю. Гиппенрейтер</li>
                <li>• "Общаться с ребёнком. Как?" Ю. Гиппенрейтер</li>
                <li>• "Не упускайте своих детей" Г. Ньюфелд</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-3">
                🧠 Советы от психолога
              </h3>
              <p className="text-gray-600 mb-3">
                Профессиональные рекомендации по работе с тревожными детьми
              </p>
              <a
                href="https://www.defectologiya.pro/zhurnal/trevozhnyij_rebenok_chto_delat_rekomendaczii_psixologa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 font-medium underline transition-colors"
              >
                Читать статью →
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-3">
                🎯 Техники снижения тревожности
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Дыхательные упражнения</li>
                <li>• Техника "5-4-3-2-1"</li>
                <li>• Прогрессивная мышечная релаксация</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-3 text-center">
                📞 Помощь специалистов
              </h3>
              <div className="text-center">
                <a
                  href="tel:88002000122"
                  className="text-3xl font-bold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  8 800 2000 122
                </a>
                <p className="text-gray-600 mt-2">
                  Единый общероссийский номер детского телефона доверия
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  Для детей, подростков и родителей • Круглосуточно • Анонимно •
                  Бесплатно
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Main Page */}
        <section className="text-center">
          <a
            href="/"
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-md"
          >
            ← Вернуться к основной статье
          </a>
        </section>
      </div>
    </div>
  );
};

export default Recommendations;
