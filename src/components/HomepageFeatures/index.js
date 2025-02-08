import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Plug & Play API',
    description: (
      <>
        Easily integrate your timeseries data.
      </>
    ),
  },
  {
    title: 'Modular Architecture',
    description: (
      <>
        Organized hooks, utilities, and components.
      </>
    ),
  },
  {
    title: 'Optimized Performance ',
    description: (
      <>
        Efficient event handling & data fetching.
      </>
    ),
  },
  {
    title: 'Secure ',
    description: (
      <>
        Built with security best practices
      </>
    ),
  },
  {
    title: 'Pure JavaScript & HTML5 ',
    description: (
      <>
        No dependencies, lightweight & fast
      </>
    ),
  },

];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
     
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
