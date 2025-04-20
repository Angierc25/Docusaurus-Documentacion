import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.customHero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          {siteConfig.title}
        </h1>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.heroButtons}>
          <Link
            className={styles.primaryButton}
            to="/docs/intro">
            Empezar Tutorial 🔍
          </Link>
        </div>
      </div>
      {/* Imagen o SVG personalizado */}
      <div className={styles.heroImage}>
        <img src="/img/undraw_code-inspection_z688.svg" alt="DevTools" />
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Domina el Inspector de Elementos con esta guía práctica">
      <HomepageHeader />
      <main className={styles.customMain}>
        {/* Sección de características personalizadas */}
        <section className={styles.featuresSection}>
          <h2 className={styles.sectionTitle}>¿Qué aprenderás?</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 6V18M18 12H6" stroke="#481e6d" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Inspección en Vivo</h3>
              <p>Edita HTML/CSS en tiempo real.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4V6M12 8V20M4 12H20" stroke="#481e6d" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Debugging</h3>
              <p>Domina la consola de JavaScript.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#481e6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Performance</h3>
              <p>Optimiza tu sitio web.</p>
            </div>
          </div>
        </section>
        
        <section className={styles.ctaSection}>
          <div className={styles.ctaContainer}>
            <h2>¿Listo para empezar?</h2>
            <p>Mejora tus habilidades de desarrollo web con nuestra documentación completa.</p>
            <Link
              className={styles.ctaButton}
              to="/docs/intro">
              Comenzar ahora
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}