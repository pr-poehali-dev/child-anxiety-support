import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AnxietyContent = () => {
  const symptoms = [
    "Плач без причины",
    "Страх остаться без родителей",
    "Трудности с засыпанием",
    "Частые жалобы на боли (живот, голова)",
    "Избегание новых ситуаций",
  ];

  const causes = [
    {
      icon: "🧬",
      text: "Генетическая предрасположенность (если родители тревожны)",
    },
    {
      icon: "⚡",
      text: "Стрессовые ситуации (развод, переезд, конфликты в семье)",
    },
    {
      icon: "🎯",
      text: 'Чрезмерные требования к ребёнку ("Ты должен быть лучшим!")',
    },
    { icon: "💔", text: "Недостаток эмоциональной поддержки" },
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        🔍 Тревожность у детей: откуда она берётся?
      </h2>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Symptoms Card */}
        <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="bg-blue-50 rounded-t-lg">
            <CardTitle className="text-xl text-gray-800">
              😰 Как проявляется тревожность
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-gray-600 mb-4">
              Тревожность — это состояние беспокойства, страха или чрезмерного
              волнения. У детей она может проявляться в:
            </p>
            <ul className="space-y-3">
              {symptoms.map((symptom, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-gray-700">{symptom}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Causes Card */}
        <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="bg-green-50 rounded-t-lg">
            <CardTitle className="text-xl text-gray-800">
              🔹 Основные причины тревожности
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {causes.map((cause, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="text-2xl">{cause.icon}</span>
                  <p className="text-gray-700 leading-relaxed">{cause.text}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AnxietyContent;
