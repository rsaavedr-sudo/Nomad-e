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

const properties = [
  {
    id: 0,
    title: "Departamento vista para el mar",
    type: "Penthouse Premium",
    description: "Exclusivo departamento con vistas espectaculares al océano, diseñado para una experiencia inolvidable.",
    capacity: "4 personas",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1080"
  },
  {
    id: 1,
    title: "Loft Moderno Ipanema",
    type: "Loft",
    description: "Espacio minimalista y sofisticado, ideal para estadías cortas en el corazón de Ipanema.",
    capacity: "2 personas",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1080"
  },
  {
    id: 2,
    title: "Vista al Mar Copacabana",
    type: "Departamento",
    description: "Despierta con el sonido de las olas en este exclusivo departamento frente a la playa.",
    capacity: "4 personas",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1080"
  },
  {
    id: 3,
    title: "Loft Industrial Leblon",
    type: "Loft",
    description: "Diseño industrial con toques premium, a pasos de los mejores restaurantes de Río.",
    capacity: "2 personas",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=1080"
  }
];

const services = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Limpieza Profesional",
    desc: "Servicios de limpieza de grado hotelero entre cada estancia."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Vetting de Huéspedes",
    desc: "Verificamos a cada huésped para garantizar la seguridad de tu hogar."
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Precios Dinámicos",
    desc: "Algoritmos avanzados para maximizar tus ingresos diarios."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Soporte 24/7",
    desc: "Atención al cliente y emergencias en todo momento."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Seguro y Protección",
    desc: "Gestión de depósitos y coordinación de seguros."
  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Fotografía Profesional",
    desc: "Hacemos que tu propiedad destaque en todas las plataformas."
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [valuation, setValuation] = useState(2500);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-yellow-400 selection:text-slate-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white py-4 shadow-md" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-black tracking-tighter text-yellow-500">
            NOMAD-E
          </a>
          
          <div className="hidden md:flex space-x-8 items-center">
            {["Propiedades", "Experiencias", "Servicios", "Cómo funciona"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(" ", "-")}`} 
                className={`text-sm font-semibold hover:text-yellow-500 transition-colors ${scrolled ? "text-slate-600" : "text-white"}`}
              >
                {item}
              </a>
            ))}
            <button className="bg-yellow-400 text-slate-900 px-6 py-2.5 rounded-full text-sm font-bold hover:bg-yellow-500 transition-all shadow-lg shadow-yellow-400/20">
              Reserva ahora
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
            {["Propiedades", "Experiencias", "Servicios", "Cómo funciona"].map((item) => (
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
              Reserva ahora
            </button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#f8f7f4]">
        <div className="absolute inset-0 z-0 opacity-60">
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2070" 
            alt="Interior con vista al mar" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f8f7f4] via-[#f8f7f4]/40 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-slate-900">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-yellow-400/20 border border-yellow-400/30 text-yellow-600 text-xs font-bold uppercase tracking-wider"
              >
                <Star className="w-3 h-3 fill-current" />
                <span>Gestión Premium en Río de Janeiro</span>
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500">Vistas espectaculares.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed font-medium"
            >
              En Nomad-E seleccionamos departamentos diferenciados y especiales en Río de Janeiro para ofrecerte experiencias verdaderamente inolvidables.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-yellow-400 text-slate-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-500 transition-all flex items-center justify-center shadow-lg shadow-yellow-400/20">
                Explorar Departamentos <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10">
                Nuestra Experiencia
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
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1080" 
              alt="Departamento vista para el mar" 
              className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110"
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
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center mb-1 shadow-lg shadow-yellow-400/20">
                  <Star className="w-5 h-5 text-white fill-current" />
                </div>
                <span className="text-[8px] font-bold text-slate-400 uppercase leading-none">Review Awards<br/>2026</span>
              </motion.div>
            </div>

            <div className="absolute bottom-8 left-8 text-white">
              <div className="flex items-center space-x-1 text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <h3 className="text-2xl font-bold mb-1">Departamento vista para el mar</h3>
              <p className="text-slate-300 text-sm">Vistas infinitas y diseño excepcional en la costa.</p>
            </div>
          </motion.div>
        </div>

        {/* Trust Bar */}
        <div className="absolute bottom-0 left-0 w-full bg-white/5 backdrop-blur-sm py-8 border-t border-white/10">
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
      <section id="propiedades" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Departamentos con Alma</h2>
              <p className="text-xl text-slate-600">Nuestra selección exclusiva de espacios diseñados para ofrecer vistas espectaculares y confort absoluto.</p>
            </div>
            <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold flex items-center hover:bg-slate-800 transition-all shadow-xl">
              Ver todos los departamentos <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {properties.map((prop, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 shadow-lg">
                  <img 
                    src={prop.image} 
                    alt={prop.title} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="text-xs font-bold uppercase tracking-widest text-yellow-400 mb-2">{prop.type}</div>
                    <h3 className="text-2xl font-bold">{prop.title}</h3>
                    <p className="text-white/70 text-sm mt-2 flex items-center">
                      <MapPin className="w-3 h-3 mr-1" /> Río de Janeiro
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
            <div className="text-amber-900/60 text-sm font-bold uppercase tracking-wider">Rating Huéspedes</div>
          </div>
          <div>
            <div className="text-4xl font-black mb-2">+10k</div>
            <div className="text-amber-900/60 text-sm font-bold uppercase tracking-wider">Noches Reservadas</div>
          </div>
          <div>
            <div className="text-4xl font-black mb-2">100%</div>
            <div className="text-amber-900/60 text-sm font-bold uppercase tracking-wider">Vistas Increíbles</div>
          </div>
          <div>
            <div className="text-4xl font-black mb-2">24/7</div>
            <div className="text-amber-900/60 text-sm font-bold uppercase tracking-wider">Atención VIP</div>
          </div>
        </div>
      </section>

      {/* Services Section - NOW SECONDARY */}
      <section id="servicios" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Experiencias Nomad-E</h2>
            <p className="text-xl text-slate-600">No solo gestionamos lugares, creamos momentos memorables con servicios de primer nivel.</p>
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
      <section id="cómo-funciona" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">Cómo ser parte de la experiencia.</h2>
              <div className="space-y-12">
                {[
                  { step: "01", title: "Elige tu Destino", desc: "Explora nuestra colección curada de departamentos con las mejores vistas de Río." },
                  { step: "02", title: "Reserva Directa", desc: "Garantiza el mejor precio y atención personalizada reservando a través de Nomad-E." },
                  { step: "03", title: "Disfruta el Viaje", desc: "Nosotros nos encargamos de cada detalle para que tu estadía sea perfecta." }
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
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8">¿Listo para una experiencia inolvidable?</h2>
            <p className="text-xl text-amber-900/80 mb-12 max-w-2xl mx-auto">Reserva tu estadía en uno de nuestros departamentos exclusivos y descubre Río desde una perspectiva única.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-slate-900 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-slate-800 transition-all shadow-xl">
                Reservar Ahora
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-slate-900 px-10 py-5 rounded-full text-xl font-bold hover:bg-white/30 transition-all border border-black/5">
                Contactar Ventas
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
                La plataforma líder en gestión de propiedades de corto plazo en Río de Janeiro. Tecnología y servicio local para dueños exigentes.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center hover:bg-yellow-50 hover:text-yellow-600 transition-all"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center hover:bg-yellow-50 hover:text-yellow-600 transition-all"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center hover:bg-yellow-50 hover:text-yellow-600 transition-all"><Mail className="w-5 h-5" /></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-400">Compañía</h4>
              <ul className="space-y-4 font-semibold text-slate-600">
                <li><a href="#" className="hover:text-yellow-600 transition-colors">Sobre nosotros</a></li>
                <li><a href="#" className="hover:text-yellow-600 transition-colors">Servicios</a></li>
                <li><a href="#" className="hover:text-yellow-600 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-yellow-600 transition-colors">Carreras</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-400">Contacto</h4>
              <div className="space-y-4 text-slate-600 font-semibold">
                <a href="tel:+552199999999" className="flex items-center hover:text-yellow-600 transition-colors">
                  <Phone className="w-5 h-5 mr-3 text-yellow-500" /> +55 21 9999-9999
                </a>
                <a href="mailto:hola@nomad-e.com" className="flex items-center hover:text-yellow-600 transition-colors">
                  <Mail className="w-5 h-5 mr-3 text-yellow-500" /> hola@nomad-e.com
                </a>
                <p className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-yellow-500 shrink-0" />
                  Ipanema, Río de Janeiro
                </p>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-slate-400 font-medium">© 2026 Nomad-E. Todos los derechos reservados.</p>
            <div className="flex space-x-8 text-sm text-slate-400 font-medium">
              <a href="#" className="hover:text-slate-900 transition-colors">Privacidad</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Términos</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
