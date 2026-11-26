import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./FaqSection.module.css";

function FaqSection({
  items = [],
  eyebrow = "PREGUNTAS FRECUENTES",
  title = "Resolvemos tus dudas antes de",
  highlight = "escalar tu negocio",
  subtitle = "Respuestas claras sobre nuestros servicios de Marketing 360°, Inteligencia Artificial para ventas y garantía de resultados.",
  theme = "dark",
  schemaId = "hicomerce-faq-schema",
  showCta = true,
}) {
  const [openIndex, setOpenIndex] = useState(0);

  // Inyecta datos estructurados FAQPage JSON-LD para SEO y motores generativos (GEO)
  useEffect(() => {
    if (!items || items.length === 0) return;

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    };

    const existing = document.getElementById(schemaId);
    if (existing) {
      existing.remove();
    }

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = schemaId;
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById(schemaId);
      if (el) el.remove();
    };
  }, [items, schemaId]);

  if (!items || items.length === 0) return null;

  const toggleItem = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  const isLight = theme === "light";

  return (
    <section
      id="preguntas-frecuentes"
      aria-labelledby={`${schemaId}-heading`}
      className={`${styles.faqSection} ${isLight ? styles.lightTheme : styles.darkTheme}`}
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 id={`${schemaId}-heading`} className={styles.title}>
            {title} <span className={styles.highlight}>{highlight}</span>
          </h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </header>

        <div className={styles.list} role="list">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            const panelId = `${schemaId}-panel-${idx}`;
            const buttonId = `${schemaId}-btn-${idx}`;

            return (
              <article
                key={item.id || idx}
                role="listitem"
                className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
              >
                <h3 className={styles.questionHeading}>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(idx)}
                    className={styles.questionButton}
                  >
                    <span className={styles.questionIndex}>
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className={styles.questionText}>{item.question}</span>
                    <span
                      className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}
                      aria-hidden="true"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </button>
                </h3>

                {/* Siempre presente en el DOM para máxima indexabilidad SEO y citabilidad GEO */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`${styles.answerWrap} ${isOpen ? styles.answerWrapOpen : ""}`}
                >
                  <div className={styles.answerInner}>
                    <p className={styles.answerText}>{item.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {showCta && (
          <div className={styles.ctaBox}>
            <div className={styles.ctaCopy}>
              <p className={styles.ctaTitle}>¿Tienes una pregunta específica sobre tu negocio?</p>
              <p className={styles.ctaDesc}>
                Agenda una videollamada gratuita de 30 minutos con nuestro equipo y recibe un diagnóstico personalizado.
              </p>
            </div>
            <Link to="/contacto" className={styles.ctaButton}>
              Solicita Diagnóstico Gratis
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default FaqSection;
