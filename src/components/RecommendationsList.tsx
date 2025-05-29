import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RecommendationsList = () => {
  const recommendations = [
    {
      text: "Снижайте давление – не требуйте идеального поведения",
      icon: "🎯",
    },
    {
      text: 'Говорите о чувствах – "Я вижу, ты волнуешься, это нормально"',
      icon: "💬",
    },
    {
      text: "Создавайте ритуалы – предсказуемость снижает тревогу",
      icon: "🔄",
    },
    {
      text: 'Поощряйте самостоятельность – давайте маленькие задания ("Помоги мне накрыть стол")',
      icon: "🌱",
    },
    {
      text: 'Избегайте запугивания – вместо "Будешь плохо себя вести – отдам чужой тёте" лучше "Давай найдём решение вместе"',
      icon: "🚫",
    },
    {
      text: "Обратитесь к специалисту, если тревожность мешает жизни ребёнка",
      icon: "👨‍⚕️",
    },
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        ✅ Рекомендации родителям
      </h2>

      <Card className="bg-gradient-to-br from-green-50 to-blue-50 shadow-sm">
        <CardContent className="p-8">
          <div className="grid md:grid-cols-2 gap-6">
            {recommendations.map((rec, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-2xl">{rec.icon}</div>
                <p className="text-gray-700 leading-relaxed">{rec.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              💙 Помните:
            </h3>
            <p className="text-lg text-gray-700">
              Тревожность можно снизить, если ребёнок чувствует вашу поддержку и
              любовь.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default RecommendationsList;
