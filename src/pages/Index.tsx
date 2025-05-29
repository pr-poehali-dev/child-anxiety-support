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
      </div>
    </div>
  );
};

export default Index;
