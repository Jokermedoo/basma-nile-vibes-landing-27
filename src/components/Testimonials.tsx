
import React, { useState, useEffect } from 'react';
import { Star, Quote, Heart, Crown, Sparkles, Gem, Award, Users } from 'lucide-react';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const testimonials = [
    {
      name: "سارة أحمد",
      text: "تجربة رائعة مع بسمة! الرحلة النيلية كانت أكثر من رائعة والخدمة كانت في المستوى. شكراً لكِ على هذه الذكريات الجميلة التي ستبقى معي للأبد.",
      rating: 5,
      service: "رحلة نيلية",
      avatar: "👩🏻‍💼",
      color: "from-blue-400 to-cyan-400",
      bgColor: "from-blue-500/20 to-cyan-500/20"
    },
    {
      name: "محمد علي",
      text: "حجزت عندها للذكرى السنوية وكانت الليلة مثالية. الأجواء كانت رومانسية والخدمة احترافية جداً. بالتأكيد سأتعامل معها مرة أخرى وأنصح الجميع بها.",
      rating: 5,
      service: "سهرة خاصة",
      avatar: "👨🏻‍💼",
      color: "from-pink-400 to-purple-400",
      bgColor: "from-pink-500/20 to-purple-500/20"
    },
    {
      name: "نورا حسن",
      text: "الخدمة المميزة والاهتمام بأصغر التفاصيل خلى التجربة لا تُنسى. جروب VIB فعلاً مختلف عن أي حد تاني! تستحق أكثر من 5 نجوم.",
      rating: 5,
      service: "حجز VIP",
      avatar: "👩🏻‍🎨",
      color: "from-yellow-400 to-orange-400",
      bgColor: "from-yellow-500/20 to-orange-500/20"
    },
    {
      name: "أحمد محمود",
      text: "خدمة عملاء استثنائية وتنظيم مثالي. كل شيء كان مرتب بعناية فائقة والنتيجة كانت أفضل من المتوقع. شكراً بسمة على الجهد الرائع.",
      rating: 5,
      service: "تنظيم فعاليات",
      avatar: "👨🏻‍🎓",
      color: "from-green-400 to-emerald-400",
      bgColor: "from-green-500/20 to-emerald-500/20"
    }
  ];

  const stats = [
    { icon: Star, value: "5.0", label: "تقييم مثالي", color: "text-yellow-400" },
    { icon: Users, value: "500+", label: "عميل سعيد", color: "text-pink-400" },
    { icon: Award, value: "100%", label: "رضا العملاء", color: "text-purple-400" },
    { icon: Crown, value: "VIP", label: "خدمة ملكية", color: "text-blue-400" }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 morph-bg"></div>
      <div className="absolute inset-0 cosmic-bg"></div>
      
      {/* Dynamic Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute floating-element"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${10 + Math.random() * 20}px`,
              height: `${10 + Math.random() * 20}px`,
              background: `linear-gradient(45deg, 
                hsla(${Math.random() * 360}, 70%, 60%, 0.3), 
                hsla(${Math.random() * 360}, 70%, 60%, 0.1))`,
              borderRadius: '50%',
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20 scroll-reveal" data-index="0">
          <div className="inline-block mb-6 morph-card px-8 py-4 magnetic">
            <span className="gradient-text-advanced font-bold text-lg flex items-center gap-3">
              <Heart className="w-5 h-5 text-pink-400" />
              آراء عملائنا
              <Sparkles className="w-5 h-5 text-yellow-400" />
            </span>
          </div>
          <h2 className="text-6xl md:text-8xl font-bold text-white mb-8 dancing-script neon-text">
            قصص نجاح حقيقية
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            اكتشفي ما يقوله عملاؤنا عن تجاربهم المميزة معنا وكيف غيّرنا حياتهم للأفضل
          </p>
        </div>

        {/* Interactive Testimonials Carousel */}
        <div className="mb-20 scroll-reveal" data-index="1">
          <div className="max-w-5xl mx-auto">
            {/* Main Testimonial Display */}
            <div className="relative mb-12">
              <div className="morph-card p-12 text-center hover-lift-intense">
                <div className="mb-8">
                  <div className="text-8xl mb-4">
                    {testimonials[activeTestimonial].avatar}
                  </div>
                  <Quote className="w-12 h-12 text-white/60 mx-auto mb-6" />
                </div>
                
                <blockquote className="text-2xl md:text-3xl text-white leading-relaxed mb-8 font-light italic">
                  "{testimonials[activeTestimonial].text}"
                </blockquote>
                
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-8 h-8 text-yellow-400 fill-current animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                  ))}
                </div>
                
                <div className="border-t border-white/20 pt-6">
                  <h4 className="font-bold text-white text-2xl mb-2">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className={`bg-gradient-to-r ${testimonials[activeTestimonial].color} bg-clip-text text-transparent font-semibold text-lg`}>
                    {testimonials[activeTestimonial].service}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Testimonial Navigation */}
            <div className="flex justify-center gap-4 mb-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === activeTestimonial 
                      ? 'bg-white scale-125 shadow-lg' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  onClick={() => {
                    setActiveTestimonial(index);
                    setIsAutoPlaying(false);
                  }}
                />
              ))}
            </div>

            {/* Auto-play Toggle */}
            <div className="text-center">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="morph-card px-6 py-3 text-white font-semibold magnetic hover-lift-intense"
              >
                {isAutoPlaying ? '⏸️ إيقاف التشغيل التلقائي' : '▶️ تشغيل تلقائي'}
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`scroll-reveal morph-card p-6 hover-lift-intense magnetic group cursor-pointer ${visibleItems.includes(index + 2) ? 'revealed' : ''}`}
              data-index={index + 2}
              onClick={() => setActiveTestimonial(index)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-4 text-center">
                  {testimonial.avatar}
                </div>
                
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-white/90 text-sm mb-4 line-clamp-3 group-hover:text-white">
                  "{testimonial.text.substring(0, 100)}..."
                </p>
                
                <div className="border-t border-white/20 pt-4">
                  <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                  <p className="text-pink-300 text-sm">{testimonial.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="scroll-reveal" data-index="6">
          <div className="morph-card p-12">
            <h3 className="text-4xl font-bold text-center text-white mb-12 dancing-script neon-text">
              إحصائيات مميزة
            </h3>
            
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group magnetic hover-lift-intense">
                  <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-xl">
                    <stat.icon className={`w-10 h-10 ${stat.color}`} />
                  </div>
                  <div className="text-4xl font-bold gradient-text-advanced mb-2">{stat.value}</div>
                  <div className="text-white/80 group-hover:text-white transition-colors duration-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 scroll-reveal" data-index="7">
          <div className="morph-card p-12 max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold gradient-text-advanced mb-6 dancing-script">
              🌟 جروب VIB المميز 🌟
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              انضمي إلى مجموعتنا المميزة واستمتعي بأفضل العروض والخدمات الحصرية مع تجربة VIP لا تُنسى
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="morph-card px-6 py-3 text-white font-semibold magnetic">
                <div className="flex items-center gap-2">
                  <Crown className="w-5 h-5 text-yellow-400" />
                  <span>خدمة شخصية مميزة</span>
                </div>
              </div>
              <div className="morph-card px-6 py-3 text-white font-semibold magnetic">
                <div className="flex items-center gap-2">
                  <Gem className="w-5 h-5 text-pink-400" />
                  <span>عروض حصرية</span>
                </div>
              </div>
              <div className="morph-card px-6 py-3 text-white font-semibold magnetic">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-400" />
                  <span>جودة عالية</span>
                </div>
              </div>
            </div>
            
            <a 
              href="https://wa.me/201066544784" 
              target="_blank" 
              rel="noopener noreferrer"
              className="liquid-btn px-12 py-6 text-xl font-bold text-white shadow-2xl hover-lift-intense group"
            >
              <span className="flex items-center gap-3">
                <Heart className="w-6 h-6 group-hover:animate-bounce" />
                انضمي الآن
                <Sparkles className="w-6 h-6 group-hover:animate-spin" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
