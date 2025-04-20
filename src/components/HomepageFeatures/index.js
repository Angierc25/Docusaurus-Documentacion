import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Inspección en Tiempo Real',
    Svg: require('@site/static/img/undraw_code-inspection_z688.svg').default,
    description: (
      <>
        Aprende a modificar HTML y CSS al instante con el inspector, viendo cambios en vivo sin necesidad de recargar.
      </>
    ),
  },
  {
    title: 'Depuración Profesional',
    Svg: require('@site/static/img/undraw_fixing-bugs.svg').default,
    description: (
      <>
        Domina la consola de JavaScript (<code>console.log</code>, errores) y herramientas de depuración para desarrollo web.
      </>
    ),
  },
  {
    title: 'Optimización Avanzada',
    Svg: require('@site/static/img/undraw_online-test.svg').default,
    description: (
      <>
        Analiza rendimiento, accesibilidad y SEO directamente desde las pestañas de DevTools.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
