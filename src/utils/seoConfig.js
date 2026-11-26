export const SITE_URL = "https://hicomerce.com.mx";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/logo512.png`;

export const ROUTE_SEO = {
  "/": {
    title: "HiComerce | Marketing 360° e Inteligencia Artificial",
    description:
      "Agencia mexicana de Marketing 360° e Inteligencia Artificial para ventas B2B y e-commerce. Automatizamos prospección 24/7, SEO, GEO y Ads con garantía.",
    canonical: `${SITE_URL}/`,
    ogType: "website",
    schema: null,
  },
  "/serviciosIA": {
    title: "Agentes de IA para Ventas y Marketing | HiComerce",
    description:
      "Automatiza prospección B2B 24/7 por WhatsApp y correo, Social Selling, contenido SEO/GEO y optimización de Ads y Marketplaces con HiComerce.",
    canonical: `${SITE_URL}/serviciosIA`,
    ogType: "website",
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          name: "Agentes de Inteligencia Artificial para Ventas y Marketing",
          serviceType: "Automatización Comercial con Inteligencia Artificial",
          provider: { "@id": `${SITE_URL}/#organization` },
          areaServed: ["México", "Estados Unidos", "Latinoamérica"],
          description:
            "Suite de Agentes de Inteligencia Artificial 24/7 para prospección B2B, calificación por WhatsApp y correo, Social Selling, contenido SEO/GEO y optimización de campañas en Google Ads, Meta Ads, Amazon y Mercado Libre.",
          url: `${SITE_URL}/serviciosIA`,
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Servicios de IA", item: `${SITE_URL}/serviciosIA` },
          ],
        },
      ],
    },
  },
  "/servicios360": {
    title: "Marketing 360° 'Tu Evolución Digital' | Duplica tus Ventas | HiComerce",
    description:
      "Plan integral de Marketing 360° en México: estudio de mercado, SEO, GEO, e-commerce, Google y Meta Ads y automatización comercial con garantía de duplicar tus ventas en 12 meses.",
    canonical: `${SITE_URL}/servicios360`,
    ogType: "website",
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          name: "Tu Evolución Digital 360°",
          serviceType: "Agencia de Marketing Digital 360°",
          provider: { "@id": `${SITE_URL}/#organization` },
          areaServed: ["México", "Estados Unidos", "Latinoamérica"],
          description:
            "Programa integral de Marketing 360° que unifica estudio de mercado, SEO, GEO, e-commerce, Google Ads, Meta Ads, redes sociales y automatización de ventas con garantía de duplicar ventas online en 12 meses.",
          url: `${SITE_URL}/servicios360`,
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Servicios 360°", item: `${SITE_URL}/servicios360` },
          ],
        },
      ],
    },
  },
  "/blogs": {
    title: "Blog de Marketing Digital, SEO, GEO e Inteligencia Artificial | HiComerce",
    description:
      "Artículos prácticos sobre Inteligencia Artificial para ventas, Marketing 360°, SEO, GEO, e-commerce y estrategias probadas para escalar negocios en México y LATAM.",
    canonical: `${SITE_URL}/blogs`,
    ogType: "website",
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "CollectionPage",
          name: "Blog de HiComerce",
          url: `${SITE_URL}/blogs`,
          description: "Guías y artículos sobre marketing digital, SEO, GEO e Inteligencia Artificial para ventas.",
          isPartOf: { "@id": `${SITE_URL}/#website` },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blogs` },
          ],
        },
      ],
    },
  },
  "/portafolio": {
    title: "Portafolio de Proyectos de Marketing, E-commerce e IA | HiComerce",
    description:
      "Conoce los proyectos de e-commerce, campañas de Google y Meta Ads, diseño web y automatización con Inteligencia Artificial desarrollados por HiComerce.",
    canonical: `${SITE_URL}/portafolio`,
    ogType: "website",
    schema: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Portafolio", item: `${SITE_URL}/portafolio` },
      ],
    },
  },
  "/clientes": {
    title: "Clientes y Casos de Éxito | Agencia HiComerce",
    description:
      "Descubre las marcas y empresas B2B y e-commerce que escalan sus ventas con las estrategias de Marketing 360° e Inteligencia Artificial de HiComerce.",
    canonical: `${SITE_URL}/clientes`,
    ogType: "website",
    schema: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Clientes", item: `${SITE_URL}/clientes` },
      ],
    },
  },
  "/nosotros": {
    title: "Nosotros | Equipo de Marketing 360° e IA en Guadalajara | HiComerce",
    description:
      "Conoce al equipo de HiComerce en Guadalajara, Jalisco: especialistas en Marketing 360°, desarrollo web e Inteligencia Artificial enfocados en resultados medibles.",
    canonical: `${SITE_URL}/nosotros`,
    ogType: "website",
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "AboutPage",
          name: "Sobre HiComerce",
          url: `${SITE_URL}/nosotros`,
          mainEntity: { "@id": `${SITE_URL}/#organization` },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Nosotros", item: `${SITE_URL}/nosotros` },
          ],
        },
      ],
    },
  },
  "/contacto": {
    title: "Contacto y Diagnóstico Gratuito | HiComerce Guadalajara",
    description:
      "Agenda una videollamada gratuita de diagnóstico digital con HiComerce o escríbenos por WhatsApp al +52 33 1691 3370 para escalar tus ventas con Marketing 360° e IA.",
    canonical: `${SITE_URL}/contacto`,
    ogType: "website",
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ContactPage",
          name: "Contacto HiComerce",
          url: `${SITE_URL}/contacto`,
          mainEntity: { "@id": `${SITE_URL}/#organization` },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Contacto", item: `${SITE_URL}/contacto` },
          ],
        },
      ],
    },
  },
  "/aviso-de-privacidad": {
    title: "Aviso de Privacidad | HiComerce",
    description: "Consulta el Aviso de Privacidad y protección de datos personales de HiComerce.",
    canonical: `${SITE_URL}/aviso-de-privacidad`,
    ogType: "website",
    schema: null,
  },
  "/terminos-del-servicio": {
    title: "Términos y Condiciones del Servicio | HiComerce",
    description: "Consulta los Términos y Condiciones de uso y contratación de servicios de HiComerce.",
    canonical: `${SITE_URL}/terminos-del-servicio`,
    ogType: "website",
    schema: null,
  },
};
