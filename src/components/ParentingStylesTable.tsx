import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ParentingStylesTable = () => {
  const styles = [
    {
      style: "Авторитарный",
      characteristic: "Жёсткие правила, наказания, мало тепла",
      impact: "Повышенная тревожность, страх ошибок",
      consequence: "Страх перед ошибками, подавленные эмоции",
      color: "destructive",
    },
    {
      style: "Гиперопекающий",
      characteristic: "Чрезмерная забота, контроль, запрет самостоятельности",
      impact: "Неуверенность, зависимость от родителей",
      consequence: "Беспомощность, трудности в общении со сверстниками",
      color: "secondary",
    },
    {
      style: "Либеральный",
      characteristic: "Полная свобода, нет границ и правил",
      impact: "Тревожность из-за отсутствия стабильности",
      consequence: "Импульсивность, тревога из-за неопределённости",
      color: "outline",
    },
    {
      style: "Демократический",
      characteristic: "Баланс заботы и свободы, поддержка, разумные правила",
      impact: "Низкая тревожность, уверенность в себе",
      consequence: "Здоровое развитие, адаптивность",
      color: "default",
    },
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        👪 Стили воспитания и их влияние на тревожность
      </h2>

      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-center text-gray-800">
            Как стиль воспитания влияет на ребёнка
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="overflow-x-auto">
            <div className="grid gap-6">
              {styles.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <Badge
                      variant={item.color as any}
                      className="text-sm font-medium"
                    >
                      {item.style}
                    </Badge>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">
                        Характеристика:
                      </h4>
                      <p className="text-gray-600">{item.characteristic}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">
                        Влияние на ребёнка:
                      </h4>
                      <p className="text-gray-600">{item.impact}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">
                        Последствия:
                      </h4>
                      <p className="text-gray-600">{item.consequence}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ParentingStylesTable;
