export default function Partners() {
  const partners = [
    { name: 'Yandex', logo: '🟡' },
    { name: 'Google', logo: '🔴' },
    { name: 'Microsoft', logo: '🔵' },
    { name: 'AWS', logo: '🟠' },
    { name: 'Digital Ocean', logo: '🔷' },
    { name: 'GitHub', logo: '⚫' }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наши партнёры</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Работаем с ведущими технологическими компаниями
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-center gap-3 p-6 rounded-lg hover:bg-secondary transition-colors cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl">{partner.logo}</div>
              <span className="text-sm font-medium text-center">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
