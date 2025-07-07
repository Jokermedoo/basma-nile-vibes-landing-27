
import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, Star, Clock, Phone, Sparkles, Crown, Gift, Camera, Heart, Zap, Gem, Award, Anchor, Music, PartyPopper, Compass, Rocket, Diamond } from 'lucide-react';

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const services = [
    {
      icon: Anchor,
      title: "🚢 حجوزات مراكب نيلية VIP",
      description: "استمتعي برحلات نيلية فاخرة على أجمل مراكب القاهرة مع خدمة 5 نجوم وإطلالات ساحرة على النيل مع عشاء رومانسي وأجواء لا تُنسى",
      features: ["مراكب فاخرة مجهزة بالكامل", "عشاء فاخر وبوفيه مفتوح", "موسيقى حية ودي جي محترف", "خدمة شخصية مميزة 24/7", "تصوير احترافي مجاني", "إطلالات بانورامية على النيل"],
      gradient: "from-blue-400 via-cyan-400 to-teal-400",
      bgGradient: "from-blue-50 via-cyan-50 to-teal-50",
      shadowColor: "shadow-blue-400/50",
      hoverGradient: "from-blue-500 via-cyan-500 to-teal-500"
    },
    {
      icon: PartyPopper,
      title: "🎉 سهرات وديسكو ونايت كلاب",
      description: "أحلى السهرات في أفخم الأماكن مع أجواء رائعة وموسيقى صاخبة ومشروبات مميزة وأجواء لا تُنسى مع الأصدقاء في أروع النايت كلابز",
      features: ["أفخم النايت كلابز بالقاهرة", "دي جي عالمي ومحلي مشهور", "كوكتيلات ومشروبات مميزة", "أجواء حماسية ومثيرة", "طاولات VIP حصرية", "دخول مجاني لأعضاء VIB"],
      gradient: "from-purple-400 via-pink-400 to-red-400",
      bgGradient: "from-purple-50 via-pink-50 to-red-50",
      shadowColor: "shadow-purple-400/50",
      hoverGradient: "from-purple-500 via-pink-500 to-red-500"
    },
    {
      icon: Music,
      title: "🎵 حفلات ومباريات ومهرجانات",
      description: "حجوزات حفلات النجوم ومشاهدة المباريات المهمة في أفضل الأماكن مع جو حماسي ومشاركة اللحظات المميزة والاستمتاع بأجمل الفعاليات",
      features: ["حفلات النجوم والمشاهير", "مشاهدة المباريات المهمة", "مهرجانات وفعاليات خاصة", "أماكن مميزة بإطلالات رائعة", "تجربة جماعية مثيرة", "حجز مسبق مضمون"],
      gradient: "from-yellow-400 via-orange-400 to-red-400",
      bgGradient: "from-yellow-50 via-orange-50 to-red-50",
      shadowColor: "shadow-yellow-400/50",
      hoverGradient: "from-yellow-500 via-orange-500 to-red-500"
    }
  ];

  const features = [
    { icon: Crown, title: "خدمة ملكية", desc: "تجربة VIP استثنائية", color: "text-yellow-500", bg: "from-yellow-400 to-orange-400" },
    { icon: Sparkles, title: "أجواء ساحرة", desc: "تفاصيل لا تُنسى", color: "text-pink-500", bg: "from-pink-400 to-purple-400" },
    { icon: Gift, title: "عروض حصرية", desc: "أسعار مميزة للأعضاء", color: "text-purple-500", bg: "from-purple-400 to-indigo-400" },
    { icon: Camera, title: "تصوير مجاني", desc: "ذكريات خالدة", color: "text-blue-500", bg: "from-blue-400 to-cyan-400" },
    { icon: Award, title: "جودة عالمية", desc: "معايير عالمية للخدمة", color: "text-green-500", bg: "from-green-400 to-emerald-400" },
    { icon: Zap, title: "استجابة فورية", desc: "خدمة عملاء 24/7", color: "text-orange-500", bg: "from-orange-400 to-red-400" }
  ];

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
    <section className="py-20 relative overflow-hidden" id="services">
      {/* Simplified Background */}
      <div className="absolute inset-0 morph-bg opacity-10"></div>
      
      {/* Reduced Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute floating-element opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              background: `linear-gradient(45deg, hsl(${Math.random() * 360}, 70%, 60%), hsl(${Math.random() * 360}, 70%, 60%))`,
              borderRadius: '50%',
              filter: 'blur(10px)',
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal revealed" data-index="0">
          <div className="inline-block mb-6 glass-effect px-8 py-4 magnetic rounded-2xl">
            <span className="gradient-text-advanced font-bold text-lg flex items-center gap-3">
              <Diamond className="w-6 h-6" />
              ✨ خدماتنا المميزة للترفيه والمتعة ✨
              <Gem className="w-6 h-6" />
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 dancing-script neon-text text-gray-800">
            🎉 المتعة والإثارة 🎉
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed rubik-font">
            احجزي معانا أحلى السهرات والرحلات النيلية وشاهدي أهم المباريات والحفلات مع جروب VIB المميز - متعة بلا حدود وذكريات لا تُنسى
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`scroll-reveal group relative overflow-hidden ${visibleItems.includes(index + 1) ? 'revealed' : ''}`}
              data-index={index + 1}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="morph-card p-8 h-full hover-lift-intense magnetic transition-all duration-500">
                {/* Simplified Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-all duration-300 ${service.shadowColor} shadow-lg`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center group-hover:text-gray-900 gradient-text-advanced rubik-font">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 text-center leading-relaxed text-base group-hover:text-gray-800">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-3">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700 group-hover:text-gray-900 text-sm">
                        <div className={`w-6 h-6 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-md`}>
                          <Star className="w-3 h-3 text-white fill-current" />
                        </div>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Number Badge */}
                  <div className={`absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg ${hoveredService === index ? 'animate-bounce' : ''}`}>
                    {index + 1}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Showcase */}
        <div className="scroll-reveal morph-bg rounded-2xl p-12 shadow-2xl mb-16" data-index="4">
          <h3 className="text-4xl font-bold text-center text-white mb-12 dancing-script neon-text">
            ⭐ لماذا جروب VIB الأفضل؟ ⭐
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center group magnetic hover-lift-intense transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-white text-lg mb-2 group-hover:text-yellow-300 transition-colors duration-300">{feature.title}</h4>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center scroll-reveal" data-index="5">
          <div className="glass-effect p-12 max-w-4xl mx-auto rounded-2xl">
            <h3 className="text-3xl md:text-4xl font-bold gradient-text-advanced mb-6 dancing-script">🎊 جاهزة للمتعة والإثارة؟ 🎊</h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              انضمي لجروب VIB واستمتعي بأروع السهرات والرحلات النيلية والحفلات مع تجربة VIP لا تُنسى
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <a 
                href="https://wa.me/201066544784" 
                target="_blank" 
                rel="noopener noreferrer"
                className="liquid-btn px-12 py-6 text-xl font-bold text-white shadow-xl hover-lift-intense group"
              >
                <span className="flex items-center gap-3">
                  <Heart className="w-6 h-6 group-hover:animate-bounce" />
                  احجزي الآن واتساب
                  <Sparkles className="w-6 h-6" />
                </span>
              </a>
              
              <div className="glass-effect px-8 py-4 magnetic rounded-2xl">
                <span className="gradient-text-advanced font-bold text-lg">
                  🌟 جروب VIB المميز 🌟
                </span>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="glass-effect p-4 magnetic hover-lift-intense rounded-xl transition-all duration-300">
                <Anchor className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-700">مراكب نيلية</p>
              </div>
              <div className="glass-effect p-4 magnetic hover-lift-intense rounded-xl transition-all duration-300">
                <PartyPopper className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-700">سهرات وديسكو</p>
              </div>
              <div className="glass-effect p-4 magnetic hover-lift-intense rounded-xl transition-all duration-300">
                <Music className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-700">حفلات ومباريات</p>
              </div>
              <div className="glass-effect p-4 magnetic hover-lift-intense rounded-xl transition-all duration-300">
                <Crown className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-700">خدمة VIP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
