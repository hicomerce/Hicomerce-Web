const fs = require("fs");
const path = require("path");

const BUILD_DIR = path.resolve(__dirname, "..", "build");
const SITE_URL = "https://hicomerce.com.mx";
const TODAY = new Date().toISOString().slice(0, 10);

const HOME_FAQS = [
  {
    q: "¿Qué es una agencia de marketing y publicidad y qué ofrece HiComerce?",
    a: "Una agencia de marketing y publicidad diseña y ejecuta estrategias digitales para atraer clientes y aumentar las ventas de una empresa. A diferencia de una agencia tradicional, HiComerce es una agencia mexicana de Marketing 360° potenciada con Inteligencia Artificial: combinamos SEO, Google y Meta Ads, e-commerce y marketplaces con agentes de IA 24/7 para prospección, WhatsApp y contenido.",
  },
  {
    q: "¿Cuánto cobra una agencia de marketing al mes?",
    a: "El costo mensual de una agencia de marketing en México depende de los canales incluidos, el volumen de campañas publicitarias y el nivel de automatización con Inteligencia Artificial que necesite tu empresa. En HiComerce diseñamos un plan a la medida tras una videollamada de diagnóstico gratuito, respaldado por nuestra Garantía 100% de Satisfacción de 30 días.",
  },
  {
    q: "¿Cuál es la mejor publicidad para un negocio?",
    a: "La mejor publicidad para un negocio combina captación inmediata con posicionamiento orgánico a mediano plazo. En HiComerce integramos campañas pagadas en Google Ads y Meta Ads junto con prospección automatizada con IA para generar oportunidades desde las primeras semanas, mientras construimos SEO, GEO y contenido estratégico para reducir tu costo de adquisición mes a mes.",
  },
  {
    q: "¿Cuáles son las mejores agencias de marketing y cómo elegir una?",
    a: "Las mejores agencias de marketing se distinguen por trabajar con estrategia basada en datos, casos de éxito comprobables, ejecución integral y compromisos medibles. HiComerce cumple estos criterios ofreciendo un equipo dedicado de Marketing 360°, automatización comercial con agentes de IA 24/7 y una garantía por escrito de duplicar tus ventas online en 12 meses.",
  },
  {
    q: "¿Cómo funcionan los agentes de Inteligencia Artificial para ventas de HiComerce?",
    a: "Los agentes de Inteligencia Artificial de HiComerce trabajan 24/7 para identificar prospectos ideales, contactarlos de forma personalizada por correo y WhatsApp, calificar su interés con preguntas estratégicas y agendar citas directamente en el calendario de tu equipo comercial. Este flujo completo se integra con tu CRM para llenar tu pipeline sin aumentar tu carga operativa.",
  },
  {
    q: "¿Qué garantía de resultados ofrece HiComerce?",
    a: "HiComerce respalda su trabajo con dos garantías claras: una Garantía 100% de Satisfacción durante los primeros 30 días —si no estás encantado con el servicio, te devolvemos tu dinero— y nuestra Garantía de Resultados en el plan 360°, donde nos comprometemos a duplicar tus ventas online en 12 meses o seguir trabajando sin costo hasta lograrlo.",
  },
  {
    q: "¿HiComerce trabaja con Shopify, Amazon, Mercado Libre y mi CRM actual?",
    a: "Sí. El equipo de HiComerce implementa estrategias, tiendas y automatizaciones directamente sobre Shopify, WooCommerce, Amazon, Mercado Libre, WhatsApp Business y los principales CRMs del mercado, conectando tu captación de leads y tus canales de venta en un solo flujo comercial.",
  },
];

const IA_FAQS = [
  {
    q: "¿Qué procesos de ventas y marketing puede automatizar la IA de HiComerce?",
    a: "La suite de IA de HiComerce automatiza cuatro áreas probadas: prospección y calificación de leads por correo y WhatsApp, social selling para captar audiencia de la competencia, producción constante de contenido optimizado para SEO y GEO, y optimización de campañas de Ads y listings en Amazon y Mercado Libre.",
  },
  {
    q: "¿Los agentes de IA pueden prospectar y agendar citas por WhatsApp y correo?",
    a: "Sí. Nuestros agentes de prospección B2B buscan negocios afines a tu cliente ideal, analizan su sitio web, redactan propuestas personalizadas y ejecutan seguimientos automáticos por correo electrónico y WhatsApp. Cuando un prospecto responde, la IA resuelve dudas frecuentes, califica el perfil y agenda la reunión con tu vendedor.",
  },
  {
    q: "¿Cómo ayuda la IA de HiComerce en posicionamiento SEO y GEO?",
    a: "Combinamos auditoría técnica, investigación de palabras clave y generación asistida por IA para publicar artículos optimizados cada mes con estructura semántica, datos estructurados y respuestas directas diseñadas tanto para posicionar en Google (SEO) como para ser citadas por ChatGPT, Perplexity y Google AI Overviews (GEO).",
  },
  {
    q: "¿Se pueden desarrollar soluciones de IA a la medida e integrarlas con mi CRM?",
    a: "Sí. Más allá de nuestra suite estándar, HiComerce diseña y programa agentes, flujos automatizados y conectores a la medida para tu CRM, tienda Shopify o plataformas comerciales, adaptándose exactamente a las reglas y procesos de venta de tu empresa.",
  },
];

const S360_FAQS = [
  {
    q: "¿Qué diferencia a una agencia de Marketing 360° de otros tipos de agencias?",
    a: "Mientras una agencia tradicional solo gestiona redes sociales o anuncios aislados, una agencia de Marketing 360° como HiComerce unifica estudio de mercado, SEO, GEO, e-commerce, Google y Meta Ads, email marketing y automatización de ventas con IA bajo un mismo equipo y un objetivo claro: duplicar tus ventas online.",
  },
  {
    q: "¿Cuánto cobra una agencia de marketing 360° al mes?",
    a: "La inversión mensual se define según los canales activos, el estado actual de tu tienda o sitio web y las metas de crecimiento acordadas. En HiComerce comenzamos con una videollamada de diagnóstico gratuito para presentarte una propuesta transparente a la medida y con Garantía de Satisfacción de 30 días.",
  },
  {
    q: "¿Qué incluye exactamente el plan 'Tu Evolución Digital 360°'?",
    a: "Incluye estudio de mercado y competencia, plan estratégico trimestral, posicionamiento SEO y GEO, desarrollo y optimización de e-commerce, gestión de campañas pagadas en Google y Meta Ads, redes sociales, email marketing, automatización comercial con IA, pricing y acompañamiento en logística digital.",
  },
  {
    q: "¿Cómo funciona la garantía de duplicar ventas en 12 meses?",
    a: "Durante el kickoff establecemos la línea base de ventas digitales y metas trimestrales medibles. Nuestro equipo ejecuta y optimiza cada canal semana a semana; si al cumplirse los 12 meses no alcanzamos el objetivo acordado de duplicar tus ventas online, HiComerce continúa trabajando sin costo hasta lograrlo.",
  },
];

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildFaqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

function renderFaqHtml(faqs, heading) {
  return `
    <section id="preguntas-frecuentes">
      <h2>${escapeHtml(heading)}</h2>
      ${faqs
        .map(
          (item) => `
        <article>
          <h3>${escapeHtml(item.q)}</h3>
          <p>${escapeHtml(item.a)}</p>
        </article>`
        )
        .join("")}
    </section>`;
}

const ROUTES = [
  {
    route: "/",
    outFile: "index.html",
    title: "HiComerce | Marketing 360° e Inteligencia Artificial",
    description:
      "Agencia mexicana de Marketing 360° e Inteligencia Artificial para ventas B2B y e-commerce. Automatizamos prospección 24/7, SEO, GEO y Ads con garantía.",
    canonical: `${SITE_URL}/`,
    schemas: [buildFaqSchema(HOME_FAQS)],
    bodyHtml: `
      <main class="hc-ssr-shell">
        <header>
          <nav aria-label="Navegación principal">
            <a href="/">Inicio</a>
            <a href="/serviciosIA">Servicios IA</a>
            <a href="/servicios360">Marketing 360°</a>
            <a href="/portafolio">Portafolio</a>
            <a href="/clientes">Clientes</a>
            <a href="/blogs">Blog</a>
            <a href="/nosotros">Nosotros</a>
            <a href="/contacto">Contacto</a>
          </nav>
        </header>
        <article>
          <h1>Marketing 360° potenciado con Inteligencia Artificial</h1>
          <p>HiComerce es una agencia mexicana de Marketing 360° y desarrollo de Inteligencia Artificial con sede en Guadalajara, Jalisco. Ayudamos a empresas B2B y marcas de e-commerce en México, Estados Unidos y Latinoamérica a escalar sus ventas mediante estrategias personalizadas, automatización comercial 24/7 y resultados medibles.</p>
          <p>Publicado por <a href="/nosotros" rel="author">Equipo HiComerce</a> · Actualizado el <time datetime="${TODAY}">${TODAY}</time></p>
          <section>
            <h2>Servicios de Inteligencia Artificial y Marketing 360°</h2>
            <p>Integramos Agentes de Inteligencia Artificial para prospección y ventas por correo y WhatsApp, Social Selling, contenido optimizado para SEO y GEO, y gestión profesional de Google Ads, Meta Ads, Shopify, Amazon y Mercado Libre.</p>
            <p>Respaldamos cada proyecto con nuestra Garantía 100% de Satisfacción de 30 días y nuestra Garantía de Resultados en el plan Tu Evolución Digital 360°, donde nos comprometemos a duplicar tus ventas online en 12 meses o seguir trabajando sin costo hasta lograrlo.</p>
          </section>
          ${renderFaqHtml(HOME_FAQS, "Preguntas Frecuentes sobre HiComerce")}
          <section>
            <h2>Solicita tu Diagnóstico Gratuito</h2>
            <p>Agenda una videollamada gratuita de 30 minutos en <a href="/contacto">hicomerce.com.mx/contacto</a> o escríbenos por WhatsApp al +52 33 1691 3370.</p>
          </section>
        </article>
      </main>`,
  },
  {
    route: "/serviciosIA",
    outFile: path.join("serviciosIA", "index.html"),
    title: "Agentes de IA para Ventas y Marketing | HiComerce",
    description:
      "Automatiza prospección B2B 24/7 por WhatsApp y correo, Social Selling, contenido SEO/GEO y optimización de Ads y Marketplaces con HiComerce.",
    canonical: `${SITE_URL}/serviciosIA`,
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Agentes de Inteligencia Artificial para Ventas y Marketing",
        provider: { "@id": `${SITE_URL}/#organization` },
        url: `${SITE_URL}/serviciosIA`,
        description:
          "Agentes de IA 24/7 para prospección B2B por email y WhatsApp, Social Selling, contenido SEO/GEO y optimización de Ads y Marketplaces.",
      },
      buildFaqSchema(IA_FAQS),
    ],
    bodyHtml: `
      <main class="hc-ssr-shell">
        <article>
          <h1>Automatiza y escala tus ventas y marketing con nuestra IA 360°</h1>
          <p>La suite de Inteligencia Artificial de HiComerce automatiza la prospección B2B, la calificación de leads por WhatsApp y correo electrónico, el Social Selling, la creación de contenido SEO/GEO y la optimización de campañas en Google Ads, Meta Ads, Amazon y Mercado Libre.</p>
          <p>Por <a href="/nosotros" rel="author">Equipo HiComerce</a> · <time datetime="${TODAY}">${TODAY}</time></p>
          ${renderFaqHtml(IA_FAQS, "Preguntas Frecuentes sobre Agentes de IA")}
          <p><a href="/contacto">Solicita una Demostración de IA</a></p>
        </article>
      </main>`,
  },
  {
    route: "/servicios360",
    outFile: path.join("servicios360", "index.html"),
    title: "Marketing 360° 'Tu Evolución Digital' | Duplica tus Ventas | HiComerce",
    description:
      "Plan integral de Marketing 360° en México: estudio de mercado, SEO, GEO, e-commerce, Google y Meta Ads y automatización comercial con garantía de duplicar tus ventas en 12 meses.",
    canonical: `${SITE_URL}/servicios360`,
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Tu Evolución Digital 360°",
        provider: { "@id": `${SITE_URL}/#organization` },
        url: `${SITE_URL}/servicios360`,
        description:
          "Plan integral de Marketing 360° con estudio de mercado, SEO, GEO, e-commerce, pauta digital y automatización con garantía de duplicar ventas en 12 meses.",
      },
      buildFaqSchema(S360_FAQS),
    ],
    bodyHtml: `
      <main class="hc-ssr-shell">
        <article>
          <h1>Tu Evolución Digital 360°: Transformamos tu negocio para triunfar en línea</h1>
          <p>Plan exclusivo de HiComerce para empresas que buscan duplicar sus ventas online en 12 meses mediante estudio de mercado, SEO, GEO, desarrollo e-commerce, Google Ads, Meta Ads, email marketing y automatización comercial.</p>
          <p>Por <a href="/nosotros" rel="author">Equipo HiComerce</a> · <time datetime="${TODAY}">${TODAY}</time></p>
          ${renderFaqHtml(S360_FAQS, "Preguntas Frecuentes sobre Marketing 360°")}
          <p><a href="/contacto">Solicita Diagnóstico 360° Gratis</a></p>
        </article>
      </main>`,
  },
  {
    route: "/blogs",
    outFile: path.join("blogs", "index.html"),
    title: "Blog de Marketing Digital, SEO, GEO e Inteligencia Artificial | HiComerce",
    description:
      "Artículos prácticos sobre Inteligencia Artificial para ventas, Marketing 360°, SEO, GEO, e-commerce y estrategias probadas para escalar negocios en México y LATAM.",
    canonical: `${SITE_URL}/blogs`,
    schemas: [],
    bodyHtml: `
      <main class="hc-ssr-shell">
        <h1>Blog de Marketing Digital, SEO, GEO e Inteligencia Artificial</h1>
        <p>Explora guías prácticas y estrategias comprobadas por el equipo de HiComerce para aumentar ventas B2B y e-commerce en México y Latinoamérica.</p>
        <p><a href="/">Volver al inicio</a> · <a href="/contacto">Solicitar Diagnóstico Gratis</a></p>
      </main>`,
  },
  {
    route: "/portafolio",
    outFile: path.join("portafolio", "index.html"),
    title: "Portafolio de Proyectos de Marketing, E-commerce e IA | HiComerce",
    description:
      "Conoce los proyectos de e-commerce, campañas de Google y Meta Ads, diseño web y automatización con Inteligencia Artificial desarrollados por HiComerce.",
    canonical: `${SITE_URL}/portafolio`,
    schemas: [],
    bodyHtml: `
      <main class="hc-ssr-shell">
        <h1>Portafolio de Proyectos HiComerce</h1>
        <p>Casos y proyectos implementados en Shopify, e-commerce, Google Ads, Meta Ads, posicionamiento SEO/GEO y automatización comercial con Inteligencia Artificial.</p>
        <p><a href="/contacto">Solicita Diagnóstico Gratis</a></p>
      </main>`,
  },
  {
    route: "/clientes",
    outFile: path.join("clientes", "index.html"),
    title: "Clientes y Casos de Éxito | Agencia HiComerce",
    description:
      "Descubre las marcas y empresas B2B y e-commerce que escalan sus ventas con las estrategias de Marketing 360° e Inteligencia Artificial de HiComerce.",
    canonical: `${SITE_URL}/clientes`,
    schemas: [],
    bodyHtml: `
      <main class="hc-ssr-shell">
        <h1>Clientes y Marcas que Confían en HiComerce</h1>
        <p>Empresas líderes en México y Estados Unidos que impulsan sus canales digitales con el equipo de Marketing 360° e Inteligencia Artificial de HiComerce.</p>
        <p><a href="/contacto">Agenda tu diagnóstico gratuito</a></p>
      </main>`,
  },
  {
    route: "/nosotros",
    outFile: path.join("nosotros", "index.html"),
    title: "Nosotros | Equipo de Marketing 360° e IA en Guadalajara | HiComerce",
    description:
      "Conoce al equipo de HiComerce en Guadalajara, Jalisco: especialistas en Marketing 360°, desarrollo web e Inteligencia Artificial enfocados en resultados medibles.",
    canonical: `${SITE_URL}/nosotros`,
    schemas: [],
    bodyHtml: `
      <main class="hc-ssr-shell">
        <h1>Sobre HiComerce</h1>
        <p>Somos una agencia de Marketing 360° e Inteligencia Artificial con sede en Guadalajara, Jalisco, México, dedicada a transformar y escalar las ventas digitales de empresas B2B y e-commerce.</p>
        <p><a href="/contacto">Contáctanos</a></p>
      </main>`,
  },
  {
    route: "/contacto",
    outFile: path.join("contacto", "index.html"),
    title: "Contacto y Diagnóstico Gratuito | HiComerce Guadalajara",
    description:
      "Agenda una videollamada gratuita de diagnóstico digital con HiComerce o escríbenos por WhatsApp al +52 33 1691 3370 para escalar tus ventas con Marketing 360° e IA.",
    canonical: `${SITE_URL}/contacto`,
    schemas: [],
    bodyHtml: `
      <main class="hc-ssr-shell">
        <h1>Contacto y Diagnóstico Gratuito — HiComerce</h1>
        <p>Agenda una videollamada gratuita de 30 minutos con nuestro equipo en Guadalajara, Jalisco, o escríbenos por WhatsApp al +52 33 1691 3370.</p>
      </main>`,
  },
];

function applyRouteTemplate(baseHtml, routeConfig) {
  let html = baseHtml;

  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(routeConfig.title)}</title>`);
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="description" content="${escapeHtml(routeConfig.description)}" />`
  );
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
    `<link rel="canonical" href="${escapeHtml(routeConfig.canonical)}" />`
  );
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:url" content="${escapeHtml(routeConfig.canonical)}" />`
  );
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:title" content="${escapeHtml(routeConfig.title)}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:description" content="${escapeHtml(routeConfig.description)}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:title" content="${escapeHtml(routeConfig.title)}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:description" content="${escapeHtml(routeConfig.description)}" />`
  );

  if (routeConfig.schemas && routeConfig.schemas.length > 0) {
    const schemaScripts = routeConfig.schemas
      .map((s, i) => `<script type="application/ld+json" id="hicomerce-prerender-schema-${i}">${JSON.stringify(s)}</script>`)
      .join("\n");
    html = html.replace("</head>", `${schemaScripts}\n</head>`);
  }

  // Inyecta el HTML semántico dentro de #root para bots que no ejecutan JS;
  // React 19 createRoot().render() lo reemplaza automáticamente en navegadores reales.
  html = html.replace(
    /<div\s+id=["']?root["']?\s*>[\s\S]*?<\/div>\s*<\/body>/i,
    `<div id="root">${routeConfig.bodyHtml}</div></body>`
  );

  return html;
}

async function enrichSitemapWithBlogs() {
  const sitemapPath = path.join(BUILD_DIR, "sitemap.xml");
  if (!fs.existsSync(sitemapPath) || typeof fetch !== "function") return;

  const apiBase = process.env.REACT_APP_API_URL || "https://hicomerce-backend.hicomerce.com.mx/api";
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 5000);
    const res = await fetch(`${apiBase}/blogs`, { signal: controller.signal });
    clearTimeout(timer);
    if (!res.ok) return;
    const json = await res.json();
    const blogs = Array.isArray(json?.data) ? json.data : Array.isArray(json?.blogs) ? json.blogs : [];
    if (blogs.length === 0) return;

    const blogEntries = blogs
      .filter((b) => b && b.slug)
      .map((b) => {
        const lastmod = b.updated_at || b.created_at
          ? new Date(b.updated_at || b.created_at).toISOString().slice(0, 10)
          : TODAY;
        return `  <url>\n    <loc>${SITE_URL}/blog/${encodeURIComponent(b.slug)}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.75</priority>\n  </url>`;
      })
      .join("\n");

    if (blogEntries) {
      let xml = fs.readFileSync(sitemapPath, "utf8");
      xml = xml.replace("</urlset>", `${blogEntries}\n</urlset>`);
      fs.writeFileSync(sitemapPath, xml, "utf8");
      console.log(`[prerender-seo] Added ${blogs.length} blog URLs to build/sitemap.xml`);
    }
  } catch (err) {
    console.log(`[prerender-seo] Skipped live blog sitemap enrichment (${err.message})`);
  }
}

async function main() {
  const indexPath = path.join(BUILD_DIR, "index.html");
  if (!fs.existsSync(indexPath)) {
    console.error("[prerender-seo] build/index.html not found. Run react-scripts build first.");
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(indexPath, "utf8");

  for (const routeConfig of ROUTES) {
    const rendered = applyRouteTemplate(baseHtml, routeConfig);
    const targetPath = path.join(BUILD_DIR, routeConfig.outFile);
    fs.mkdirSync(path.dirname(targetPath), { recursive: true });
    fs.writeFileSync(targetPath, rendered, "utf8");
  }

  await enrichSitemapWithBlogs();
  console.log(`[prerender-seo] Pre-rendered ${ROUTES.length} routes successfully.`);
}

main();
