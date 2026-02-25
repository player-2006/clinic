import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  ChevronRight, 
  Star, 
  Shield, 
  Award, 
  Users,
  Instagram,
  Facebook,
  Twitter,
  Calendar,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

// --- Components ---

const Navbar = ({ onBookClick }: { onBookClick: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-medical-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
            S
          </div>
          <span className={`font-display font-bold text-xl tracking-tight ${isScrolled ? 'text-medical-dark' : 'text-medical-dark md:text-white'}`}>
            Sri Crown <span className="text-medical-primary">Dental</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`font-medium transition-colors hover:text-medical-primary ${isScrolled ? 'text-slate-600' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={onBookClick}
            className="bg-medical-primary hover:bg-medical-primary/90 text-white px-6 py-2.5 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-medical-primary/20"
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-medical-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} className={isScrolled ? 'text-medical-dark' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden py-6 px-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-700 hover:text-medical-primary border-b border-slate-100 pb-2"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                onBookClick();
              }}
              className="bg-medical-primary text-white py-3 rounded-xl font-bold mt-2"
            >
              Book Appointment
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onBookClick }: { onBookClick: () => void }) => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Dental Clinic" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-medical-dark/90 via-medical-dark/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <span className="inline-block bg-medical-primary/20 backdrop-blur-sm border border-medical-primary/30 text-medical-primary px-4 py-1 rounded-full text-sm font-bold mb-6 tracking-wider uppercase">
            Excellence in Dentistry
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Your Smile, Our <span className="text-medical-primary">Masterpiece.</span>
          </h1>
          <p className="text-xl text-slate-200 mb-10 leading-relaxed">
            Experience premium dental care with cutting-edge technology and a patient-first approach. At Sri Crown, we don't just treat teeth; we craft confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onBookClick}
              className="bg-medical-primary hover:bg-medical-primary/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 group"
            >
              Book Appointment <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="#services"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg transition-all text-center"
            >
              Our Services
            </a>
          </div>

          <div className="mt-16 flex items-center gap-8 border-t border-white/10 pt-8">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                  alt="Patient" 
                  className="w-12 h-12 rounded-full border-2 border-medical-dark"
                />
              ))}
            </div>
            <div>
              <div className="flex text-yellow-400 mb-1">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
              </div>
              <p className="text-sm text-slate-300">Trusted by 5,000+ Happy Patients</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Info Cards */}
      <div className="hidden lg:block absolute bottom-12 right-12 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-card p-6 rounded-2xl w-72"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-medical-primary/10 rounded-xl flex items-center justify-center text-medical-primary">
              <Clock size={24} />
            </div>
            <div>
              <h4 className="font-bold">Opening Hours</h4>
              <p className="text-xs text-slate-500">Mon - Sat: 9AM - 8PM</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-medical-secondary/10 rounded-xl flex items-center justify-center text-medical-secondary">
              <Phone size={24} />
            </div>
            <div>
              <h4 className="font-bold">Emergency</h4>
              <p className="text-xs text-slate-500">+1 (234) 567-890</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '15+', icon: <Award className="text-medical-primary" /> },
    { label: 'Happy Patients', value: '10k+', icon: <Users className="text-medical-secondary" /> },
    { label: 'Expert Doctors', value: '12', icon: <Shield className="text-medical-primary" /> },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1629909615184-74f49af3b77a?auto=format&fit=crop&q=80&w=1000" 
              alt="Modern Dental Office" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-medical-primary text-white p-8 rounded-3xl shadow-xl hidden sm:block">
            <p className="text-4xl font-bold mb-1">99%</p>
            <p className="text-sm font-medium opacity-80 uppercase tracking-wider">Success Rate</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-medical-primary font-bold uppercase tracking-widest text-sm mb-4">About Our Clinic</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-medical-dark mb-6 leading-tight">
            Comprehensive Dental Care You Can Trust
          </h3>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            Sri Crown Dental Unit has been at the forefront of dental excellence for over 15 years. We combine artistic vision with clinical precision to provide our patients with the best possible outcomes.
          </p>

          <div className="space-y-4 mb-10">
            {['Advanced Laser Technology', 'Painless Treatment Procedures', 'Sterilized & Hygienic Environment', 'Personalized Patient Care'].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="text-medical-secondary" size={20} />
                <span className="font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="flex justify-center mb-2">{stat.icon}</div>
                <p className="text-2xl font-bold text-medical-dark">{stat.value}</p>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-tighter">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Dental Implants',
      desc: 'Permanent solutions for missing teeth using high-grade titanium implants.',
      icon: '🦷',
      color: 'bg-blue-50'
    },
    {
      title: 'Root Canal Therapy',
      desc: 'Advanced endodontic treatments to save your natural teeth with minimal discomfort.',
      icon: '🔬',
      color: 'bg-teal-50'
    },
    {
      title: 'Teeth Whitening',
      desc: 'Professional-grade whitening for a brighter, more confident smile in just one visit.',
      icon: '✨',
      color: 'bg-indigo-50'
    },
    {
      title: 'Smile Design',
      desc: 'Custom cosmetic transformations tailored to your facial features and personality.',
      icon: '🎨',
      color: 'bg-sky-50'
    },
    {
      title: 'Pediatric Dentistry',
      desc: 'Gentle and fun dental care specifically designed for our youngest patients.',
      icon: '🧸',
      color: 'bg-cyan-50'
    },
    {
      title: 'Orthodontics',
      desc: 'Modern alignment solutions including traditional braces and clear aligners.',
      icon: '📏',
      color: 'bg-slate-50'
    }
  ];

  return (
    <section id="services" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-medical-primary font-bold uppercase tracking-widest text-sm mb-4">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-medical-dark mb-6">Specialized Dental Solutions</h3>
          <p className="text-slate-600 text-lg">
            We offer a full spectrum of dental services, from routine checkups to complex surgical procedures, all under one roof.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold text-medical-dark mb-4">{service.title}</h4>
              <p className="text-slate-600 mb-6 leading-relaxed">{service.desc}</p>
              <button className="text-medical-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <ChevronRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1445527815219-ecbfec67492e?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
  ];

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-medical-primary font-bold uppercase tracking-widest text-sm mb-4">Our Clinic</h2>
            <h3 className="text-4xl font-bold text-medical-dark">Modern Environment for Your Comfort</h3>
          </div>
          <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-3 rounded-full font-bold transition-all">
            View All Photos
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative aspect-square rounded-3xl overflow-hidden cursor-pointer"
            >
              <img 
                src={img} 
                alt="Clinic Interior" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-medical-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-medical-primary shadow-lg">
                  <ChevronRight size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: 'Sarah Johnson',
      role: 'Business Owner',
      text: 'The best dental experience I’ve ever had. The staff is professional and the technology they use is truly impressive. My smile has never looked better!',
      rating: 5,
      img: 'https://i.pravatar.cc/150?img=32'
    },
    {
      name: 'Michael Chen',
      role: 'Software Engineer',
      text: 'I was always nervous about root canals, but Dr. Sharma made it completely painless. Highly recommend Sri Crown for anyone with dental anxiety.',
      rating: 5,
      img: 'https://i.pravatar.cc/150?img=11'
    },
    {
      name: 'Emily Davis',
      role: 'Teacher',
      text: 'Wonderful pediatric care. My kids actually look forward to their dental visits now. The environment is so welcoming and friendly.',
      rating: 5,
      img: 'https://i.pravatar.cc/150?img=44'
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-medical-dark text-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-medical-primary/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-medical-secondary/10 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-medical-primary font-bold uppercase tracking-widest text-sm mb-4">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">What Our Patients Say</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl"
            >
              <div className="flex text-yellow-400 mb-6">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-slate-300 italic mb-8 text-lg leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <img src={review.img} alt={review.name} className="w-14 h-14 rounded-full border-2 border-medical-primary" />
                <div>
                  <h4 className="font-bold text-white">{review.name}</h4>
                  <p className="text-sm text-slate-400">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-medical-primary font-bold uppercase tracking-widest text-sm mb-4">Contact Us</h2>
            <h3 className="text-4xl font-bold text-medical-dark mb-8">Get in Touch with Our Experts</h3>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-medical-primary/10 rounded-2xl flex items-center justify-center text-medical-primary shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-medical-dark mb-1">Our Location</h4>
                  <p className="text-slate-600">123 Dental Plaza, Medical District, City Center, 560001</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-medical-secondary/10 rounded-2xl flex items-center justify-center text-medical-secondary shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-medical-dark mb-1">Phone Number</h4>
                  <p className="text-slate-600">+1 (234) 567-890</p>
                  <p className="text-slate-600">+1 (987) 654-321</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-medical-primary/10 rounded-2xl flex items-center justify-center text-medical-primary shrink-0">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-medical-dark mb-1">Email Address</h4>
                  <p className="text-slate-600">info@sricrowndental.com</p>
                  <p className="text-slate-600">appointments@sricrowndental.com</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 relative">
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
                <div className="text-center">
                  <MapPin size={40} className="mx-auto mb-2 opacity-20" />
                  Interactive Map Integration
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 shadow-sm"
          >
            <h4 className="text-2xl font-bold text-medical-dark mb-8">Send us a Message</h4>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-medical-primary focus:ring-4 focus:ring-medical-primary/10 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                  <input type="tel" placeholder="+1 (234) 567-890" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-medical-primary focus:ring-4 focus:ring-medical-primary/10 outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
                <select className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-medical-primary focus:ring-4 focus:ring-medical-primary/10 outline-none transition-all appearance-none">
                  <option>General Inquiry</option>
                  <option>Appointment Request</option>
                  <option>Insurance Question</option>
                  <option>Feedback</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
                <textarea rows={4} placeholder="How can we help you?" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-medical-primary focus:ring-4 focus:ring-medical-primary/10 outline-none transition-all resize-none"></textarea>
              </div>
              <button className="w-full bg-medical-dark text-white py-5 rounded-2xl font-bold text-lg hover:bg-medical-dark/90 transition-all shadow-lg shadow-medical-dark/20">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-medical-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                S
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-medical-dark">
                Sri Crown <span className="text-medical-primary">Dental</span>
              </span>
            </div>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Providing premium dental care with a focus on patient comfort and clinical excellence. Your smile is our top priority.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-medical-primary hover:text-white hover:border-medical-primary transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-medical-dark mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Our Services', 'Patient Gallery', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-slate-500 hover:text-medical-primary transition-colors flex items-center gap-2">
                    <ChevronRight size={14} /> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-medical-dark mb-6">Our Services</h4>
            <ul className="space-y-4">
              {['Dental Implants', 'Root Canal', 'Teeth Whitening', 'Smile Design', 'Pediatric Care', 'Orthodontics'].map((link) => (
                <li key={link}>
                  <a href="#services" className="text-slate-500 hover:text-medical-primary transition-colors flex items-center gap-2">
                    <ChevronRight size={14} /> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-medical-dark mb-6">Newsletter</h4>
            <p className="text-slate-500 mb-6">Subscribe to get dental health tips and special offers.</p>
            <div className="relative">
              <input type="email" placeholder="Email Address" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-medical-primary outline-none" />
              <button className="absolute right-2 top-2 bottom-2 bg-medical-primary text-white px-4 rounded-xl font-bold">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2026 Sri Crown Dental Unit. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-medical-primary">Privacy Policy</a>
            <a href="#" className="hover:text-medical-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const AppointmentModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-medical-dark/60 backdrop-blur-sm"
      ></motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative bg-white w-full max-w-xl rounded-[2.5rem] overflow-hidden shadow-2xl"
      >
        {isSuccess ? (
          <div className="p-16 text-center">
            <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 size={48} />
            </div>
            <h3 className="text-3xl font-bold text-medical-dark mb-4">Request Received!</h3>
            <p className="text-slate-600 text-lg">
              We've received your appointment request. Our team will contact you shortly to confirm the time.
            </p>
          </div>
        ) : (
          <>
            <div className="bg-medical-primary p-8 text-white relative">
              <button onClick={onClose} className="absolute top-6 right-6 text-white/80 hover:text-white">
                <X size={24} />
              </button>
              <h3 className="text-3xl font-bold mb-2">Book Appointment</h3>
              <p className="text-white/80">Fill in the details below and we'll get back to you.</p>
            </div>
            <form className="p-10 space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Name</label>
                  <input required type="text" className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-medical-primary outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Phone Number</label>
                  <input required type="tel" className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-medical-primary outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Preferred Service</label>
                <select className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-medical-primary outline-none transition-all appearance-none">
                  <option>General Checkup</option>
                  <option>Dental Implants</option>
                  <option>Root Canal</option>
                  <option>Teeth Whitening</option>
                  <option>Smile Design</option>
                </select>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Preferred Date</label>
                  <input required type="date" className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-medical-primary outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Preferred Time</label>
                  <input required type="time" className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-medical-primary outline-none transition-all" />
                </div>
              </div>
              <button className="w-full bg-medical-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-medical-primary/90 transition-all shadow-lg shadow-medical-primary/20 flex items-center justify-center gap-2">
                <Calendar size={20} /> Request Appointment
              </button>
            </form>
          </>
        )}
      </motion.div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative">
      <Navbar onBookClick={() => setIsModalOpen(true)} />
      
      <main>
        <Hero onBookClick={() => setIsModalOpen(true)} />
        <About />
        <Services />
        
        {/* Trust Banner */}
        <section className="bg-medical-primary py-12">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center md:text-left">
              Ready for a brighter, healthier smile?
            </h3>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-medical-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all shadow-xl"
            >
              Book Your Visit Now
            </button>
          </div>
        </section>

        <Gallery />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      {/* Floating Action Button for Mobile */}
      <button 
        onClick={() => setIsModalOpen(true)}
        className="md:hidden fixed bottom-6 right-6 z-40 w-16 h-16 bg-medical-primary text-white rounded-full shadow-2xl flex items-center justify-center animate-bounce"
      >
        <Calendar size={28} />
      </button>

      <AnimatePresence>
        {isModalOpen && <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}
