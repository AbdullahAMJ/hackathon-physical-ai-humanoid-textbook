import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

// Feature Data
const FeatureList = [
  {
    title: 'Module 1: ROS 2 Foundations',
    description: 'Master the "Nervous System". Nodes, Topics, Services, and DDS communication layers.',
    link: '/docs/Module-1-ROS2/nervous-system',
  },
  {
    title: 'Module 2: The Digital Twin',
    description: 'Simulate physics in Gazebo & Unity. Test algorithms without breaking expensive hardware.',
    link: '/docs/Module-2-Digital-Twin/gazebo-unity',
  },
  {
    title: 'Module 3: NVIDIA Isaac Sim',
    description: 'Train faster than real-time using RTX-powered photorealism and Synthetic Data Generation.',
    link: '/docs/Module-3-Isaac-Sim/ai-brain',
  },
  {
    title: 'Module 4: VLA Models',
    description: 'Vision-Language-Action. Connect LLMs (GPT-4) to robotic actuators for semantic control.',
    link: '/docs/Module-4-VLA/vision-language-action',
  },
  {
    title: 'Hardware Setup',
    description: 'Build the ultimate "Sim-to-Real" lab with RTX 4090 workstations and Jetson Orin edge devices.',
    link: '/docs/Introduction/hardware-setup',
  },
  {
    title: 'Capstone: Housebot',
    description: 'Deploy a fully autonomous humanoid agent to navigate, perceive, and manipulate objects.',
    link: '/docs/Capstone/autonomous-humanoid',
  },
];

function Feature({title, description, link}) {
  return (
    <div className={clsx('col col--4 margin-bottom--lg')}>
      <Link to={link} style={{ textDecoration: 'none' }}>
        <div className="glass-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Heading as="h3" style={{ marginBottom: '0.5rem', color: '#60a5fa' }}>{title}</Heading>
          <p style={{ color: '#94a3b8', flexGrow: 1 }}>{description}</p>
          <div style={{ marginTop: '1rem', fontWeight: '600', color: '#3b82f6' }}>Start Module →</div>
        </div>
      </Link>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero-banner')}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Physical AI & Humanoid Robotics
        </Heading>
        <p className="hero__subtitle">
          From Simulation to Reality.
        </p>
        <div className={clsx('buttons')}>
          <Link
            className="button-gradient"
            to="/docs/Introduction/hardware-setup"> 
            Start Learning →
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="A complete curriculum for Physical AI and Humanoid Robotics.">
      <HomepageHeader />
      <main style={{ padding: '4rem 0', background: 'var(--ifm-background-color)' }}>
        <div className="container">
          <div className="text--center margin-bottom--xl">
            <Heading as="h2" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Master the Future of Embodied Intelligence</Heading>
            <p style={{ fontSize: '1.2rem', color: '#64748b' }}>A comprehensive, open-source textbook for the next generation of roboticists.</p>
          </div>
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}