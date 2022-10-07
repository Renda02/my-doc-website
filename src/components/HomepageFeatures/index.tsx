import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
   {
    title: 'User-centric',
    Svg: require('@site/static/img/select.svg').default,
    description: (
      <>
        I am passionate about providing user-centric documentation through understanding users' needs.
      </>
    ),
  },
  {
    title: 'Collaborative',
    Svg: require('@site/static/img/team.svg').default,
    description: (
      <>
       Experience working with cross-functional teams and diplomatic communication while working with subject matter experts.
      </>
    ),
  },
  {
    title: 'Creative Problem-Solver ',
    Svg: require('@site/static/img/absorbed.svg').default,
    description: (
      <>
         I enjoy learning products in-depth and writing to help others. I can adapt to new software, tools, and platforms quickly.
      </>
    ),
  },
 
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
