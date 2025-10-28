import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: 'Globe',
    title: 'Разработка сайтов',
    description: 'Создание современных и функциональных веб-сайтов под ключ'
  },
  {
    icon: 'HeadphonesIcon',
    title: 'IT аутсорсинг',
    description: 'Полное техническое сопровождение вашего бизнеса'
  },
  {
    icon: 'TrendingUp',
    title: 'Продвижение',
    description: 'SEO оптимизация и digital-маркетинг для роста продаж'
  },
  {
    icon: 'Palette',
    title: 'Веб дизайн',
    description: 'Создание уникального и запоминающегося дизайна'
  },
  {
    icon: 'Printer',
    title: 'Дизайн полиграфии',
    description: 'Разработка визиток, буклетов и рекламных материалов'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наши услуги</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Комплексные IT-решения для развития вашего бизнеса
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in bg-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={service.icon} size={28} className="text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
