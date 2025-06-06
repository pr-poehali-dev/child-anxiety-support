import AnxietyContent from "@/components/AnxietyContent";
import ParentingStylesTable from "@/components/ParentingStylesTable";
import RecommendationsList from "@/components/RecommendationsList";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 relative overflow-hidden">
      {/* Анимированные фоновые элементы */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Плавающие детские рисунки */}
        <div className="floating-element top-20 left-10 float-1">
          <div className="text-6xl">🎨</div>
        </div>
        <div className="floating-element top-32 right-20 float-2">
          <div className="text-5xl">🖍️</div>
        </div>
        <div className="floating-element top-80 left-1/4 drift-1">
          <div className="text-4xl">✏️</div>
        </div>
        <div className="floating-element top-96 right-1/3 bounce-1">
          <div className="text-7xl">🌈</div>
        </div>
        <div className="floating-element top-1/2 left-20 swing-1">
          <div className="text-5xl">🦋</div>
        </div>
        <div
          className="floating-element bottom-40 right-10 float-1"
          style={{ animationDelay: "2s" }}
        >
          <div className="text-6xl">🌸</div>
        </div>
        <div
          className="floating-element bottom-20 left-1/3 float-2"
          style={{ animationDelay: "4s" }}
        >
          <div className="text-4xl">🎈</div>
        </div>

        {/* Фоновые иллюстрации детских рисунков */}
        <div className="background-illustration top-40 right-40">
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            className="text-blue-200 fill-current"
          >
            <circle cx="100" cy="70" r="40" />
            <circle cx="85" cy="60" r="5" />
            <circle cx="115" cy="60" r="5" />
            <path
              d="M 85 85 Q 100 95 115 85"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
            />
            <rect x="80" y="110" width="40" height="60" />
            <rect x="60" y="130" width="20" height="40" />
            <rect x="120" y="130" width="20" height="40" />
          </svg>
        </div>

        <div className="background-illustration bottom-60 left-40 swing-1">
          <svg
            width="150"
            height="150"
            viewBox="0 0 150 150"
            className="text-green-200 fill-current"
          >
            <circle cx="75" cy="120" r="25" fill="brown" />
            <polygon points="75,20 45,100 105,100" fill="green" />
            <circle cx="40" cy="40" r="15" fill="yellow" />
            <polygon points="35,35 45,35 40,25" fill="yellow" />
            <polygon points="35,45 45,45 40,55" fill="yellow" />
            <polygon points="25,40 35,40 30,30" fill="yellow" />
            <polygon points="45,40 55,40 50,30" fill="yellow" />
          </svg>
        </div>

        <div className="background-illustration top-60 left-60 drift-1">
          <svg
            width="180"
            height="120"
            viewBox="0 0 180 120"
            className="text-purple-200 fill-current"
          >
            <rect x="20" y="60" width="140" height="40" />
            <polygon points="20,60 90,20 160,60" />
            <rect x="40" y="80" width="15" height="20" />
            <rect x="65" y="75" width="20" height="15" />
            <rect x="95" y="75" width="20" height="15" />
            <rect x="125" y="80" width="15" height="20" />
          </svg>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 text-center bg-gradient-to-r from-blue-100 to-indigo-100 relative z-10">
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
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-16 relative z-10">
        <AnxietyContent />
        <ParentingStylesTable />
        <RecommendationsList />

        {/* Additional Resources */}
        <section className="bg-white rounded-2xl p-8 shadow-sm border relative overflow-hidden">
          {/* Декоративные элементы в видео секции */}
          <div className="absolute top-4 left-4 text-2xl opacity-20 bounce-1">
            🎬
          </div>
          <div className="absolute bottom-4 right-4 text-xl opacity-20 drift-1">
            🌟
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center relative z-10">
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
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="bg-white rounded-2xl p-8 shadow-sm border relative overflow-hidden">
          {/* Декоративные элементы в галерее */}
          <div className="absolute top-4 left-4 text-2xl opacity-20 swing-1">
            🎭
          </div>
          <div className="absolute top-4 right-4 text-2xl opacity-20 float-2">
            🖼️
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center relative z-10">
            🎨 Наши работы
          </h2>
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <img
                    src="https://cdn.poehali.dev/files/d5c33aa9-f591-4899-af5d-d19afdf2f8b8.jpg"
                    alt="Детская работа 1"
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <img
                    src="https://cdn.poehali.dev/files/f580bf70-408d-43bc-aa8a-7bc3220c5588.jpg"
                    alt="Детская работа 2"
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <img
                    src="https://cdn.poehali.dev/files/4cf9ac09-4867-4b3a-b776-66e782428461.jpg"
                    alt="Детская работа 3"
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <img
                    src="https://cdn.poehali.dev/files/b7d0b3bf-79bd-415d-b505-36eb273f1979.jpg"
                    alt="Детская работа 4"
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <img
                    src="https://cdn.poehali.dev/files/c5893768-f894-46ec-8f0d-4f951d7f6ef8.jpg"
                    alt="Детская работа 5"
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        {/* YouTube Playlist Section */}
        <section className="bg-white rounded-2xl p-8 shadow-sm border relative overflow-hidden">
          {/* Декоративные элементы в галерее */}
          <div className="absolute top-4 left-4 text-2xl opacity-20 swing-1">
            🎭
          </div>
          <div className="absolute top-4 right-4 text-2xl opacity-20 float-2">
            🖼️
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center relative z-10">
            📺 Успокаивающие мультфильмы для детей
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full h-0 pb-[56.25%]">
              <iframe
                src="https://www.youtube.com/embed/videoseries?list=PLi-O4SCKt2IQAzzwQp595ybueeoeisyq-"
                title="Успокаивающие мультфильмы для снижения тревожности"
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-gray-600 text-center mt-4">
              Специально подобранные мультфильмы для снижения тревожности у
              детей
            </p>
          </div>
        </section>

        {/* Survey Call-to-Action Section */}
        <section className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-1.5">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold my-[3px]">
                🎯 Узнай свой стиль воспитания
              </h2>
              <p className="text-lg text-indigo-100 mb-6">
                Пройдите короткий опрос и получите персональные рекомендации для
                работы с тревожностью вашего ребёнка
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc34ascndzP4njjY4qpH0dsDM2S_HJekOg13_qu6ZhE0ls57w/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-indigo-600 font-semibold px-8 py-3 rounded-full hover:bg-indigo-50 transition-colors duration-200 shadow-md"
              >
                Пройти опрос →
              </a>
            </div>
            <div className="flex-shrink-0">
              <div className="bg-white p-4 rounded-2xl shadow-lg my-0 px-[50px] mx-0 py-1.5">
                <img
                  src="https://cdn.poehali.dev/files/465e0f64-788e-4c03-ab03-459e50cb18d5.jpg"
                  alt="QR код для прохождения опроса"
                  className="w-32 h-32 md:w-40 md:h-40 px-0 my-[7px] mx-3"
                />
                <p className="text-center text-gray-600 text-sm mt-2 font-medium">
                  Отсканируйте QR-код
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md py-6 my-[13px]">
                <h3 className="text-xl font-semibold text-center px-0 py-0 my-0 text-zinc-700">
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
