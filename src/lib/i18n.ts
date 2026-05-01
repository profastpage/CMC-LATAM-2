export type Language = "es" | "en";

export const translations = {
  nav: {
    proyectos: { es: "Proyectos", en: "Projects" },
    servicios: { es: "Servicios", en: "Services" },
    nosotros: { es: "Nosotros", en: "About" },
    contacto: { es: "Contacto", en: "Contact" },
  },
  hero: {
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
        tag: { es: "Playa", en: "Beach" },
        title: {
          es: "Casas de Campo-Playa",
          en: "Beach Country Houses",
        },
        description: {
          es: "Residencias que armonizan con el paisaje costero, diseñadas para disfrutar de la brisa del mar sin sacrificar el confort moderno. Materiales resistentes y acabados premium.",
          en: "Residences that harmonize with the coastal landscape, designed to enjoy the sea breeze without sacrificing modern comfort. Weather-resistant materials and premium finishes.",
        },
      },
      {
        tag: { es: "Costa", en: "Coast" },
        title: {
          es: "Residencias en Lima Costa",
          en: "Lima Coast Residences",
        },
        description: {
          es: "Proyectos residenciales en los mejores distritos costeros de Lima. Diseños contemporáneos que maximizan la vista al mar y crean ambientes de vida sofisticados.",
          en: "Residential projects in Lima's finest coastal districts. Contemporary designs that maximize ocean views and create sophisticated living environments.",
        },
      },
      {
        tag: { es: "Villa", en: "Villa" },
        title: {
          es: "Villas Modernas",
          en: "Modern Villas",
        },
        description: {
          es: "Villas de lujo con arquitectura vanguardista, piscinas infinity y espacios abiertos que conectan con la naturaleza. El máximo exponente de la vida costera peruana.",
          en: "Luxury villas with avant-garde architecture, infinity pools, and open spaces that connect with nature. The ultimate expression of Peruvian coastal living.",
        },
      },
    ],
    viewProject: { es: "Ver Detalle", en: "View Details" },
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
        title: {
          es: "Diseño Arquitectónico",
          en: "Architectural Design",
        },
        description: {
          es: "Creamos proyectos arquitectónicos personalizados que se integran con el entorno costero. Nuestros diseños priorizan la luminosidad, la ventilación natural y la conexión visual con el paisaje marino. Utilizamos tecnología BIM y renderizado 3D para que visualices tu futuro hogar antes de construir.",
          en: "We create custom architectural projects that integrate with the coastal environment. Our designs prioritize luminosity, natural ventilation, and visual connection with the seascape. We use BIM technology and 3D rendering so you can visualize your future home before building.",
        },
        icon: "ruler",
      },
      {
        title: {
          es: "Construcción Integral",
          en: "Full Construction",
        },
        description: {
          es: "Gestionamos la construcción completa de tu vivienda con materiales de primera calidad y técnicas adaptadas al clima costero peruano. Nuestro equipo de obra garantiza plazos cumplidos, acabados impecables y una supervisión rigurosa en cada fase del proceso constructivo.",
          en: "We manage the complete construction of your home with top-quality materials and techniques adapted to the Peruvian coastal climate. Our site team guarantees timely delivery, impeccable finishes, and rigorous supervision at every phase of the construction process.",
        },
        icon: "hard-hat",
      },
      {
        title: {
          es: "Gestión de Proyectos",
          en: "Project Management",
        },
        description: {
          es: "Coordinamos todos los aspectos de tu proyecto: permisos municipales, presupuestos, cronogramas y control de calidad. Te mantenemos informado en cada etapa con reportes detallados y transparencia total para que tu experiencia sea libre de preocupaciones.",
          en: "We coordinate every aspect of your project: municipal permits, budgets, timelines, and quality control. We keep you informed at every stage with detailed reports and full transparency so your experience is worry-free.",
        },
        icon: "clipboard-check",
      },
    ],
  },
  info: {
    sectionTag: { es: "Por qué el Litoral", en: "Why the Coastline" },
    sectionTitle: {
      es: "La costa peruana: un destino privilegiado para vivir",
      en: "The Peruvian coast: a privileged place to live",
    },
    stats: [
      {
        value: "300+",
        label: { es: "Días de sol al año", en: "Sunny days per year" },
      },
      {
        value: "2,414",
        label: { es: "Km de costa", en: "Km of coastline" },
      },
      {
        value: "18-24°C",
        label: { es: "Temperatura promedio", en: "Average temperature" },
      },
      {
        value: "+15%",
        label: { es: "Plusvalía anual", en: "Annual property value increase" },
      },
    ],
    advantages: {
      title: {
        es: "Ventajas de construir en la costa peruana",
        en: "Advantages of building on the Peruvian coast",
      },
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
    sectionTitle: {
      es: "Hagamos realidad tu proyecto costero",
      en: "Let's make your coastal project a reality",
    },
    sectionDesc: {
      es: "Estamos listos para escuchar tu idea y convertirla en un plan concreto. Escríbenos y agendemos una consulta personalizada sin costo.",
      en: "We're ready to hear your idea and turn it into a concrete plan. Write to us and schedule a free personalized consultation.",
    },
    form: {
      name: { es: "Nombre completo", en: "Full name" },
      namePlaceholder: { es: "Ej: Carlos Mendoza", en: "E.g.: Carlos Mendoza" },
      email: { es: "Correo electrónico", en: "Email address" },
      emailPlaceholder: {
        es: "correo@ejemplo.com",
        en: "email@example.com",
      },
      phone: { es: "Teléfono", en: "Phone number" },
      phonePlaceholder: { es: "+51 999 888 777", en: "+51 999 888 777" },
      message: { es: "Mensaje", en: "Message" },
      messagePlaceholder: {
        es: "Cuéntanos sobre el proyecto que tienes en mente...",
        en: "Tell us about the project you have in mind...",
      },
      submit: { es: "Enviar Mensaje", en: "Send Message" },
      sending: { es: "Enviando...", en: "Sending..." },
      success: {
        es: "Mensaje enviado con éxito. Nos pondremos en contacto pronto.",
        en: "Message sent successfully. We will contact you soon.",
      },
    },
    info: {
      addressLabel: { es: "Oficina Principal", en: "Main Office" },
      address: {
        es: "Av. Los Libertadores 1250, Miraflores, Lima, Perú",
        en: "Av. Los Libertadores 1250, Miraflores, Lima, Peru",
      },
      phoneLabel: { es: "Teléfono", en: "Phone" },
      phone: "+51 1 234 5678",
      emailLabel: { es: "Email", en: "Email" },
      email: "info@cmc-arquitectura.com",
      hoursLabel: { es: "Horario", en: "Hours" },
      hours: {
        es: "Lunes a Viernes: 9:00 AM - 6:00 PM",
        en: "Monday to Friday: 9:00 AM - 6:00 PM",
      },
    },
  },
  footer: {
    rights: {
      es: "Todos los derechos reservados.",
      en: "All rights reserved.",
    },
    tagline: {
      es: "Diseño y construcción de casas en entornos costeros del Perú.",
      en: "Design and construction of homes in Peru's coastal environments.",
    },
  },
} as const;

export type Translations = typeof translations;
