import { motion } from "motion/react";
import { 
  Home, 
  Waves, 
  CheckCircle2, 
  TrendingUp, 
  Calendar, 
  Camera, 
  Users, 
  Instagram, 
  Facebook, 
  Mail, 
  MapPin, 
  Phone,
  Menu,
  X,
  Shield,
  Clock,
  Sparkles,
  BarChart3,
  ArrowRight,
  Star
} from "lucide-react";
import { useState, useEffect } from "react";
import { IMAGES } from "./constants/images";

const properties = [
  {
    id: 0,
    title: "Apartamento com vista para o mar",
    type: "Espaço de Autor",
    description: "Um refúgio intelectual com estante vermelha icônica, madeira natural e uma atmosfera acolhedora projetada para inspiração.",
    capacity: "2-4 pessoas",
    image: IMAGES.SALA_04,
    gallery: [
      IMAGES.SALA_04,
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1080",
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&q=80&w=1080",
      "https://images.unsplash.com/photo-1536376074432-cd0258924831?auto=format&fit=crop&q=80&w=1080"
    ]
  },
  {
    id: 1,
    title: "loft alto vidigal",
    type: "Loft",
    description: "Espaço minimalista e sofisticado, ideal para estadias curtas no alto do Vidigal.",
    capacity: "2 pessoas",
    image: IMAGES.LOFT_ALTO_VIDIGAL
  },
  {
    id: 2,
    title: "apartamento com vista para o mar",
    type: "Apartamento",
    description: "Desperte com o som das ondas neste exclusivo apartamento em frente à praia.",
    capacity: "4 pessoas",
    image: IMAGES.VISTA_MAR_VIDIGAL
  },
  {
    id: 3,
    title: "Loft Industrial",
    type: "Loft",
    description: "Design industrial com toques premium, a passos dos melhores restaurantes do Rio.",
    capacity: "2 pessoas",
    image: IMAGES.ESTUDIO_LEBLON
  },
  {
    id: 4,
    title: "Loft único no Centro Histórico",
    type: "Loft",
    description: "Um espaço com história e design contemporâneo no coração cultural do Rio de Janeiro.",
    capacity: "2 pessoas",
    image: IMAGES.LOFT_CENTRO
  }
];

const services = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Limpeza Profissional",
    desc: "Serviços de limpeza de padrão hoteleiro entre cada estadia."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Vetting de Hóspedes",
    desc: "Verificamos cada hóspede para garantir a segurança da sua casa."
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Preços Dinâmicos",
    desc: "Algoritmos avançados para maximizar seus rendimentos diários."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Suporte 24/7",
    desc: "Atendimento ao cliente e emergências a todo momento."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Seguro e Proteção",
    desc: "Gestão de depósitos e coordenação de seguros."
  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Fotografia Profissional",
    desc: "Fazemos sua propriedade se destacar em todas as plataformas."
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<typeof properties[0] | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (selectedProperty) {
      window.scrollTo(0, 0);
    }
  }, [selectedProperty]);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  if (selectedProperty) {
    return (
      <div className="min-h-screen bg-white text-slate-900 font-sans">
        <nav className="fixed w-full z-50 bg-white py-4 shadow-md">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <button 
              onClick={() => setSelectedProperty(null)}
              className="flex items-center text-slate-600 hover:text-yellow-500 font-bold transition-colors"
            >
              <ArrowRight className="w-5 h-5 mr-2 rotate-180" /> Voltar ao início
            </button>
            <a href="#" className="text-2xl font-black tracking-tighter text-yellow-500">
              NOMAD-E
            </a>
          </div>
        </nav>

        <main className="pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5]"
              >
                <img 
                  src={selectedProperty.image} 
                  alt={selectedProperty.title} 
                  className="w-full h-full object-cover brightness-110 contrast-105"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-col justify-center"
              >
                <div className="text-xs font-bold uppercase tracking-widest text-yellow-500 mb-4">{selectedProperty.type}</div>
                <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                  {selectedProperty.title}
                </h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  {selectedProperty.description}
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-10">
                  <div className="bg-slate-50 p-6 rounded-2xl">
                    <div className="text-slate-400 text-xs font-bold uppercase mb-1">Capacidade</div>
                    <div className="text-xl font-bold">{selectedProperty.capacity}</div>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl">
                    <div className="text-slate-400 text-xs font-bold uppercase mb-1">Localização</div>
                    <div className="text-xl font-bold">Rio de Janeiro</div>
                  </div>
                </div>

                <button className="w-full bg-yellow-400 text-slate-900 py-5 rounded-2xl text-xl font-bold hover:bg-yellow-500 transition-all shadow-xl shadow-yellow-400/20">
                  Consultar Disponibilidade
                </button>
              </motion.div>
            </div>

            <section className="mb-20">
              <h2 className="text-3xl font-black mb-10">Galeria de Fotos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(selectedProperty.gallery || [selectedProperty.image]).map((img, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="rounded-3xl overflow-hidden aspect-square shadow-lg hover:shadow-2xl transition-all cursor-zoom-in"
                  >
                    <img 
                      src={img} 
                      alt={`Vista ${idx + 1}`} 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 brightness-110 contrast-105"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        </main>

        <footer className="bg-slate-900 text-white py-12 px-6 text-center">
          <p className="text-slate-400 font-medium">© 2026 Nomad-E. Todos os direitos reservados.</p>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-yellow-400 selection:text-slate-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white py-4 shadow-md" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-black tracking-tighter text-yellow-500">
            NOMAD-E
          </a>
          
          <div className="hidden md:flex space-x-8 items-center">
            {["Propriedades", "Experiências", "Serviços", "Como funciona"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(" ", "-")}`} 
                className={`text-sm font-semibold hover:text-yellow-500 transition-colors ${scrolled ? "text-slate-600" : "text-white"}`}
              >
                {item}
              </a>
            ))}
            <button className="bg-yellow-400 text-slate-900 px-6 py-2.5 rounded-full text-sm font-bold hover:bg-yellow-500 transition-all shadow-lg shadow-yellow-400/20">
              Reserve agora
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className={scrolled ? "text-slate-900" : "text-white"} /> : <Menu className={scrolled ? "text-slate-900" : "text-white"} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-white border-t border-slate-100 p-6 flex flex-col space-y-4 md:hidden shadow-xl"
          >
            {["Propriedades", "Experiências", "Serviços", "Como funciona"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(" ", "-")}`} 
                className="text-lg font-semibold text-slate-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="w-full bg-yellow-400 text-slate-900 py-4 rounded-xl font-bold">
              Reserve agora
            </button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col pt-20 overflow-hidden bg-[#0f0e0a]">
        <div className="absolute inset-0 z-0 opacity-60">
          <img 
            src={IMAGES.SALA_04} 
            alt="Interior ecléctico con estantería roja y ambiente cálido" 
            className="w-full h-full object-cover brightness-110 contrast-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f0e0a] via-[#0f0e0a]/70 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center my-auto py-12">
          <div className="text-white">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs font-bold uppercase tracking-wider"
              >
                <Star className="w-3 h-3 fill-current" />
                <span>Gestão Premium no Rio de Janeiro</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center space-x-3 px-4 py-2 rounded-xl bg-white text-slate-900 shadow-xl"
              >
                <div className="flex flex-col leading-tight">
                  <span className="text-xs font-black text-[#003580]">Booking.com</span>
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-tighter">Traveller Review Awards 2026</span>
                </div>
                <div className="w-8 h-8 bg-[#003580] text-white text-xs font-bold flex items-center justify-center rounded-lg shadow-inner">9.8</div>
              </motion.div>
            </div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-[1.1]"
            >
              Lugares únicos. <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500">Vistas espetaculares, experiências inesquecíveis.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-slate-300 mb-10 max-w-lg leading-relaxed"
            >
              Na Nomad-E selecionamos apartamentos diferenciados e especiais no Rio de Janeiro para oferecer experiências verdadeiramente inesquecíveis.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-yellow-400 text-slate-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-500 transition-all flex items-center justify-center">
                Explorar Apartamentos <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all">
                Nossa Experiência
              </button>
            </motion.div>
          </div>

          {/* Featured View Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="relative group rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10"
          >
            <img 
              src={IMAGES.SALA_04} 
              alt="Apartamento com vista para o mar" 
              className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110 brightness-110 contrast-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            {/* Award Badge Overlay */}
            <div className="absolute top-6 right-6">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 1 }}
                className="bg-white p-3 rounded-2xl shadow-2xl border border-slate-100 flex flex-col items-center text-center"
              >
                <span className="text-[10px] font-black text-[#003580] mb-1">Booking.com</span>
                <div className="w-10 h-10 bg-nomad-red rounded-full flex items-center justify-center mb-1 shadow-lg shadow-nomad-red/20">
                  <Star className="w-5 h-5 text-white fill-current" />
                </div>
                <span className="text-[8px] font-bold text-slate-400 uppercase leading-none">Review Awards<br/>2026</span>
              </motion.div>
            </div>

            <div className="absolute bottom-8 left-8 text-white">
              <div className="flex items-center space-x-1 text-nomad-red mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <h3 className="text-2xl font-bold mb-1">Apartamento com vista para o mar</h3>
              <p className="text-slate-300 text-sm">Cultura, design e aconchego em cada canto.</p>
            </div>
          </motion.div>
        </div>

        {/* Trust Bar */}
        <div className="relative w-full bg-white/5 backdrop-blur-sm py-8 border-t border-white/10 z-20">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 items-center opacity-50 grayscale invert">
            <span className="text-xl font-black tracking-tighter">AIRBNB</span>
            <span className="text-xl font-black tracking-tighter">BOOKING.COM</span>
            <span className="text-xl font-black tracking-tighter">VRBO</span>
            <span className="text-xl font-black tracking-tighter">EXPEDIA</span>
            <span className="text-xl font-black tracking-tighter">MARRIOTT</span>
          </div>
        </div>
      </section>

      {/* Properties Portfolio - NOW PRIMARY */}
      <section id="propriedades" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Apartamentos com Alma</h2>
              <p className="text-xl text-slate-600">Nossa seleção exclusiva de espaços projetados para oferecer vistas espetaculares e conforto absoluto.</p>
            </div>
            <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold flex items-center hover:bg-slate-800 transition-all shadow-xl">
              Ver todos os apartamentos <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((prop, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProperty(prop)}
              >
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 shadow-lg">
                  <img 
                    src={prop.image} 
                    alt={prop.title} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 brightness-110 contrast-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="text-xs font-bold uppercase tracking-widest text-yellow-400 mb-2">{prop.type}</div>
                    <h3 className="text-2xl font-bold">{prop.title}</h3>
                    <p className="text-white/70 text-sm mt-2 flex items-center">
                      <MapPin className="w-3 h-3 mr-1" /> Rio de Janeiro
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-amber-400 text-slate-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-black mb-2">4.9/5</div>
            <div className="text-amber-900/60 text-sm font-bold uppercase tracking-wider">Avaliação de Hóspedes</div>
          </div>
          <div>
            <div className="text-4xl font-black mb-2">+10k</div>
            <div className="text-amber-900/60 text-sm font-bold uppercase tracking-wider">Noites Reservadas</div>
          </div>
          <div>
            <div className="text-4xl font-black mb-2">100%</div>
            <div className="text-amber-900/60 text-sm font-bold uppercase tracking-wider">Vistas Incríveis</div>
          </div>
          <div>
            <div className="text-4xl font-black mb-2">24/7</div>
            <div className="text-amber-900/60 text-sm font-bold uppercase tracking-wider">Atendimento VIP</div>
          </div>
        </div>
      </section>

      {/* Services Section - NOW SECONDARY */}
      <section id="serviços" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Experiências Nomad-E</h2>
            <p className="text-xl text-slate-600">Não apenas gerenciamos lugares, criamos momentos memoráveis com serviços de alto padrão.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
              >
                <div className="w-14 h-14 bg-yellow-50 text-yellow-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-yellow-400 group-hover:text-slate-900 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works - NOW SECONDARY */}
      <section id="como-funciona" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">Como fazer parte da experiência.</h2>
              <div className="space-y-12">
                {[
                  { step: "01", title: "Escolha seu Destino", desc: "Explore nossa coleção curada de apartamentos com as melhores vistas do Rio." },
                  { step: "02", title: "Reserva Direta", desc: "Garanta o melhor preço e atendimento personalizado reservando através da Nomad-E." },
                  { step: "03", title: "Aproveite a Viagem", desc: "Nós cuidamos de cada detalhe para que sua estadia seja perfeita." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="text-4xl font-black text-yellow-500/20">{item.step}</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              {...fadeIn}
              className="relative rounded-[40px] overflow-hidden shadow-2xl aspect-square lg:aspect-auto lg:h-[600px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1080" 
                alt="Lifestyle" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-yellow-400/10 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-yellow-400 via-yellow-400 to-amber-500 rounded-[40px] p-12 md:p-20 text-center text-slate-900 relative overflow-hidden shadow-2xl shadow-yellow-400/40">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8">Pronto para uma experiência inesquecível?</h2>
            <p className="text-xl text-amber-900/80 mb-12 max-w-2xl mx-auto">Reserve sua estadia em um de nossos apartamentos exclusivos e descubra o Rio de uma perspectiva única.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-slate-900 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-slate-800 transition-all shadow-xl">
                Reservar Agora
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-slate-900 px-10 py-5 rounded-full text-xl font-bold hover:bg-white/30 transition-all border border-black/5">
                Contatar Vendas
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-3xl font-black tracking-tighter mb-6 text-yellow-500">NOMAD-E</h2>
              <p className="text-slate-500 max-w-sm mb-8">
                A plataforma líder em gestão de propriedades de curto prazo no Rio de Janeiro. Tecnologia e serviço local para proprietários exigentes.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center hover:bg-yellow-50 hover:text-yellow-600 transition-all"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center hover:bg-yellow-50 hover:text-yellow-600 transition-all"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center hover:bg-yellow-50 hover:text-yellow-600 transition-all"><Mail className="w-5 h-5" /></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-400">Empresa</h4>
              <ul className="space-y-4 font-semibold text-slate-600">
                <li><a href="#" className="hover:text-yellow-600 transition-colors">Sobre nós</a></li>
                <li><a href="#" className="hover:text-yellow-600 transition-colors">Serviços</a></li>
                <li><a href="#" className="hover:text-yellow-600 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-yellow-600 transition-colors">Carreiras</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-400">Contato</h4>
              <div className="space-y-4 text-slate-600 font-semibold">
                <a href="tel:+552199999999" className="flex items-center hover:text-yellow-600 transition-colors">
                  <Phone className="w-5 h-5 mr-3 text-yellow-500" /> +55 21 9999-9999
                </a>
                <a href="mailto:hola@nomad-e.com" className="flex items-center hover:text-yellow-600 transition-colors">
                  <Mail className="w-5 h-5 mr-3 text-yellow-500" /> hola@nomad-e.com
                </a>
                <p className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-yellow-500 shrink-0" />
                  Ipanema, Rio de Janeiro
                </p>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-slate-400 font-medium">© 2026 Nomad-E. Todos os direitos reservados.</p>
            <div className="flex space-x-8 text-sm text-slate-400 font-medium">
              <a href="#" className="hover:text-slate-900 transition-colors">Privacidade</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Termos</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
