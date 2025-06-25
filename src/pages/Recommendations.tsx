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

        {/* Useful Information */}
        <section className="bg-white rounded-2xl p-8 shadow-sm border relative overflow-hidden">
          <div className="absolute top-4 left-4 text-2xl opacity-20 bounce-1">
            💾
          </div>
          <div className="absolute bottom-4 right-4 text-xl opacity-20 drift-1">
            📁
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center relative z-10">
            💾 Полезная информация
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-100 to-green-100 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">📁</div>
              <h3 className="font-semibold text-gray-800 mb-3">
                Материалы для скачивания
              </h3>
              <p className="text-gray-600 mb-4">
                Дополнительные ресурсы, методички и практические материалы для
                работы с детской тревожностью
              </p>
              <a
                href="https://disk.yandex.ru/d/-ooT05o_TOpaMw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-md"
              >
                Открыть Яндекс.Диск →
              </a>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="font-bold text-gray-800 mb-3">Играем вместе</h3>
              <p className="text-gray-600 mb-4">
                Развиваем знания и весело проводим время вместе!
              </p>
              <a
                href="https://disk.yandex.ru/d/pXHxo_Mjgk-lFQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-600 text-white font-semibold px-6 rounded-full hover:bg-purple-700 transition-colors duration-200 shadow-md my-[22px] py-[13px]"
              >
                Открыть Яндекс.Диск →
              </a>
            </div>
          </div>
        </section>

        {/* Video Materials for Parents */}
        <section className="bg-white rounded-2xl p-8 shadow-sm border relative overflow-hidden mb-8">
          <div className="absolute top-4 left-4 text-2xl opacity-20 bounce-1">
            🎥
          </div>
          <div className="absolute bottom-4 right-4 text-xl opacity-20 drift-1">
            ▶️
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center relative z-10">
            🎥 Видеоматериалы для родителей
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <a
              href="https://rutube.ru/video/f3184534dadc24ae0cbbfefc385c517b/?r=a"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-4 hover:shadow-md transition-all duration-200 hover:scale-[1.02]"
            >
              <div className="bg-red-500 rounded-lg mb-3 h-32 flex items-center justify-center">
                <div className="text-white text-3xl group-hover:scale-110 transition-transform">
                  ▶️
                </div>
              </div>
              <h3 className="font-semibold text-gray-800 text-sm mb-1">
                Психология развития
              </h3>
              <p className="text-gray-600 text-xs">Основы детской психологии</p>
            </a>

            <a
              href="https://rutube.ru/video/f89208f20fa74b68b35113125eca1adb/?r=a"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 hover:shadow-md transition-all duration-200 hover:scale-[1.02]"
            >
              <div className="bg-blue-500 rounded-lg mb-3 h-32 flex items-center justify-center">
                <div className="text-white text-3xl group-hover:scale-110 transition-transform">
                  ▶️
                </div>
              </div>
              <h3 className="font-semibold text-gray-800 text-sm mb-1">
                Общение с детьми
              </h3>
              <p className="text-gray-600 text-xs">
                Эффективные методы коммуникации
              </p>
            </a>

            <a
              href="https://rutube.ru/video/20fc6d389c97a2b9cdf5f8762f96b54a/?r=a"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 hover:shadow-md transition-all duration-200 hover:scale-[1.02]"
            >
              <div className="bg-green-500 rounded-lg mb-3 h-32 flex items-center justify-center">
                <div className="text-white text-3xl group-hover:scale-110 transition-transform">
                  ▶️
                </div>
              </div>
              <h3 className="font-semibold text-gray-800 text-sm mb-1">
                Воспитание без стресса
              </h3>
              <p className="text-gray-600 text-xs">
                Методы позитивного воспитания
              </p>
            </a>

            <a
              href="https://rutube.ru/video/9d60a0dd50c58f334043d7c29cdf044e/?r=a"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 hover:shadow-md transition-all duration-200 hover:scale-[1.02]"
            >
              <div className="bg-purple-500 rounded-lg mb-3 h-32 flex items-center justify-center">
                <div className="text-white text-3xl group-hover:scale-110 transition-transform">
                  ▶️
                </div>
              </div>
              <h3 className="font-semibold text-gray-800 text-sm mb-1">
                Эмоциональное развитие
              </h3>
              <p className="text-gray-600 text-xs">
                Работа с детскими эмоциями
              </p>
            </a>

            <a
              href="https://rutube.ru/video/7791703c0356be7df3c32d3a3212bb6f/?r=a"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 hover:shadow-md transition-all duration-200 hover:scale-[1.02]"
            >
              <div className="bg-orange-500 rounded-lg mb-3 h-32 flex items-center justify-center">
                <div className="text-white text-3xl group-hover:scale-110 transition-transform">
                  ▶️
                </div>
              </div>
              <h3 className="font-semibold text-gray-800 text-sm mb-1">
                Границы и правила
              </h3>
              <p className="text-gray-600 text-xs">
                Установление здоровых границ
              </p>
            </a>

            <a
              href="https://rutube.ru/video/ae3660fbf449d48c38cda214751c8c39/?r=a"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-4 hover:shadow-md transition-all duration-200 hover:scale-[1.02]"
            >
              <div className="bg-pink-500 rounded-lg mb-3 h-32 flex items-center justify-center">
                <div className="text-white text-3xl group-hover:scale-110 transition-transform">
                  ▶️
                </div>
              </div>
              <h3 className="font-semibold text-gray-800 text-sm mb-1">
                Семейные отношения
              </h3>
              <p className="text-gray-600 text-xs">
                Укрепление семейных связей
              </p>
            </a>

            <a
              href="https://rutube.ru/video/c3387b21b66a07b4be483abb2b6001e9/?r=a"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-4 hover:shadow-md transition-all duration-200 hover:scale-[1.02]"
            >
              <div className="bg-teal-500 rounded-lg mb-3 h-32 flex items-center justify-center">
                <div className="text-white text-3xl group-hover:scale-110 transition-transform">
                  ▶️
                </div>
              </div>
              <h3 className="font-semibold text-gray-800 text-sm mb-1">
                Адаптация к школе
              </h3>
              <p className="text-gray-600 text-xs">
                Подготовка к школьной жизни
              </p>
            </a>

            <a
              href="https://rutube.ru/video/6885a8c11b9f05e6a225bccaa5b3c02c/?r=a"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-4 hover:shadow-md transition-all duration-200 hover:scale-[1.02]"
            >
              <div className="bg-indigo-500 rounded-lg mb-3 h-32 flex items-center justify-center">
                <div className="text-white text-3xl group-hover:scale-110 transition-transform">
                  ▶️
                </div>
              </div>
              <h3 className="font-semibold text-gray-800 text-sm mb-1">
                Развитие творчества
              </h3>
              <p className="text-gray-600 text-xs">
                Творческое развитие ребёнка
              </p>
            </a>

            <a
              href="https://rutube.ru/video/be8082bb9a13758f6c7a79794b5babcc/?r=a"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-4 hover:shadow-md transition-all duration-200 hover:scale-[1.02]"
            >
              <div className="bg-yellow-500 rounded-lg mb-3 h-32 flex items-center justify-center">
                <div className="text-white text-3xl group-hover:scale-110 transition-transform">
                  ▶️
                </div>
              </div>
              <h3 className="font-semibold text-gray-800 text-sm mb-1">
                Мотивация к учёбе
              </h3>
              <p className="text-gray-600 text-xs">
                Как заинтересовать ребёнка
              </p>
            </a>

            <a
              href="https://rutube.ru/video/108224362bcbca542023509321551435/?r=a"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-rose-50 to-rose-100 rounded-lg p-4 hover:shadow-md transition-all duration-200 hover:scale-[1.02]"
            >
              <div className="bg-rose-500 rounded-lg mb-3 h-32 flex items-center justify-center">
                <div className="text-white text-3xl group-hover:scale-110 transition-transform">
                  ▶️
                </div>
              </div>
              <h3 className="font-semibold text-gray-800 text-sm mb-1">
                Конфликты в семье
              </h3>
              <p className="text-gray-600 text-xs">
                Решение семейных конфликтов
              </p>
            </a>
          </div>
        </section>

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
