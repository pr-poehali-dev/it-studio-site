import { useState } from 'react';
import Icon from '@/components/ui/icon';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/projects/20c9b088-f1f1-4407-8f26-759966ab4811/files/db3d4aa8-4ff0-4acd-8e4b-5ab8464a991f.jpg" 
              alt="SITI Logo" 
              className="h-12 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">
              Услуги
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-foreground hover:text-primary transition-colors">
              Портфолио
            </button>
            <button onClick={() => scrollToSection('prices')} className="text-foreground hover:text-primary transition-colors">
              Цены
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
              О компании
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-6 text-sm">
            <a href="tel:+73433852222" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Icon name="Phone" size={18} />
              <span>+7 343 385–22–22</span>
            </a>
            <a href="mailto:info@sitisit.ru" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Icon name="Mail" size={18} />
              <span>info@sitisit.ru</span>
            </a>
          </div>

          <button 
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <nav className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('services')} className="text-left text-foreground hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-left text-foreground hover:text-primary transition-colors">
                Портфолио
              </button>
              <button onClick={() => scrollToSection('prices')} className="text-left text-foreground hover:text-primary transition-colors">
                Цены
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-foreground hover:text-primary transition-colors">
                О компании
              </button>
              <a href="tel:+73433852222" className="flex items-center gap-2 text-foreground">
                <Icon name="Phone" size={18} />
                <span>+7 343 385–22–22</span>
              </a>
              <a href="mailto:info@sitisit.ru" className="flex items-center gap-2 text-foreground">
                <Icon name="Mail" size={18} />
                <span>info@sitisit.ru</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}