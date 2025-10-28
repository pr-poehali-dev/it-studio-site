export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/20c9b088-f1f1-4407-8f26-759966ab4811/files/7efc3392-9172-410e-97dd-c91db3cbd84d.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          IT - УСЛУГИ ДЛЯ РАЗВИТИЯ<br />ВАШЕГО БИЗНЕСА
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Профессиональная разработка и поддержка
        </p>
        <button 
          onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          Связаться с нами
        </button>
      </div>
    </section>
  );
}
