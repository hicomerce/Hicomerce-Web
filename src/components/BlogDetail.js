import React, { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import blogs from "../assets/files/blogs.json";
import { createSlug, cleanMarkdown } from "../utils/blogHelpers";


function BlogDetail() {
  const { slug } = useParams();
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const footerRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  const blog = blogs.find((item) => createSlug(item.titulo) === slug);

  useEffect(() => {
    // Detectar si es móvil
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const footerElement = footerRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSidebarVisible(!entry.isIntersecting);
      },
      { 
        threshold: 0,
        rootMargin: "-50px 0px 0px 0px"
      }
    );

    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      if (footerElement) observer.unobserve(footerElement);
    };
  }, []);


  if (!blog) {
    return (
      <section style={styles.notFoundSection}>
        <div style={styles.notFoundContainer}>
          <h1 style={styles.notFoundTitle}>Blog no encontrado</h1>
          <p style={styles.notFoundText}>
            El artículo que buscas no existe o fue removido.
          </p>
          <Link to="/blogs" style={styles.backButton}>
            Volver a blogs
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <Link to="/blogs" style={styles.backLink}>
          ← Volver a blogs
        </Link>

        {blog.imagen_header && (
          <img src={blog.imagen_header} alt={blog.titulo} style={styles.heroImage} />
        )}

        <div style={styles.layout}>
          <div style={styles.mainContent}>
            <h1 style={styles.title}>{blog.titulo}</h1>
            <p style={styles.metaDescription}>{blog.meta_descripcion}</p>

            <div style={styles.content}>
              {blog.contenido && blog.contenido.map((item, index) => {
                if (item.tipo === "titulo") {
                  return <h1 key={index} style={styles.sectionTitle}>{item.texto}</h1>;
                }
                if (item.tipo === "subtitulo") {
                  return <h3 key={index} style={styles.subtitle}>{item.texto}</h3>;
                }
                if (item.tipo === "apartado") {
                  return <h4 key={index} style={styles.apartadoTitle}>{item.texto}</h4>;
                }
                if (item.tipo === "parrafo") {
                  return (
                    <p key={index} style={styles.paragraph}>
                      {cleanMarkdown(item.texto)}
                    </p>
                  );
                }
                return null;
              })}
            </div>
          </div>

          <aside style={{ 
            ...styles.sidebar, 
            opacity: (isSidebarVisible || isMobile) ? 1 : 0,
            visibility: (isSidebarVisible || isMobile) ? "visible" : "hidden",
            transition: "opacity 0.4s ease, visibility 0.4s ease"
          }}>
            <div style={styles.ctaCard}>
              <h2 style={styles.ctaTitle}>Marketing 360°</h2>
              <p style={styles.ctaSubtitle}>Escala tu empresa con IA</p>
              
              <ul style={styles.featureList}>
                <li style={styles.featureItem}>
                  <span style={styles.check}>✓</span> Diagnóstico gratuito inicial
                </li>
                <li style={styles.featureItem}>
                  <span style={styles.check}>✓</span> Implementación total por nuestro equipo
                </li>
                <li style={styles.featureItem}>
                  <span style={styles.check}>✓</span> Estrategia personalizada
                </li>
                <li style={styles.featureItem}>
                  <span style={styles.check}>✓</span> Garantía de resultados
                </li>
              </ul>

              <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" style={styles.ctaButton}>
                Quiero Asesoría
              </a>
              
              <div style={styles.ctaFooter}>
                <span style={styles.pulse}>●</span> Respuesta rápida vía WhatsApp
              </div>
            </div>

            <div style={styles.infoBox}>
              <h4 style={styles.infoTitle}>Contacto Hicomerce</h4>
              <p style={styles.infoText}>¿Listo para llevar tu marketing al siguiente nivel? Nuestro equipo de expertos está listo para ayudarte.</p>
              <Link to="/contacto" style={styles.infoLink}>Impulsa tu crecimiento hoy →</Link>
            </div>
          </aside>
        </div>

        {blog.imagen_footer && (
          <img 
            ref={footerRef} 
            src={blog.imagen_footer} 
            alt={blog.titulo} 
            style={styles.footerImage} 
          />
        )}
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: "#ffffff",
    padding: "50px 20px",
    minHeight: "100vh",
  },
  container: {
    maxWidth: "1250px",
    margin: "0 auto",
  },
  backLink: {
    display: "inline-block",
    marginBottom: "24px",
    color: "#111",
    textDecoration: "none",
    fontWeight: "600",
  },
  heroImage: {
    width: "100%",
    maxHeight: "500px",
    objectFit: "cover",
    borderRadius: "18px",
    marginBottom: "40px",
  },
  layout: {
    display: "flex",
    gap: "50px",
    flexWrap: "wrap",
    alignItems: "flex-start", // Alineación superior para el sticky
  },
  mainContent: {
    flex: "1 1 700px",
  },
  sidebar: {
    flex: "1 1 300px",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    position: "sticky",
    top: "100px", // Aumentado para evitar solapamiento con el header fijo
    height: "fit-content",
  },

  title: {
    fontSize: "42px",
    lineHeight: "1.2",
    marginBottom: "16px",
    color: "#111",
    fontWeight: "800",
  },
  sectionTitle: {
    fontSize: "32px",
    lineHeight: "1.3",
    marginTop: "20px",
    marginBottom: "10px",
    color: "#111",
  },
  subtitle: {
    fontSize: "24px",
    lineHeight: "1.4",
    marginTop: "30px",
    marginBottom: "12px",
    color: "#222",
    fontWeight: "700",
  },
  apartadoTitle: {
    fontSize: "20px",
    lineHeight: "1.4",
    marginTop: "24px",
    marginBottom: "10px",
    color: "#222",
    fontWeight: "700",
  },
  metaDescription: {
    fontSize: "19px",
    lineHeight: "1.6",
    color: "#555",
    marginBottom: "32px",
    fontWeight: "400",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  paragraph: {
    fontSize: "17px",
    lineHeight: "1.9",
    color: "#333",
    margin: "0 0 16px 0",
    whiteSpace: "pre-line",
  },
  ctaCard: {
    backgroundColor: "#0f172a",
    padding: "32px",
    borderRadius: "24px",
    color: "#fff",
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
  },
  ctaTitle: {
    fontSize: "28px",
    marginBottom: "8px",
    fontWeight: "800",
    background: "linear-gradient(90deg, #fff, #94a3b8)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  ctaSubtitle: {
    fontSize: "16px",
    color: "#94a3b8",
    marginBottom: "24px",
  },
  featureList: {
    listStyle: "none",
    padding: 0,
    margin: "0 0 32px 0",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  featureItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "15px",
    color: "#e2e8f0",
  },
  check: {
    color: "#38bdf8",
    fontWeight: "bold",
  },
  ctaButton: {
    display: "block",
    textAlign: "center",
    padding: "16px",
    backgroundColor: "#ff4d00",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "14px",
    fontWeight: "700",
    fontSize: "16px",
    transition: "transform 0.2s ease",
    marginBottom: "16px",
  },
  ctaFooter: {
    fontSize: "12px",
    color: "#94a3b8",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  pulse: {
    color: "#22c55e",
    fontSize: "14px",
  },
  infoBox: {
    padding: "24px",
    border: "1px solid #e2e8f0",
    borderRadius: "18px",
  },
  infoTitle: {
    fontSize: "18px",
    marginBottom: "12px",
    color: "#111",
  },
  infoText: {
    fontSize: "14px",
    color: "#666",
    lineHeight: "1.6",
    marginBottom: "16px",
  },
  infoLink: {
    color: "#ff4d00",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "14px",
  },
  footerImage: {
    width: "100%",
    borderRadius: "18px",
    marginTop: "60px",
  },
  notFoundSection: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  notFoundContainer: {
    textAlign: "center",
  },
  notFoundTitle: {
    fontSize: "34px",
    marginBottom: "12px",
  },
  notFoundText: {
    fontSize: "18px",
    color: "#666",
    marginBottom: "20px",
  },
  backButton: {
    display: "inline-block",
    padding: "12px 20px",
    backgroundColor: "#111",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "10px",
  },
};




export default BlogDetail;
