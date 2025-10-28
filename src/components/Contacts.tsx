import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';

export default function Contacts() {
  const contactInfo = [
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 343 385–22–22',
      link: 'tel:+73433852222'
    },
    {
      icon: 'Mail',
      title: 'Email',
      value: 'info@sitisit.ru',
      link: 'mailto:info@sitisit.ru'
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      value: 'г. Екатеринбург, ул. Ленина, д. 1',
      link: null
    }
  ];

  return (
    <section id="contacts" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Контакты</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Свяжитесь с нами удобным способом
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactInfo.map((contact, index) => (
            <Card 
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={contact.icon} size={28} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{contact.title}</h3>
                {contact.link ? (
                  <a 
                    href={contact.link}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{contact.value}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
