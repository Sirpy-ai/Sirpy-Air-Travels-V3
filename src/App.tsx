import React, { useState, useEffect } from 'react';
import { 
  PlaneTakeoff, 
  MapPin, 
  Landmark, 
  Hotel, 
  Car, 
  Headphones, 
  FileCheck, 
  ArrowRight, 
  ArrowLeft, 
  Mail, 
  Send, 
  Facebook, 
  Instagram, 
  Youtube,
  Music2,
  Menu,
  X,
  Plane,
  Waves,
  Search,
  Palmtree,
  Globe,
  Flame,
  Clock,
  Phone
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const WHATSAPP_LINK = "https://wa.me/919344020864";
const INSTAGRAM_LINK = "https://www.instagram.com/sirpyairtravels/";
const FACEBOOK_LINK = "https://www.instagram.com/sirpyairtravels/"; // As per user request
const YOUTUBE_LINK = "https://www.youtube.com/@sirpyairtravels";

const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="hover:text-primary transition-colors font-bold text-slate-600/80">
    {children}
  </a>
);

const ServiceCard = ({ icon: Icon, title, description, colorClass }: { icon: any, title: string, description: string, colorClass: string }) => (
  <motion.div 
    whileHover={{ y: -8 }}
    className="clay-card p-10 hover:shadow-2xl transition-all group transform-gpu"
  >
    <div className={`size-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-inner border border-slate-100`}>
      <Icon className={`size-8 ${colorClass} font-bold`} />
    </div>
    <h4 className="text-xl font-extrabold mb-4 text-slate-900">{title}</h4>
    <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const SpecialFlightOfferCard = ({ 
  airline, 
  from, 
  to, 
  price, 
  theme, 
  icon: Icon, 
  btnText,
  subText 
}: { 
  airline: string, 
  from: string, 
  to: string, 
  price?: string, 
  theme: string, 
  icon: any, 
  btnText: string,
  subText: string
}) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className={`relative p-8 rounded-[40px] flex flex-col items-center text-center shadow-2xl overflow-hidden ${theme} min-h-[400px] justify-between transform-gpu`}
  >
    <div className="bg-white rounded-full px-8 py-3 mb-8 shadow-md">
      <span className="text-slate-900 font-black text-base uppercase tracking-tighter">{airline}</span>
    </div>
    
    <div className="mb-4">
      <h3 className="text-3xl md:text-4xl font-black text-slate-900 flex items-center gap-3 justify-center">
        {from} <ArrowRight className="size-6 opacity-20" /> {to}
      </h3>
    </div>
    
    <p className="text-slate-700 font-bold mb-8 text-lg">{subText}</p>
    
    <a 
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full bg-white text-slate-900 py-5 rounded-[24px] font-black shadow-xl hover:bg-slate-50 transition-all active:scale-95 text-center"
    >
      {btnText}
    </a>
    
    <div className="absolute -bottom-4 -left-4 opacity-10 rotate-12">
      <Icon className="size-32" />
    </div>
  </motion.div>
);

const SpecialPackageCard = ({ 
  name, 
  duration, 
  price, 
  highlights, 
  theme, 
  image,
  btnText 
}: { 
  name: string, 
  duration: string, 
  price: string, 
  highlights: string[], 
  theme: string, 
  image: string,
  btnText: string
}) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className={`relative p-8 rounded-[40px] flex flex-col shadow-2xl overflow-hidden ${theme} min-h-[550px] min-w-[300px] md:min-w-[320px] text-white transform-gpu`}
  >
    <div className="size-16 rounded-2xl overflow-hidden mb-6 shadow-lg border-2 border-white/20">
      <img src={image} alt={name} className="w-full h-full object-cover" referrerPolicy="no-referrer" loading="lazy" />
    </div>
    
    <div className="mb-2">
      <h3 className="text-3xl font-black leading-tight mb-1">{name}</h3>
      <p className="text-white/70 font-bold text-sm">{duration}</p>
    </div>
    
    <div className="my-6 py-4 border-y border-white/10">
      <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">Starting from</p>
      <p className="text-2xl font-black">{price}</p>
    </div>
    
    <div className="flex-1">
      <p className="text-xs font-black uppercase tracking-widest mb-3 opacity-60">Key Highlights</p>
      <ul className="space-y-2">
        {highlights.map((item, i) => (
          <li key={i} className="flex items-center gap-2 text-sm font-medium">
            <span className="size-1.5 rounded-full bg-white/40"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
    
    <a 
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-8 w-full bg-white text-slate-900 py-4 rounded-[20px] font-black shadow-xl hover:bg-slate-50 transition-all text-center"
    >
      {btnText}
    </a>
  </motion.div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Load Curator.io script if not already present
    const scriptId = 'curator-io-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'text/javascript';
      script.async = true;
      script.charset = 'UTF-8';
      script.src = "https://cdn.curator.io/published/f59f8ec2-4bd1-4cfe-935e-b5b09c4ff086.js";
      document.body.appendChild(script);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for joining! We'll send updates to ${email}`);
    setEmail('');
  };

  return (
    <div className="min-h-screen font-sans selection:bg-primary/30 selection:text-primary">
      {/* Header */}
      <header className="px-4 md:px-10 py-8 sticky top-0 z-50">
        <nav className="clay-card max-w-7xl mx-auto px-6 md:px-10 py-4 md:py-5 flex items-center justify-between backdrop-blur-md bg-[#f8f1eb]/80">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="size-10 md:size-12 bg-primary rounded-2xl flex items-center justify-center text-white clay-btn-3d">
              <PlaneTakeoff className="size-5 md:size-6" />
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tighter text-primary">SIRPY</span>
          </div>

          <div className="hidden lg:flex gap-12">
            <NavItem href="#destinations">Destinations</NavItem>
            <NavItem href="#tours">Temple Tours</NavItem>
            <NavItem href="#heritage">Heritage</NavItem>
            <NavItem href="#corporate">Corporate</NavItem>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg transition-all active:scale-95"
            >
              <Phone className="size-4" />
              WhatsApp
            </a>
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:block clay-btn-3d px-8 py-3 rounded-full text-white font-bold text-sm"
            >
              Book My Trip
            </a>
            <button 
              className="lg:hidden p-2 text-slate-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden absolute top-full left-4 right-4 mt-2 clay-card p-6 space-y-4 shadow-2xl"
            >
              <a href="#" className="block font-bold text-slate-600 hover:text-primary">Destinations</a>
              <a href="#" className="block font-bold text-slate-600 hover:text-primary">Temple Tours</a>
              <a href="#" className="block font-bold text-slate-600 hover:text-primary">Heritage</a>
              <a href="#" className="block font-bold text-slate-600 hover:text-primary">Corporate</a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center clay-btn-3d px-8 py-3 rounded-full text-white font-bold text-sm"
              >
                Book My Trip
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 md:px-10 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative h-[400px] md:h-[600px] clay-card bg-[#eaddcf] overflow-hidden group"
          >
            <div className="absolute inset-0 opacity-20 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
            <div className="relative w-full h-full p-6 md:p-12">
              {/* Decorative Elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-10 md:bottom-20 left-6 md:left-10 w-32 md:w-40 h-44 md:h-56 bg-white/95 rounded-t-full shadow-2xl transform -rotate-6 flex flex-col items-center justify-center border-4 border-white/50"
              >
                <Waves className="size-12 md:size-16 text-slate-300" />
                <p className="text-[10px] font-bold mt-2 uppercase tracking-widest text-slate-400">Singapore</p>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-6 md:bottom-10 right-6 md:right-10 w-40 md:w-48 h-60 md:h-72 bg-[#fdf2e9]/95 rounded-t-[36px] shadow-2xl transform rotate-3 flex flex-col items-center justify-end p-4 md:p-6 border-4 border-white/50"
              >
                <div className="w-full h-full bg-[#fce8d5]/60 rounded-t-2xl flex items-center justify-center">
                  <Landmark className="size-16 md:size-20 text-accent-orange/50" />
                </div>
                <p className="text-[10px] font-bold mt-4 uppercase tracking-widest text-[#d66e33]">Tamil Nadu</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                animate={{ opacity: 1, scale: 1, rotate: 12 }}
                transition={{ delay: 0.5 }}
                className="absolute top-20 md:top-32 right-6 md:right-12 w-48 md:w-56 h-28 md:h-32 bg-teal-50 rounded-2xl shadow-2xl p-4 border-2 border-white/60"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-bold text-primary">SIN</span>
                  <Plane className="size-4 text-teal-400" />
                  <span className="text-[10px] font-bold text-primary">TRZ</span>
                </div>
                <div className="h-1 w-full bg-teal-100 rounded-full mb-2"></div>
                <div className="h-8 w-full bg-slate-200/40 rounded flex items-center justify-center text-[8px] font-mono tracking-tighter overflow-hidden">
                  |||||||| |||||||| |||| ||||| |||||||| |||||||| |||| |||||
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8 md:space-y-10"
          >
            <div className="inline-flex items-center gap-3 clay-inset px-6 py-2 rounded-full bg-white/30 backdrop-blur-sm">
              <span className="size-2 rounded-full bg-accent-orange animate-pulse"></span>
              <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Premium Cultural Travel</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-tight">
              Travel with <br/><span className="text-primary">Purpose.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600/80 max-w-lg leading-relaxed font-medium">
              Bridge the soul between Singapore and India. Curated heritage journeys, sacred temple tours, and seamless luxury connectivity.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-4">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="clay-btn-3d px-10 md:px-12 py-5 md:py-6 rounded-[36px] text-white font-extrabold text-lg md:text-xl flex items-center gap-4 group"
              >
                Explore Packages
                <div className="size-8 md:size-10 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-2 transition-transform shadow-inner">
                  <ArrowRight className="size-5 md:size-6" />
                </div>
              </a>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-800">4.9/5</span>
                <span className="text-xs font-bold text-slate-500 tracking-wider">CULTURAL REVIEWS</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Marquee */}
        <div className="overflow-hidden bg-accent-gold py-5 shadow-xl mt-20 relative z-10 transform-gpu">
          <div className="flex whitespace-nowrap animate-marquee will-change-transform">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-20 items-center mx-10">
                <span className="text-white font-black text-xl md:text-2xl uppercase tracking-tighter flex items-center gap-4">
                  <span className="opacity-40">✦</span> Exclusive SIN-TRZ Flights $399
                </span>
                <span className="text-white font-black text-xl md:text-2xl uppercase tracking-tighter flex items-center gap-4">
                  <span className="opacity-40">✦</span> Madurai Meenakshi Heritage Tour Now Open
                </span>
                <span className="text-white font-black text-xl md:text-2xl uppercase tracking-tighter flex items-center gap-4">
                  <span className="opacity-40">✦</span> Complimentary Lounge Access for Elders
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Offers Section */}
        <section className="max-w-7xl mx-auto px-4 md:px-10 py-24 md:py-32">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="clay-card px-8 py-4 mb-8 flex items-center gap-8 shadow-inner bg-white/40">
              <span className="font-black text-primary border-b-2 border-primary pb-1">Flights</span>
              <span className="font-bold text-slate-400 hover:text-slate-600 cursor-pointer">Hotels</span>
              <span className="font-bold text-slate-400 hover:text-slate-600 cursor-pointer">Packages</span>
              <Search className="size-5 text-slate-400" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4">Special Flight Offers</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <SpecialFlightOfferCard 
              airline="Scoot"
              from="SIN"
              to="TRZ"
              subText="From SGD 189"
              btnText="Book Now"
              theme="bg-gradient-to-br from-yellow-300 to-orange-400"
              icon={Palmtree}
            />
            <SpecialFlightOfferCard 
              airline="IndiGo"
              from="SIN"
              to="DEL"
              subText="Special Fare Available"
              btnText="Check Now"
              theme="bg-gradient-to-br from-blue-400 to-blue-600"
              icon={Globe}
            />
            <SpecialFlightOfferCard 
              airline="Air India"
              from="SIN"
              to="BOM"
              subText="Limited Time Deal"
              btnText="Explore"
              theme="bg-gradient-to-br from-red-400 to-red-600"
              icon={Landmark}
            />
            <SpecialFlightOfferCard 
              airline="Singapore Airlines"
              from="SIN"
              to="MAA"
              subText="Premium Saver Fare"
              btnText="Book Premium"
              theme="bg-gradient-to-br from-slate-700 to-slate-900"
              icon={Flame}
            />
          </div>
          
          <div className="flex justify-center items-center gap-8 mt-16">
            <div className="flex items-center gap-4">
              <button className="size-10 clay-card flex items-center justify-center bg-white/50 hover:bg-white transition-colors">
                <ArrowLeft className="size-4" />
              </button>
              <span className="font-bold text-slate-400">1 / 3</span>
              <button className="size-10 clay-card flex items-center justify-center bg-white/50 hover:bg-white transition-colors">
                <ArrowRight className="size-4" />
              </button>
            </div>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-primary font-black hover:underline">View All Offers</a>
          </div>
        </section>

        {/* Instagram Feed Section (Moved below Special Flight Offers) */}
        <section className="max-w-7xl mx-auto px-4 md:px-10 py-12 md:py-24 mb-16 md:mb-32">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900">Follow Our Journey</h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">@SirpyTravels on Instagram</p>
          </div>
          <div className="clay-card p-2 md:p-8 bg-white/40 backdrop-blur-sm min-h-[400px] w-full overflow-hidden">
            <div id="curator-feed-default-feed-layout" className="w-full">
              <a href="https://curator.io" target="_blank" rel="noopener noreferrer" className="crt-logo crt-tag">Powered by Curator.io</a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="max-w-7xl mx-auto px-4 md:px-10 py-24 md:py-32 bg-white/20 rounded-[48px] md:rounded-[64px] shadow-inner mb-32">
          <div className="text-center mb-16 md:20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900">World-Class Services</h2>
            <p className="text-slate-600 font-medium max-w-xl mx-auto">Beyond just a ticket, we provide an end-to-end luxury experience tailored for the discerning cultural traveler.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={Plane} 
              title="Flight Booking" 
              description="Direct connections with premium cabin options and extra baggage for religious offerings."
              colorClass="text-primary"
            />
            <ServiceCard 
              icon={Landmark} 
              title="Temple Tours" 
              description="Privileged access to South Indian temples with experienced Vedic guides and scholars."
              colorClass="text-accent-orange"
            />
            <ServiceCard 
              icon={Hotel} 
              title="Heritage Stays" 
              description="Luxury stays in restored heritage palaces and boutique spiritual retreats."
              colorClass="text-accent-gold"
            />
            <ServiceCard 
              icon={Car} 
              title="Chauffeur Service" 
              description="Private luxury transport with courteous drivers who understand your language and culture."
              colorClass="text-slate-700"
            />
            <ServiceCard 
              icon={Headphones} 
              title="24/7 Concierge" 
              description="Dedicated travel assistants available round the clock to manage changes and requests."
              colorClass="text-primary"
            />
            <ServiceCard 
              icon={FileCheck} 
              title="Visa Assistance" 
              description="Expert handling of e-visas and regular Indian visas with minimal turnaround time."
              colorClass="text-accent-orange"
            />
          </div>
        </section>

        {/* Packages Carousel Section */}
        <section className="max-w-7xl mx-auto px-4 md:px-10 py-24 mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900">Special Tour Packages</h2>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Curated International Experiences</p>
            </div>
            <div className="flex gap-4">
              <button className="size-14 clay-card flex items-center justify-center hover:scale-105 transition-transform bg-white/50">
                <ArrowLeft className="text-slate-600" />
              </button>
              <button className="size-14 clay-card flex items-center justify-center bg-white hover:scale-105 transition-transform">
                <ArrowRight className="text-slate-900" />
              </button>
            </div>
          </div>

          <div className="flex gap-8 overflow-x-auto pb-12 no-scrollbar snap-x">
            <SpecialPackageCard 
              name="Singapore City Escape" 
              duration="3 Days 2 Nights"
              price="SGD 399"
              highlights={["Universal Studios", "Marina Bay Sands", "Sentosa"]}
              theme="bg-gradient-to-br from-cyan-600 to-cyan-800"
              image="https://picsum.photos/seed/singapore/200/200"
              btnText="View Package"
            />
            <SpecialPackageCard 
              name="Malaysia Explorer" 
              duration="4 Days 3 Nights"
              price="SGD 499"
              highlights={["Kuala Lumpur", "Genting Highlands", "Batu Caves"]}
              theme="bg-gradient-to-br from-emerald-600 to-emerald-800"
              image="https://picsum.photos/seed/malaysia/200/200"
              btnText="Explore Now"
            />
            <SpecialPackageCard 
              name="Bali Island Getaway" 
              duration="5 Days 4 Nights"
              price="SGD 599"
              highlights={["Ubud", "Kuta Beach", "Tanah Lot"]}
              theme="bg-gradient-to-br from-orange-400 to-rose-500"
              image="https://picsum.photos/seed/bali/200/200"
              btnText="Book Now"
            />
            <SpecialPackageCard 
              name="Thailand Adventure" 
              duration="4 Days 3 Nights"
              price="SGD 459"
              highlights={["Bangkok", "Pattaya", "Phi Phi Island"]}
              theme="bg-gradient-to-br from-indigo-600 to-purple-800"
              image="https://picsum.photos/seed/thailand/200/200"
              btnText="See Details"
            />
          </div>
        </section>

        {/* Instagram Feed Section (Moved from here) */}
        
        {/* Office Section */}
        <section className="max-w-5xl mx-auto px-4 md:px-10 py-24 md:py-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="clay-card p-8 md:p-16 flex flex-col items-center text-center bg-[#f8f1eb]/60 backdrop-blur-sm"
          >
            <div className="size-40 md:size-48 bg-[#eaddcf] rounded-full shadow-inner flex items-center justify-center mb-10 relative">
              <div className="absolute inset-0 bg-primary/5 rounded-full animate-pulse"></div>
              <div className="relative flex flex-col items-center">
                <MapPin className="size-16 md:size-20 text-primary" />
                <div className="absolute -bottom-2 -right-2 size-10 md:size-12 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-slate-100">
                  <Landmark className="size-5 md:size-6 text-accent-gold" />
                </div>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900">Visit Our Sanctuary</h2>
            <p className="text-slate-600 font-medium max-w-lg mb-12">Nestled in the heart of Little India, Singapore, our office is designed to provide a serene travel planning experience.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
              <div className="clay-inset p-6 md:p-8 rounded-3xl text-left bg-white/20">
                <p className="text-xs font-black text-primary mb-2 uppercase tracking-widest">Main Office</p>
                <h5 className="text-lg font-bold text-slate-800">123 Serangoon Road</h5>
                <p className="text-slate-500 text-sm">Little India, Singapore 218223</p>
              </div>
              <div className="clay-inset p-6 md:p-8 rounded-3xl text-left bg-white/20">
                <p className="text-xs font-black text-accent-orange mb-2 uppercase tracking-widest">Hotline</p>
                <h5 className="text-lg font-bold text-slate-800">+65 6789 0123</h5>
                <p className="text-slate-500 text-sm">Open Daily: 9:00 AM - 9:00 PM</p>
              </div>
            </div>
            <button 
              onClick={() => window.open(WHATSAPP_LINK, '_blank')}
              className="mt-12 clay-btn-3d px-12 py-5 rounded-full text-white font-bold text-lg"
            >
              Send a Message
            </button>
          </motion.div>
        </section>

        {/* Newsletter Section */}
        <section className="max-w-7xl mx-auto px-4 md:px-10 mb-32">
          <div className="rounded-[40px] md:rounded-[48px] bg-gradient-to-br from-[#1e7a7a] to-[#125858] p-10 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative shadow-2xl">
            <div className="absolute -right-20 -bottom-20 opacity-10 rotate-12 pointer-events-none">
              <Mail className="size-[300px] text-white" />
            </div>
            <div className="max-w-xl text-center lg:text-left space-y-6 relative z-10">
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <Mail className="text-white size-10 md:size-12" />
                <Send className="text-white/50 size-8 md:size-10 animate-bounce" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white">Join the Inner Circle</h2>
              <p className="text-white/80 text-lg md:text-xl">Get early access to festive deals and cultural tour announcements before the public.</p>
            </div>
            <div className="w-full max-w-md relative z-10">
              <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md p-2 md:p-3 rounded-[32px] md:rounded-[36px] flex shadow-inner border border-white/20">
                <input 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent border-none focus:ring-0 text-white placeholder:text-white/60 px-4 md:px-6 font-bold" 
                  placeholder="Your email address" 
                  type="email"
                />
                <button type="submit" className="bg-white text-teal-800 px-6 md:px-10 py-3 md:py-4 rounded-[24px] md:rounded-[30px] font-black hover:bg-slate-50 transition-colors shadow-lg text-sm md:text-base">
                  Join Now
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Socials */}
      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 flex flex-col gap-4 md:gap-6 z-50">
        <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" className="size-12 md:size-14 clay-card flex items-center justify-center text-[#1877F2] hover:scale-110 transition-transform bg-white">
          <Facebook className="size-5 md:size-6" />
        </a>
        <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="size-12 md:size-14 clay-card flex items-center justify-center text-[#E4405F] hover:scale-110 transition-transform bg-white">
          <Instagram className="size-5 md:size-6" />
        </a>
        <a href={YOUTUBE_LINK} target="_blank" rel="noopener noreferrer" className="size-12 md:size-14 clay-card flex items-center justify-center text-[#FF0000] hover:scale-110 transition-transform bg-white">
          <Youtube className="size-5 md:size-6" />
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-[#0a3a3a] text-[#e0f2f2] py-20 md:py-24 px-4 md:px-10 relative overflow-hidden">
        <div className="absolute top-20 right-[15%] opacity-5 rotate-12 pointer-events-none">
          <Plane className="size-64" />
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20 relative z-10">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg">
                <PlaneTakeoff className="size-5" />
              </div>
              <span className="text-xl font-black tracking-tighter">SIRPY</span>
            </div>
            <p className="text-[#a8d6d6]/70 leading-relaxed font-medium">
              Redefining cultural luxury travel between Singapore and India. A heritage-first approach to aviation and tourism.
            </p>
            <div className="flex gap-4">
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="size-10 bg-[#125858] rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer shadow-lg">
                <Instagram className="size-4" />
              </a>
              <a href={YOUTUBE_LINK} target="_blank" rel="noopener noreferrer" className="size-10 bg-[#125858] rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer shadow-lg">
                <Youtube className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-black text-xl mb-8 text-white">Experience</h5>
            <ul className="space-y-4 text-[#a8d6d6]/60 font-bold">
              <li><a className="hover:text-white transition-colors" href="#">Sacred Tours</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Heritage Stays</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Festival Packs</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Corporate Jet</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-black text-xl mb-8 text-white">Popular Routes</h5>
            <ul className="space-y-4 text-[#a8d6d6]/60 font-bold">
              <li><a className="hover:text-white transition-colors" href="#">SIN to Trichy</a></li>
              <li><a className="hover:text-white transition-colors" href="#">SIN to Chennai</a></li>
              <li><a className="hover:text-white transition-colors" href="#">SIN to Madurai</a></li>
              <li><a className="hover:text-white transition-colors" href="#">SIN to Coimbatore</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-black text-xl mb-8 text-white">Legal</h5>
            <ul className="space-y-4 text-[#a8d6d6]/60 font-bold">
              <li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Carrier Rules</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-teal-900/50 flex flex-col md:flex-row justify-between items-center text-[#a8d6d6]/40 text-[10px] md:text-xs font-bold uppercase tracking-widest">
          <p>© 2024 SIRPY AIR TRAVELS PTE LTD. TA LICENSE: 03124</p>
          <p className="mt-4 md:mt-0">DESIGNED FOR CULTURAL LUXURY</p>
        </div>
      </footer>
    </div>
  );
}
