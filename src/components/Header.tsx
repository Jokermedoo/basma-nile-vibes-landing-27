
import React, { useEffect, useState } from 'react';
import { Sparkles, Heart, Star, Zap, Crown, Gem, Award, Compass, Rocket, Diamond } from 'lucide-react';

const Header = () => {
  const [currentText, setCurrentText] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, color: string}>>([]);

  const texts = [
    "✨ خدمات حجوزات وسهرات وخروجات رحلات نيلية VIP ✨",
    "🌟 تجارب استثنائية مع جروب VIB المميز 🌟",
    "👑 رفاهية وأناقة لا مثيل لها في كل التفاصيل 👑",
    "💎 لحظات سحرية وذكريات خالدة تستحق أن تُعاش 💎",
    "🎭 أجواء ساحرة ومتعة لا تنتهي مع أفضل الخدمات 🎭"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const generateParticles = () => {
      const colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe', '#00f2fe'];
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 6 + 3,
        color: colors[Math.floor(Math.random() * colors.length)]
      }));
      setParticles(newParticles);
    };

    generateParticles();
    const interval = setInterval(generateParticles, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden morph-bg">
      {/* Simplified Background */}
      <div className="absolute inset-0 cosmic-bg opacity-80"></div>
      
      {/* Reduced Floating Particles */}
      {particles.slice(0, 8).map((particle) => (
        <div
          key={particle.id}
          className="particle floating-element opacity-40"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: particle.color,
          }}
        />
      ))}
      
      {/* Simplified Interactive Shapes */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div 
          className="absolute w-[300px] h-[300px] bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-2xl floating-element"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            left: '10%',
            top: '20%'
          }}
        ></div>
        <div 
          className="absolute w-[250px] h-[250px] bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl floating-element"
          style={{
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`,
            right: '15%',
            bottom: '25%'
          }}
        ></div>
      </div>
      
      {/* Premium Main Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-7xl mx-auto">
        {/* Profile Section */}
        <div className="mb-10 stagger-item">
          <div className="relative inline-block group">
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
            <img 
              src="/lovable-uploads/77f71326-ee20-493c-aaac-b3f4a93e8c17.png" 
              alt="بسمة نبيل" 
              className="relative w-48 h-48 rounded-full mx-auto shadow-xl ring-2 ring-white/40 object-cover hover:scale-105 transition-all duration-500"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face';
              }}
            />
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center shadow-lg">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
              <Gem className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
        
        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-8 stagger-item dancing-script neon-text text-white">
          بسمة نبيل
        </h1>
        
        {/* Dynamic Subtitle */}
        <div className="h-16 mb-12 flex items-center justify-center stagger-item">
          <p className="text-xl md:text-2xl font-light gradient-text-advanced text-center leading-relaxed max-w-4xl transition-all duration-1000 rubik-font">
            {texts[currentText]}
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-16 stagger-item">
          <div className="glass-effect px-8 py-4 text-lg font-semibold magnetic rounded-2xl">
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-yellow-300" />
              <span className="gradient-text-advanced">جروب VIB المميز</span>
              <Zap className="w-6 h-6 text-blue-300" />
            </div>
          </div>
          
          <a 
            href="https://wa.me/201066544784" 
            target="_blank" 
            rel="noopener noreferrer"
            className="liquid-btn px-12 py-4 text-xl font-bold text-white shadow-xl hover-lift-intense group"
          >
            <span className="flex items-center gap-3">
              <Heart className="w-6 h-6 group-hover:animate-bounce" />
              تواصل واتساب
              <Star className="w-6 h-6" />
            </span>
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 stagger-item">
          {[
            { number: "500+", label: "عميل سعيد", icon: Heart, gradient: "from-pink-400 to-red-400" },
            { number: "50+", label: "رحلة نيلية", icon: Compass, gradient: "from-blue-400 to-teal-400" },
            { number: "100+", label: "سهرة مميزة", icon: Sparkles, gradient: "from-purple-400 to-blue-400" },
            { number: "24/7", label: "خدمة العملاء", icon: Rocket, gradient: "from-yellow-400 to-red-400" }
          ].map((stat, index) => (
            <div key={index} className="morph-card p-6 text-center hover-lift-intense magnetic group transition-all duration-300">
              <div className={`w-12 h-12 bg-gradient-to-r ${stat.gradient} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl md:text-3xl font-bold gradient-text-advanced mb-2 rubik-font">{stat.number}</div>
              <div className="text-sm text-white/90 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Showcase */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 stagger-item">
          {[
            { icon: Crown, title: "خدمة ملكية", desc: "تجربة VIP استثنائية", gradient: "from-yellow-400 to-orange-400" },
            { icon: Sparkles, title: "أجواء ساحرة", desc: "تفاصيل لا تُنسى", gradient: "from-pink-400 to-purple-400" },
            { icon: Award, title: "جودة عالمية", desc: "معايير عالمية للخدمة", gradient: "from-green-400 to-emerald-400" }
          ].map((feature, index) => (
            <div key={index} className="glass-effect p-6 rounded-2xl hover-lift-intense magnetic group">
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold gradient-text-advanced mb-2">{feature.title}</h3>
              <p className="text-white/80 text-base">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-medium gradient-text-advanced">اكتشف المزيد</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center glass-effect">
              <div className="w-1 h-3 bg-gradient-to-b from-white to-transparent rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
