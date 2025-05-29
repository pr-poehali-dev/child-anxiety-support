import AnxietyContent from "@/components/AnxietyContent";
import ParentingStylesTable from "@/components/ParentingStylesTable";
import RecommendationsList from "@/components/RecommendationsList";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <section className="py-16 px-4 text-center bg-gradient-to-r from-blue-100 to-indigo-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Не ругайте, а поймите: как воспитание может усугубить тревожность у
            детей 💙
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Практические советы для родителей о том, как поддержать тревожного
            ребёнка и создать безопасную атмосферу дома
          </p>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-md">
            <span className="text-sm font-medium text-gray-700">
              ⚠️ Важно: Тревожность — не каприз, а сигнал, что ребёнку нужна
              помощь
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        <AnxietyContent />
        <ParentingStylesTable />
        <RecommendationsList />

        {/* Additional Resources */}
        <section className="bg-white rounded-2xl p-8 shadow-sm border">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            📚 Дополнительные материалы
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-3">
                Рекомендуемая литература
              </h3>
              <p className="text-gray-600">
                "Тревожный ребёнок" Ю. Гиппенрейтер
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-3">
                Помощь специалистов
              </h3>
              <p className="text-gray-600">
                Телефоны доверия для родителей доступны в вашем регионе
              </p>
            </div>
          </div>
        </section>

        {/* Survey Call-to-Action Section */}
        <section className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4">
                🎯 Узнай свой стиль воспитания
              </h2>
              <p className="text-lg text-indigo-100 mb-6">
                Пройдите короткий опрос и получите персональные рекомендации для
                работы с тревожностью вашего ребёнка
              </p>
              <a
                href="#"
                className="inline-block bg-white text-indigo-600 font-semibold px-8 py-3 rounded-full hover:bg-indigo-50 transition-colors duration-200 shadow-md"
              >
                Пройти опрос →
              </a>
            </div>
            <div className="flex-shrink-0">
              <div className="bg-white p-4 rounded-2xl shadow-lg">
                <img
                  src="https://cdn.poehali.dev/files/465e0f64-788e-4c03-ab03-459e50cb18d5.jpg"
                  alt="QR код для прохождения опроса"
                  className="w-32 h-32 md:w-40 md:h-40"
                />
                <p className="text-center text-gray-600 text-sm mt-2 font-medium">
                  Отсканируйте QR-код
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-center">
                  📞 Телефон доверия
                </h3>
                <div className="text-center">
                  <a
                    href="tel:88002000122"
                    className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    8 800 2000 122
                  </a>
                  <p className="text-gray-600 text-sm mt-2">
                    Для детей, подростков и родителей
                  </p>
                  <p className="text-gray-500 text-xs mt-1">Нижний Новгород</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
