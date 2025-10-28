import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const news = [
  {
    date: '15 октября 2024',
    title: 'Запустили новый проект для крупного ритейлера',
    excerpt: 'Разработали комплексное решение для автоматизации продаж'
  },
  {
    date: '08 октября 2024',
    title: 'Наша команда получила сертификат Яндекс.Практикум',
    excerpt: 'Повысили квалификацию в области современной веб-разработки'
  },
  {
    date: '01 октября 2024',
    title: 'Открыли новое направление - мобильные приложения',
    excerpt: 'Расширяем спектр услуг для наших клиентов'
  }
];

export default function News() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Последние новости</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Следите за нашими достижениями
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {news.map((item, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-white animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Icon name="Calendar" size={16} />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-lg font-semibold leading-tight">{item.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{item.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
