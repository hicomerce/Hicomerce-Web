import React from "react";
import { Link } from "react-router-dom";
import styles from './Hero.module.css';

import heroRobotImg from '../../src/assets/Hero/mascot 1.svg';
import heroWorldImg from '../../src/assets/Hero/globe 1.svg';
import heroParticlesImg from '../../src/assets/Hero/points 2.svg';







import cliente1 from '../../src/assets/Clients/logos_clientes_web_220_bocablanca.webp';
import cliente2 from '../../src/assets/Clients/cklass.png';
import cliente3 from '../../src/assets/Clients/logos_clientes_web_220_negromostaza.webp';
import cliente4 from '../../src/assets/Clients/logos_clientes_web_220_deyac.webp';
import cliente5 from '../../src/assets/Clients/logos_clientes_web_220_roue bikes.webp';
import cliente6 from '../../src/assets/Clients/logos_clientes_web_220_xilin.webp';



const partnersLogos = [
  { id: 1, src: cliente1, alt: "Logo de Boca Blanca" },
  { id: 2, src: cliente2, alt: "Logo de Cklass" },
  { id: 3, src: cliente3, alt: "Logo de Negro Mostaza" },
  { id: 4, src: cliente4, alt: "Logo de Deyac" },
  { id: 5, src: cliente5, alt: "Logo de Roue Bikes" },
  { id: 6, src: cliente6, alt: "Logo de Xilin" },
];

function Hero() {
  const extendedLogos = [...partnersLogos, ...partnersLogos];

  return (
    <>
      <section className={styles.heroSection}>
        {/* Imágenes de fondo que no afectan al layout principal */}
        <img src={heroParticlesImg} alt="" className={styles.heroParticles} />
        <img src={heroWorldImg} alt="" className={styles.heroWorld} />

        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1>
              <span>Marketing 360°</span><br></br>potenciado con<br></br>Inteligencia Artificial
            </h1>
            <p>
              Marketing + IA para llevar tu negocio al siguiente nivel. Estrategias personalizadas | Automatización inteligente | Resultados medibles
            </p>
            <Link to="/contacto" className={styles.ctaButton}>
              Solicita Diagnóstico Gratis
            </Link>
          </div>

          {/* Columna Derecha: Robot */}
          <div className={styles.heroRobotContainer}>
            <img src={heroRobotImg} alt="Asistente de Inteligencia Artificial" className={styles.heroRobot} />
          </div>
        </div>
      </section>

      <section className={styles.partnersSection}>
        <div className={styles.logosContainer}>
          <div className={styles.logosTrack}>
            {extendedLogos.map((logo, index) => (
              <img
                key={`${logo.id}-${index}`}
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                decoding="async"
                className={styles.logo}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;