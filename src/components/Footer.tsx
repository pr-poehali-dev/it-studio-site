import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Code2" size={24} className="text-white" />
              </div>
              <span className="text-xl font-bold">SITI</span>
            </div>
            <p className="text-white/70">
              IT-услуги для развития вашего бизнеса
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <div className="space-y-2 text-white/70">
              <a href="tel:+73433852222" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Icon name="Phone" size={16} />
                <span>+7 343 385–22–22</span>
              </a>
              <a href="mailto:info@sitisit.ru" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Icon name="Mail" size={16} />
                <span>info@sitisit.ru</span>
              </a>
              <p className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span>г. Екатеринбург</span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Режим работы</h3>
            <div className="space-y-2 text-white/70">
              <p>Пн-Пт: 9:00 - 18:00</p>
              <p>Сб-Вс: Выходной</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/50">
          <p>&copy; 2024 SITI. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
