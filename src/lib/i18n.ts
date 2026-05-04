export type Language = "es" | "en";

export const translations = {
  nav: {
    proyectos: { es: "Proyectos", en: "Projects" },
    interiores: { es: "Interiores", en: "Interiors" },
    servicios: { es: "Servicios", en: "Services" },
    nosotros: { es: "Nosotros", en: "About" },
    contacto: { es: "Contacto", en: "Contact" },
    faq: { es: "FAQ", en: "FAQ" },
  },
  hero: {
    badge: { es: "Arquitectura & Construcción", en: "Architecture & Construction" },
    title: {
      es: "Construimos tu refugio cerca del mar",
      en: "Building your seaside sanctuary",
    },
    subtitle: {
      es: "Diseño arquitectónico y construcción de casas exclusivas en entornos costeros de Lima y todo el Perú. Transformamos tu visión en espacios que respiran tranquilidad y sofisticación.",
      en: "Architectural design and construction of exclusive homes in coastal settings across Lima and Peru. We transform your vision into spaces that breathe tranquility and sophistication.",
    },
    cta: {
      es: "Ver Proyectos",
      en: "View Projects",
    },
    scrollHint: {
      es: "Descubre más",
      en: "Discover more",
    },
  },
  projects: {
    sectionTag: { es: "Nuestros Proyectos", en: "Our Projects" },
    sectionTitle: {
      es: "Obras que inspiran, espacios que perduran",
      en: "Works that inspire, spaces that endure",
    },
    sectionDesc: {
      es: "Cada proyecto refleja nuestra pasión por la arquitectura costera y el compromiso con la excelencia constructiva. Desde casas de playa hasta residencias urbanas con vista al mar.",
      en: "Each project reflects our passion for coastal architecture and our commitment to construction excellence. From beach houses to urban residences with ocean views.",
    },
    projects: [
      {
        tag: { es: "Arquitectura", en: "Architecture" },
        title: { es: "Balcones de Huayruro", en: "Balcones de Huayruro" },
        description: {
          es: "Estructura de balcones modernos en madera que se integra con el paisaje natural. Diseño que combina la calidez de los materiales naturales con líneas contemporáneas, creando espacios perfectos para disfrutar del entorno.",
          en: "Modern wooden balcony structure that blends with the natural landscape. A design combining the warmth of natural materials with contemporary lines, creating perfect spaces to enjoy the surroundings.",
        },
        whatsappKey: "balcones",
      },
      {
        tag: { es: "Natural", en: "Nature" },
        title: { es: "Waltako al Natural", en: "Waltako al Natural" },
        description: {
          es: "Proyecto costero que respeta y realza el entorno natural. Espacios abiertos que conectan directamente con el paisaje marino, utilizando materiales locales y técnicas sostenibles para una experiencia auténtica.",
          en: "A coastal project that respects and enhances the natural environment. Open spaces that connect directly with the seascape, using local materials and sustainable techniques for an authentic experience.",
        },
        whatsappKey: "waltako",
      },
      {
        tag: { es: "Terraza", en: "Terrace" },
        title: { es: "Terraza de Palos", en: "Terraza de Palos" },
        description: {
          es: "Terraza con techado de palos que evoca la tradición constructora peruana. Un espacio rústico y sofisticado a la vez, diseñado para la convivencia al aire libre con vista al paisaje costero.",
          en: "A pole-roofed terrace evoking Peruvian building tradition. A rustic yet sophisticated space designed for outdoor living with coastal landscape views.",
        },
        whatsappKey: "terraza",
      },
    ],
    viewProject: { es: "Ver Detalle", en: "View Details" },
  },
  interiors: {
    sectionTag: { es: "Espacios Interiores", en: "Interior Spaces" },
    sectionTitle: {
      es: "Detalles que hacen la diferencia",
      en: "Details that make the difference",
    },
    sectionDesc: {
      es: "Cada interior CMC está pensado para ofrecer confort, funcionalidad y una conexión armónica con el entorno costero. Acabados premium y espacios que inspiran.",
      en: "Every CMC interior is designed to offer comfort, functionality, and a harmonious connection with the coastal environment. Premium finishes and spaces that inspire.",
    },
    items: [
      {
        title: { es: "Salas de Estar", en: "Living Rooms" },
        description: {
          es: "Amplios espacios abiertos con grandes ventanales que enmarcan el paisaje costero. Materiales nobles como madera tropical, piedra natural y acero inoxidable crean ambientes sofisticados y acogedores.",
          en: "Open spaces with large windows framing the coastal landscape. Noble materials like tropical wood, natural stone, and stainless steel create sophisticated and welcoming environments.",
        },
        image: "/images/interior-1.jpg",
      },
      {
        title: { es: "Cocinas & Zonas Sociales", en: "Kitchens & Social Areas" },
        description: {
          es: "Cocinas integradas con isla central, electrodomésticos de primera línea y acabados en cuarzo o mármol. Diseñadas para ser el corazón del hogar donde se crean los mejores momentos en familia.",
          en: "Integrated kitchens with central island, top-of-the-line appliances, and quartz or marble finishes. Designed to be the heart of the home where the best family moments are created.",
        },
        image: "/images/interior-2.jpg",
      },
    ],
  },
  services: {
    sectionTag: { es: "Nuestros Servicios", en: "Our Services" },
    sectionTitle: {
      es: "Soluciones integrales para tu proyecto",
      en: "Comprehensive solutions for your project",
    },
    sectionDesc: {
      es: "Ofrecemos un enfoque completo que va desde la concepción del diseño hasta la entrega final de tu hogar. Cada etapa es gestionada con precisión y profesionalismo.",
      en: "We offer a complete approach from design conception to the final delivery of your home. Every stage is managed with precision and professionalism.",
    },
    services: [
      {
        title: { es: "Diseño Arquitectónico", en: "Architectural Design" },
        description: {
          es: "Creamos proyectos arquitectónicos personalizados que se integran con el entorno costero. Nuestros diseños priorizan la luminosidad, la ventilación natural y la conexión visual con el paisaje marino. Utilizamos tecnología BIM y renderizado 3D para que visualices tu futuro hogar antes de construir.",
          en: "We create custom architectural projects that integrate with the coastal environment. Our designs prioritize luminosity, natural ventilation, and visual connection with the seascape. We use BIM technology and 3D rendering so you can visualize your future home before building.",
        },
        icon: "ruler",
      },
      {
        title: { es: "Construcción Integral", en: "Full Construction" },
        description: {
          es: "Gestionamos la construcción completa de tu vivienda con materiales de primera calidad y técnicas adaptadas al clima costero peruano. Nuestro equipo de obra garantiza plazos cumplidos, acabados impecables y una supervisión rigurosa en cada fase del proceso constructivo.",
          en: "We manage the complete construction of your home with top-quality materials and techniques adapted to the Peruvian coastal climate. Our site team guarantees timely delivery, impeccable finishes, and rigorous supervision at every phase of the construction process.",
        },
        icon: "hard-hat",
      },
      {
        title: { es: "Gestión de Proyectos", en: "Project Management" },
        description: {
          es: "Coordinamos todos los aspectos de tu proyecto: permisos municipales, presupuestos, cronogramas y control de calidad. Te mantenemos informado en cada etapa con reportes detallados y transparencia total para que tu experiencia sea libre de preocupaciones.",
          en: "We coordinate every aspect of your project: municipal permits, budgets, timelines, and quality control. We keep you informed at every stage with detailed reports and full transparency so your experience is worry-free.",
        },
        icon: "clipboard-check",
      },
    ],
  },
  testimonials: {
    sectionTag: { es: "Testimonios", en: "Testimonials" },
    sectionTitle: {
      es: "Historias reales, clientes felices",
      en: "Real stories, happy clients",
    },
    sectionDesc: {
      es: "Descubre cómo nuestras construcciones han transformado la vida de familias peruanas. Desde bodas inolvidables hasta exitosos negocios en Airbnb, cada casa CMC es el inicio de una gran historia.",
      en: "Discover how our constructions have transformed the lives of Peruvian families. From unforgettable weddings to successful Airbnb businesses, every CMC home is the start of a great story.",
    },
    items: [
      {
        name: "Carlos & María Fernanda",
        role: { es: "Propietarios Casa Playa, Asia", en: "Beach House Owners, Asia" },
        text: {
          es: "Construimos nuestra casa de playa con CMC y fue la mejor decisión de nuestra vida. Celebramos nuestra boda en el jardín frente al mar con 120 invitados. La casa fue el escenario perfecto: la terraza, la piscina, la vista al océano al atardecer. Todos nuestros invitados quedaron encantados. CMC no solo construyó una casa, construyó el lugar donde empezamos nuestra familia.",
          en: "We built our beach house with CMC and it was the best decision of our lives. We celebrated our wedding in the oceanfront garden with 120 guests. The house was the perfect setting: the terrace, the pool, the ocean view at sunset. All our guests were delighted. CMC didn't just build a house, they built the place where we started our family.",
        },
        rating: 5,
        highlight: { es: "Boda soñada", en: "Dream wedding" },
      },
      {
        name: "Lucía Torres",
        role: { es: "Inversionista Airbnb, Punta Sal", en: "Airbnb Investor, Punta Sal" },
        text: {
          es: "Mi casa CMC en Punta Sal genera más de $3,000 al mes en Airbnb con ocupación del 85%. La diseñaron pensando en la experiencia del huésped: espacios abiertos, cocina gourmet, piscina con vista al mar. En temporada alta, tengo reservas hasta con 3 meses de anticipación. CMC entendió mi visión de negocio y la materializaron a la perfección.",
          en: "My CMC house in Punta Sal generates over $3,000/month on Airbnb with 85% occupancy. They designed it with the guest experience in mind: open spaces, gourmet kitchen, pool with ocean view. In high season, I have bookings up to 3 months in advance. CMC understood my business vision and brought it to life perfectly.",
        },
        rating: 5,
        highlight: { es: "$3,000/mes en Airbnb", en: "$3,000/mo on Airbnb" },
      },
      {
        name: "Familia Delgado Roncagliolo",
        role: { es: "Propietarios Villa, Mancora", en: "Villa Owners, Mancora" },
        text: {
          es: "Buscábamos un espacio para reunir a toda la familia cada verano: abuelos, hijos, nietos. CMC diseñó una villa con 5 dormitorios, zona de juegos, quincho con parrilla y acceso directo a la playa. Las Navidades y cumpleaños aquí son mágicos. Los niños corren libres por el jardín mientras los abuelos disfrutan de la terraza. ¡Es nuestro paraíso familiar!",
          en: "We were looking for a space to bring the whole family together every summer: grandparents, children, grandchildren. CMC designed a villa with 5 bedrooms, a play area, BBQ area, and direct beach access. Christmas and birthdays here are magical. The kids run free in the garden while grandparents enjoy the terrace. It's our family paradise!",
        },
        rating: 5,
        highlight: { es: "Reuniones familiares perfectas", en: "Perfect family gatherings" },
      },
      {
        name: "Diego & Andrea",
        role: { es: "Hosts Superhost, Lima Costa", en: "Superhost, Lima Coast" },
        text: {
          es: "Con dos propiedades CMC en Miraflores, alcanzamos el estatus Superhost en solo 6 meses. El diseño arquitectónico de CMC es el que nuestros huéspedes más elogian en las reseñas: la combinación de concreto, madera y vidrio con vista al mar es espectacular. Cada huésped que se va quiere volver. La plusvalía ya subió un 20% en un año.",
          en: "With two CMC properties in Miraflores, we reached Superhost status in just 6 months. CMC's architectural design is what our guests praise most in reviews: the combination of concrete, wood, and glass with ocean views is stunning. Every guest who leaves wants to return. Property value has already risen 20% in a year.",
        },
        rating: 5,
        highlight: { es: "Superhost en 6 meses", en: "Superhost in 6 months" },
      },
      {
        name: "Roberto & Carmen",
        role: { es: "Casa de Retiro, Paracas", en: "Retirement Home, Paracas" },
        text: {
          es: "Después de jubilarnos, queríamos un refugio tranquilo junto al mar. CMC construyó nuestra casa soñada en Paracas: luminosa, con amplios ventanales, jardín de cactus y una terraza donde tomamos café cada mañana viendo las olas. La calidad de los materiales es impecable y el equipo fue extraordinariamente profesional. Nuestros hijos ya quieren copiar el diseño.",
          en: "After retiring, we wanted a peaceful retreat by the sea. CMC built our dream home in Paracas: bright, with large windows, a cactus garden, and a terrace where we have coffee every morning watching the waves. The quality of materials is impeccable and the team was extraordinarily professional. Our children already want to copy the design.",
        },
        rating: 5,
        highlight: { es: "Retiro ideal", en: "Ideal retirement" },
      },
    ],
  },
  faq: {
    sectionTag: { es: "Preguntas Frecuentes", en: "Frequently Asked Questions" },
    sectionTitle: {
      es: "Todo lo que necesitas saber",
      en: "Everything you need to know",
    },
    sectionDesc: {
      es: "Resolvemos tus dudas más comunes sobre el proceso de diseño y construcción de tu hogar costero.",
      en: "We answer your most common questions about the design and construction process of your coastal home.",
    },
    items: [
      {
        question: {
          es: "¿Cuánto tiempo toma construir una casa de playa en Perú?",
          en: "How long does it take to build a beach house in Peru?",
        },
        answer: {
          es: "El tiempo de construcción varía según la complejidad del proyecto. Una casa de playa estándar de 200m² toma entre 6 y 8 meses desde la obtención de permisos. Las villas de lujo pueden requerir entre 10 y 14 meses. En CMC, trabajamos con cronogramas detallados y garantizamos fechas de entrega cumplidas, manteniéndote informado en cada etapa con reportes semanales de avance.",
          en: "Construction time varies depending on project complexity. A standard 200m² beach house takes 6 to 8 months from permit approval. Luxury villas may require 10 to 14 months. At CMC, we work with detailed schedules and guarantee on-time delivery, keeping you informed at every stage with weekly progress reports.",
        },
      },
      {
        question: {
          es: "¿Cuál es el presupuesto aproximado para construir una casa en la costa?",
          en: "What is the estimated budget for building a house on the coast?",
        },
        answer: {
          es: "El costo por metro cuadrado construido en la costa peruana oscila entre $800 y $1,800 USD, dependiendo del nivel de acabados y la ubicación. Una casa de 200m² puede oscilar entre $160,000 y $360,000 USD. Ofrecemos consultorías personalizadas para definir el presupuesto exacto según tus necesidades y ajustamos el diseño para optimizar cada sol invertido.",
          en: "The cost per built square meter on the Peruvian coast ranges from $800 to $1,800 USD, depending on finish level and location. A 200m² house can range from $160,000 to $360,000 USD. We offer personalized consultations to define the exact budget based on your needs and adjust the design to optimize every invested sol.",
        },
      },
      {
        question: {
          es: "¿Qué garantías ofrece CMC sobre la construcción?",
          en: "What warranties does CMC offer on construction?",
        },
        answer: {
          es: "CMC ofrece una garantía estructural de 10 años sobre todos nuestros proyectos, la máxima del mercado peruano. Además, proporcionamos un año de garantía por defectos de acabados, un manual de mantenimiento detallado, y soporte técnico permanente. Utilizamos materiales certificados y técnicas constructivas que superan los estándares de la norma E.060 de Perú.",
          en: "CMC offers a 10-year structural warranty on all our projects, the highest in the Peruvian market. Additionally, we provide a one-year warranty on finish defects, a detailed maintenance manual, and permanent technical support. We use certified materials and construction techniques that exceed Peru's E.060 standard requirements.",
        },
      },
      {
        question: {
          es: "¿Puedo alquilar mi casa CMC en Airbnb o Booking?",
          en: "Can I rent my CMC house on Airbnb or Booking?",
        },
        answer: {
          es: "¡Absolutamente! De hecho, muchas de nuestras casas están diseñadas con funcionalidades específicas para alquiler vacacional: entradas independientes, zonas de lavandería, cocinas equipadas, y espacios exteriores que los huéspedes adoran. Nuestros clientes reportan retornos de inversión del 12% al 18% anual a través de plataformas como Airbnb y Booking.com.",
          en: "Absolutely! In fact, many of our houses are designed with specific features for vacation rental: independent entrances, laundry areas, equipped kitchens, and outdoor spaces that guests love. Our clients report investment returns of 12% to 18% annually through platforms like Airbnb and Booking.com.",
        },
      },
      {
        question: {
          es: "¿CMC gestiona los permisos y trámites municipales?",
          en: "Does CMC manage permits and municipal procedures?",
        },
        answer: {
          es: "Sí, nuestro servicio de Gestión de Proyectos incluye la tramitación completa de todos los permisos: licencia de obra, certificado de parámetros urbanísticos, recepción de obra, y declaratoria de fábrica. Tenemos un equipo legal y técnico especializado que conoce las normativas de cada distrito costero del Perú, desde Lima hasta Tumbes, ahorrándote meses de trámites burocráticos.",
          en: "Yes, our Project Management service includes complete processing of all permits: construction license, urban parameter certificate, work reception, and factory declaration. We have a specialized legal and technical team that knows the regulations of each coastal district in Peru, from Lima to Tumbes, saving you months of bureaucratic procedures.",
        },
      },
    ],
  },
  whatsapp: {
    tooltip: { es: "¿Necesitas ayuda?", en: "Need help?" },
    tooltipDesc: {
      es: "Escríbenos por WhatsApp",
      en: "Message us on WhatsApp",
    },
    projectName: { es: "Proyecto", en: "Project" },
    messages: {
      balcones: {
        es: "Hola CMC, estoy interesado/a en el proyecto Balcones de Huayruro. Me gustaría recibir más información sobre el diseño, materiales y disponibilidad.",
        en: "Hi CMC, I'm interested in the Balcones de Huayruro project. I would like to receive more information about the design, materials, and availability.",
      },
      waltako: {
        es: "Hola CMC, me interesa conocer más sobre el proyecto Waltako al Natural. ¿Podrían enviarme más detalles y agendar una visita?",
        en: "Hi CMC, I'm interested in learning more about the Waltako al Natural project. Could you send me more details and schedule a visit?",
      },
      terraza: {
        es: "Hola CMC, quiero información sobre el proyecto Terraza de Palos. Estoy buscando un espacio con terraza al aire libre. ¿Cuáles son las opciones disponibles?",
        en: "Hi CMC, I want information about the Terraza de Palos project. I'm looking for an outdoor terrace space. What options are available?",
      },
      general: {
        es: "Hola CMC, quiero construir mi casa en la costa del Perú. ¿Podrían asesorarme sobre el proceso y agendar una consulta gratuita?",
        en: "Hi CMC, I want to build my house on the coast of Peru. Could you advise me on the process and schedule a free consultation?",
      },
    },
    projectLabels: {
      balcones: { es: "Balcones de Huayruro", en: "Balcones de Huayruro" },
      waltako: { es: "Waltako al Natural", en: "Waltako al Natural" },
      terraza: { es: "Terraza de Palos", en: "Terraza de Palos" },
      general: { es: "Consulta General", en: "General Inquiry" },
    },
  },
  info: {
    sectionTag: { es: "Por qué el Litoral", en: "Why the Coastline" },
    sectionTitle: {
      es: "La costa peruana: un destino privilegiado para vivir",
      en: "The Peruvian coast: a privileged place to live",
    },
    stats: [
      { value: "300+", label: { es: "Días de sol al año", en: "Sunny days per year" } },
      { value: "2,414", label: { es: "Km de costa", en: "Km of coastline" } },
      { value: "18-24°C", label: { es: "Temperatura promedio", en: "Average temperature" } },
      { value: "+15%", label: { es: "Plusvalía anual", en: "Annual property value increase" } },
    ],
    advantages: {
      title: { es: "Ventajas de construir en la costa peruana", en: "Advantages of building on the Peruvian coast" },
      items: [
        {
          title: { es: "Clima templado privilegiado", en: "Privileged temperate climate" },
          desc: {
            es: "La costa central y sur del Perú ofrece un clima templado y sin lluvias significativas, ideal para viviendas con espacios abiertos, terrazas y áreas de convivencia al aire libre durante todo el año.",
            en: "The central and southern coast of Peru offers a temperate climate without significant rainfall, ideal for homes with open spaces, terraces, and outdoor living areas all year round.",
          },
        },
        {
          title: { es: "Materiales de alta durabilidad", en: "Highly durable materials" },
          desc: {
            es: "Desarrollamos soluciones constructivas con hormigón armado, acero anticorrosivo y acabados especiales que resisten la humedad salina, garantizando una vida útil superior a 50 años para tu inversión.",
            en: "We develop construction solutions with reinforced concrete, anti-corrosive steel, and special finishes that resist salt humidity, guaranteeing a lifespan of over 50 years for your investment.",
          },
        },
        {
          title: { es: "Plusvalía constante", en: "Constant property appreciation" },
          desc: {
            es: "Las propiedades costeras en Perú han demostrado un crecimiento sostenido en valor. Construir en zonas como Asia, Mancora, Punta Sal o los distritos costeros de Lima representa una inversión inteligente con altos retornos.",
            en: "Coastal properties in Peru have shown sustained value growth. Building in areas like Asia, Mancora, Punta Sal, or Lima's coastal districts represents a smart investment with high returns.",
          },
        },
      ],
    },
  },
  contact: {
    sectionTag: { es: "Contáctanos", en: "Contact Us" },
    sectionTitle: { es: "Hagamos realidad tu proyecto costero", en: "Let's make your coastal project a reality" },
    sectionDesc: {
      es: "Estamos listos para escuchar tu idea y convertirla en un plan concreto. Escríbenos y agendemos una consulta personalizada sin costo.",
      en: "We're ready to hear your idea and turn it into a concrete plan. Write to us and schedule a free personalized consultation.",
    },
    form: {
      name: { es: "Nombre completo", en: "Full name" },
      namePlaceholder: { es: "Ej: Carlos Mendoza", en: "E.g.: Carlos Mendoza" },
      email: { es: "Correo electrónico", en: "Email address" },
      emailPlaceholder: { es: "correo@ejemplo.com", en: "email@example.com" },
      phone: { es: "Teléfono", en: "Phone number" },
      phonePlaceholder: { es: "+51 999 888 777", en: "+51 999 888 777" },
      message: { es: "Mensaje", en: "Message" },
      messagePlaceholder: { es: "Cuéntanos sobre el proyecto que tienes en mente...", en: "Tell us about the project you have in mind..." },
      submit: { es: "Enviar Mensaje", en: "Send Message" },
      sending: { es: "Enviando...", en: "Sending..." },
      success: {
        es: "Mensaje enviado con éxito. Nos pondremos en contacto pronto.",
        en: "Message sent successfully. We will contact you soon.",
      },
    },
    info: {
      addressLabel: { es: "Oficina Principal", en: "Main Office" },
      address: { es: "Av. Los Libertadores 1250, Miraflores, Lima, Perú", en: "Av. Los Libertadores 1250, Miraflores, Lima, Peru" },
      phoneLabel: { es: "Teléfono", en: "Phone" },
      phone: "+51 1 234 5678",
      emailLabel: { es: "Email", en: "Email" },
      email: "info@cmc-arquitectura.com",
      hoursLabel: { es: "Horario", en: "Hours" },
      hours: { es: "Lunes a Viernes: 9:00 AM - 6:00 PM", en: "Monday to Friday: 9:00 AM - 6:00 PM" },
    },
  },
  footer: {
    rights: { es: "Todos los derechos reservados.", en: "All rights reserved." },
    tagline: { es: "Diseño y construcción de casas en entornos costeros del Perú.", en: "Design and construction of homes in Peru's coastal environments." },
    navigation: { es: "Navegación", en: "Navigation" },
    followUs: { es: "Síguenos", en: "Follow Us" },
  },
} as const;

export type Translations = typeof translations;
