import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Check, 
  MessageCircle, 
  Menu, 
  X,
  Play,
  Instagram,
  Globe,
  ExternalLink
} from 'lucide-react';
import { SERVICE_DATA } from './constants';
import { ServiceItem, PricingOption } from './types';

// --- Helper Components ---

const Logo = () => (
  <div className="flex items-center gap-2 font-display font-bold text-xl tracking-tight">
    <div className="relative w-8 h-8 flex items-center justify-center">
      <div className="absolute inset-0 border-4 border-google-blue rounded-full border-t-google-red border-r-google-yellow border-b-google-green animate-spin-slow" style={{ animationDuration: '3s' }}></div>
      <Play className="w-3 h-3 text-google-blue fill-current ml-0.5" />
    </div>
    <span className="text-gray-800">
      Feed<span className="text-google-blue">em</span>Foco<span className="text-google-red">360</span>
    </span>
  </div>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const SectionHeader = ({ title, description }: { title: string; description: string }) => (
  <div className="mb-8 pl-4 border-l-4 border-google-blue">
    <h2 className="text-2xl font-display font-bold text-gray-800 uppercase tracking-wide">{title}</h2>
    <p className="text-gray-600 mt-1 text-sm">{description}</p>
  </div>
);

const PricingCard: React.FC<{ item: PricingOption }> = ({ item }) => (
  <div className={`relative p-4 rounded-xl border transition-all duration-300 hover:-translate-y-1 ${item.highlight ? 'border-google-blue bg-blue-50/50 shadow-md hover:shadow-lg' : 'border-gray-200 bg-white hover:shadow-md'}`}>
    {item.highlight && (
      <span className="absolute -top-3 right-4 bg-google-blue text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
        Recomendado
      </span>
    )}
    <div className="flex justify-between items-start mb-1">
      <h4 className="font-bold text-gray-800 text-sm">{item.title}</h4>
    </div>
    <div className="text-google-green font-bold text-lg mb-1">{item.price}</div>
    {item.description && (
      <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
    )}
  </div>
);

const ServiceCard: React.FC<{ item: ServiceItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const getColorClass = (color: string) => {
    switch (color) {
      case 'blue': return 'bg-blue-100 text-blue-600';
      case 'red': return 'bg-red-100 text-red-600';
      case 'yellow': return 'bg-yellow-100 text-yellow-600';
      case 'green': return 'bg-green-100 text-green-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div 
        className="p-5 flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getColorClass(item.color)}`}>
            {item.icon}
          </div>
          <div>
            <h3 className="font-display font-bold text-gray-800 text-lg leading-tight">{item.title}</h3>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-1">{item.subtitle}</p>
          </div>
        </div>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </div>
      </div>

      {isOpen && (
        <div className="px-5 pb-6 animate-fadeIn">
          <p className="text-gray-600 text-sm mb-6 leading-relaxed border-l-2 border-gray-200 pl-3">
            {item.description}
          </p>
          
          {item.image && (
             <div className="mb-6 rounded-lg overflow-hidden h-40 relative">
               <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-3">
                  <span className="text-white text-xs font-bold flex items-center gap-1">
                    <Check className="w-3 h-3" /> Resultado Profissional
                  </span>
               </div>
             </div>
          )}

          <div className="space-y-3">
            {item.pricing.map((price, idx) => (
              <PricingCard key={idx} item={price} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const SocialLinks = () => {
  return (
    <div className="space-y-4 mb-8">
      <h3 className="font-display font-bold text-center text-xl mb-6 text-gray-800 border-t border-gray-100 pt-8">
        Canais de Atendimento
      </h3>
      
      <a 
        href="https://wa.me/5521966916592?text=Ol%C3%A1,%20tudo%20bem?%20Gostaria%20de%20saber%20a%20mais%20a%20respeito%20do%20processo%20de%20marketing%20realizado%20por%20voc%C3%AAs." 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-between px-6 py-4 bg-[#25D366] text-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
      >
        <div className="flex items-center gap-4">
          <WhatsAppIcon className="w-8 h-8" />
          <div className="flex flex-col text-left">
            <span className="font-bold text-lg leading-tight">WhatsApp</span>
            <span className="text-xs text-white/90">Fale com um especialista</span>
          </div>
        </div>
        <ChevronDown className="w-5 h-5 -rotate-90" />
      </a>

      <a 
        href="https://instagram.com/feedemfoco360" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
      >
        <div className="flex items-center gap-4">
          <Instagram className="w-8 h-8" />
          <div className="flex flex-col text-left">
            <span className="font-bold text-lg leading-tight">Instagram</span>
            <span className="text-xs text-white/90">@feedemfoco360</span>
          </div>
        </div>
        <ExternalLink className="w-5 h-5" />
      </a>

      <a 
        href="https://feedemfoco360.lovable.app/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
      >
        <div className="flex items-center gap-4">
          <Globe className="w-8 h-8" />
          <div className="flex flex-col text-left">
            <span className="font-bold text-lg leading-tight">Website</span>
            <span className="text-xs text-white/90">feedemfoco360.lovable.app</span>
          </div>
        </div>
        <ExternalLink className="w-5 h-5" />
      </a>
    </div>
  )
}

// --- Main Page Sections ---

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[650px] flex flex-col justify-between overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-google-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-google-yellow/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

      {/* Top Part: Mockup */}
      <div className="relative pt-8 px-6 flex-1 flex flex-col items-center justify-center">
        <div className="absolute top-6 left-6 z-20">
            <Logo />
        </div>
        
        {/* Phone Mockup Representation */}
        <div className="relative w-64 h-[400px] bg-gray-900 rounded-[2.5rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden z-10 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-700">
           {/* Screen Content */}
           <div className="w-full h-full bg-white relative overflow-hidden">
              {/* Fake GMB Profile Header */}
              <div className="h-32 w-full bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/400/300?grayscale)' }}></div>
              <div className="px-4 -mt-10">
                 <div className="w-20 h-20 bg-white rounded-full border-4 border-white shadow-sm flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-google-blue flex items-center justify-center text-white font-bold text-2xl">F</div>
                 </div>
                 <h2 className="mt-2 font-bold text-lg text-gray-800">Sua Empresa</h2>
                 <div className="flex items-center gap-1 mb-2">
                    {[1,2,3,4,5].map(i => <div key={i} className="w-3 h-3 bg-google-yellow rounded-full" />)}
                    <span className="text-xs text-gray-500 ml-1">(5.0)</span>
                 </div>
                 <div className="flex gap-2">
                    <div className="flex-1 h-8 bg-google-blue rounded-full flex items-center justify-center text-white text-xs font-bold">Ligar</div>
                    <div className="flex-1 h-8 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs font-bold">Rotas</div>
                 </div>
                 <div className="mt-4 space-y-2">
                    <div className="h-2 w-3/4 bg-gray-100 rounded"></div>
                    <div className="h-2 w-1/2 bg-gray-100 rounded"></div>
                 </div>
              </div>
           </div>
           {/* Notch */}
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl z-20"></div>
        </div>
      </div>

      {/* Middle Part: Text */}
      <div className="px-8 py-6 z-10 text-center">
        <h1 className="font-display font-extrabold text-4xl leading-tight text-transparent bg-clip-text bg-gradient-to-r from-google-blue via-google-red to-google-yellow mb-2">
          Transforme sua Presença Digital
        </h1>
        <p className="text-gray-500 font-medium text-sm max-w-xs mx-auto">
          Destaque-se no Google, encante nas redes sociais e venda mais com tecnologia de ponta.
        </p>
      </div>

      {/* Bottom Part: Visuals & 360 Badge */}
      <div className="relative h-48 w-full z-10">
         <div className="absolute inset-0 grid grid-cols-3 gap-1 px-1">
            <div className="bg-gray-100 rounded-t-xl overflow-hidden mt-8"><img src="https://picsum.photos/200/400?random=10" className="w-full h-full object-cover opacity-80" alt="Ambiente" /></div>
            <div className="bg-gray-100 rounded-t-xl overflow-hidden mt-0 shadow-lg z-10 transform scale-105 border-t-4 border-google-blue"><img src="https://picsum.photos/200/400?random=11" className="w-full h-full object-cover" alt="Ambiente Top" /></div>
            <div className="bg-gray-100 rounded-t-xl overflow-hidden mt-8"><img src="https://picsum.photos/200/400?random=12" className="w-full h-full object-cover opacity-80" alt="Ambiente" /></div>
         </div>
         
         {/* 360 Badge */}
         <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-premium border border-white/50 flex flex-col items-center justify-center w-20 h-20 animate-bounce-slow">
             <div className="relative w-8 h-8 border-2 border-gray-800 rounded-full flex items-center justify-center">
                <div className="w-6 h-2 bg-gray-800 rounded-full"></div>
             </div>
             <span className="text-[10px] font-black text-gray-800 mt-1">360°</span>
         </div>

         {/* Scroll Indicator */}
         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-white drop-shadow-md" />
         </div>
         
         {/* Gradient Overlay for bottom fade */}
         <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
};

const ContactFab = () => (
  <a 
    href="https://wa.me/5521966916592?text=Ol%C3%A1,%20tudo%20bem?%20Gostaria%20de%20saber%20a%20mais%20a%20respeito%20do%20processo%20de%20marketing%20realizado%20por%20voc%C3%AAs." 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-premium z-50 hover:bg-[#20bd5a] transition-transform hover:scale-110 active:scale-95 flex items-center gap-2"
  >
    <WhatsAppIcon className="w-6 h-6" />
    <span className="font-bold text-sm hidden md:inline">WhatsApp</span>
  </a>
);

// --- Main App Component ---

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-slate-50 selection:bg-google-blue/20">
      
      {/* Sticky Mobile Header (appears after scroll) */}
      <div className={`fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md shadow-sm transition-transform duration-300 px-6 py-3 flex justify-between items-center ${scrolled ? 'translate-y-0' : '-translate-y-full'}`}>
        <Logo />
        <button className="p-2 text-gray-600">
           <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Constrain width for mobile-first/stories feel on desktop */}
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-2xl overflow-hidden border-x border-gray-100">
        
        <Hero />

        <main className="px-6 py-12 bg-white relative z-20 rounded-t-[2.5rem] -mt-6 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
          
          <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-10"></div>

          {/* Intro Text */}
          <div className="mb-12 text-center">
             <h3 className="font-display font-bold text-xl mb-3 text-gray-800">
               Soluções Completas
             </h3>
             <p className="text-gray-500 leading-relaxed text-sm">
               Do cartão de visita NFC à gestão completa de tráfego orgânico. Escolha o plano ideal para o seu negócio decolar.
             </p>
          </div>

          {/* Service Categories */}
          <div className="space-y-12">
            {SERVICE_DATA.map((category) => (
              <section key={category.id} id={category.id}>
                <SectionHeader 
                  title={category.title} 
                  description={category.description} 
                />
                <div className="space-y-4">
                  {category.items.map((item) => (
                    <ServiceCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Footer Area */}
          <div className="mt-10 pt-4 pb-24">
            
            <SocialLinks />

            <div className="text-center pt-8 border-t border-gray-100">
              <Logo />
              <p className="text-xs text-gray-400 mt-4">
                © {new Date().getFullYear()} Feed em Foco 360.<br/>
                Todos os direitos reservados.
              </p>
            </div>
          </div>

        </main>
      </div>

      <ContactFab />
    </div>
  );
}