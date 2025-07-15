import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const services = [
    {
      title: 'Алюминиевые окна',
      description: 'Энергоэффективные окна с отличной теплоизоляцией',
      icon: 'Square',
      features: ['Энергосбережение', 'Долговечность', 'Гарантия 10 лет']
    },
    {
      title: 'Входные двери',
      description: 'Надежные и стильные входные группы',
      icon: 'DoorOpen',
      features: ['Безопасность', 'Тепло- и звукоизоляция', 'Индивидуальный дизайн']
    },
    {
      title: 'Фасады зданий',
      description: 'Вентилируемые и навесные фасадные системы',
      icon: 'Building2',
      features: ['Архитектурная выразительность', 'Климатическая защита', 'Долгий срок службы']
    },
    {
      title: 'Зимние сады',
      description: 'Остекленные конструкции для круглогодичного комфорта',
      icon: 'Trees',
      features: ['Панорамное остекление', 'Климат-контроль', 'Индивидуальное проектирование']
    }
  ];

  const advantages = [
    { icon: 'Award', title: 'Гарантия качества', description: 'До 10 лет гарантии на все изделия' },
    { icon: 'Truck', title: 'Монтаж под ключ', description: 'Полный цикл от проекта до установки' },
    { icon: 'Users', title: 'Опытная команда', description: 'Более 15 лет на рынке металлоконструкций' },
    { icon: 'ShieldCheck', title: 'Сертификация', description: 'Все работы выполняются по ГОСТ и СНиП' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Building2" size={32} className="text-slate-700" />
              <h1 className="text-2xl font-bold text-slate-800">МеталлСтрой</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-slate-600 hover:text-blue-600 transition-colors">Услуги</a>
              <a href="#advantages" className="text-slate-600 hover:text-blue-600 transition-colors">Преимущества</a>
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">О нас</a>
              <a href="#contacts" className="text-slate-600 hover:text-blue-600 transition-colors">Контакты</a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
            Металлоконструкции
            <span className="block text-blue-600">под ключ</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Проектирование, производство и монтаж алюминиевых окон, дверей, фасадов и зимних садов. 
            Работаем с частными домами и коммерческими объектами.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4">
              <Icon name="Eye" size={20} className="mr-2" />
              Посмотреть работы
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Наши услуги</h2>
            <p className="text-xl text-slate-600">Полный спектр работ с металлоконструкциями</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-md">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <Icon name={service.icon} size={32} className="text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-slate-800">{service.title}</CardTitle>
                  <CardDescription className="text-slate-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-sm text-slate-600">
                        <Icon name="Check" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4 bg-slate-700 hover:bg-slate-800">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-slate-600">Качество, надежность и профессионализм</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <Icon name={advantage.icon} size={40} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{advantage.title}</h3>
                <p className="text-slate-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">О компании</h2>
              <p className="text-lg text-slate-600 mb-6">
                Мы специализируемся на полном цикле работ с металлоконструкциями: от проектирования до монтажа. 
                Работаем как с частными домами и коттеджами, так и с крупными коммерческими объектами.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-slate-600">Выполненных проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-slate-600">Лет опыта</div>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-600">
                  <Icon name="Check" size={20} className="text-green-500 mr-3" />
                  Энергоэффективные решения
                </li>
                <li className="flex items-center text-slate-600">
                  <Icon name="Check" size={20} className="text-green-500 mr-3" />
                  Гарантия и сервисное обслуживание
                </li>
                <li className="flex items-center text-slate-600">
                  <Icon name="Check" size={20} className="text-green-500 mr-3" />
                  Индивидуальный подход к каждому проекту
                </li>
              </ul>
            </div>
            <div className="bg-slate-100 rounded-lg overflow-hidden">
              <img 
                src="/img/57b5e058-1ed3-4eec-ad2a-fc71e4176bd6.jpg" 
                alt="Установка алюминиевых окон" 
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы начать проект?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Свяжитесь с нами для бесплатной консультации и расчета стоимости
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <div className="flex items-center">
              <Icon name="Phone" size={24} className="text-blue-400 mr-3" />
              <span className="text-lg">+7 (XXX) XXX-XX-XX</span>
            </div>
            <div className="flex items-center">
              <Icon name="Mail" size={24} className="text-blue-400 mr-3" />
              <span className="text-lg">info@metallstroy.ru</span>
            </div>
            <div className="flex items-center">
              <Icon name="MapPin" size={24} className="text-blue-400 mr-3" />
              <span className="text-lg">г. Москва</span>
            </div>
          </div>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Получить консультацию
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;