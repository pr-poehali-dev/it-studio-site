import { Card, CardContent } from '@/components/ui/card';

const projects = [
  {
    company: 'TechCorp',
    service: 'Разработка сайта',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=350&fit=crop'
  },
  {
    company: 'Digital Agency',
    service: 'Веб дизайн',
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=500&h=350&fit=crop'
  },
  {
    company: 'StartUp Inc',
    service: 'IT аутсорсинг',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=350&fit=crop'
  },
  {
    company: 'E-commerce Plus',
    service: 'Разработка сайта',
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=500&h=350&fit=crop'
  },
  {
    company: 'Creative Studio',
    service: 'Дизайн полиграфии',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&h=350&fit=crop'
  },
  {
    company: 'Marketing Pro',
    service: 'Продвижение',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=350&fit=crop'
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наши работы</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Проекты, которыми мы гордимся
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.company}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.company}</h3>
                <p className="text-muted-foreground text-sm">{project.service}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
