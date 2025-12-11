import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

type FeatureItem = {
  title: string;
  description: string;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'ROS 2 Foundations',
    description: 'The nervous system. Master Nodes, Topics, Services, and rclpy to control actuators.',
    link: '/docs/Module-1-ROS2/nervous-system',
  },
  {
    title: 'Digital Twin & Physics',
    description: 'Simulate gravity, friction, and sensors in Gazebo and Unity before breaking real hardware.',
    link: '/docs/Module-2-Digital-Twin/gazebo-unity',
  },
  {
    title: 'NVIDIA Isaac Sim',
    description: 'Photorealistic training with RTX Ray Tracing and Synthetic Data Generation.',
    link: '/docs/Module-3-Isaac-Sim/ai-brain',
  },
  {
    title: 'Vision-Language-Action',
    description: 'The brain. Integrate OpenAI Whisper and LLMs to create voice-controlled agents.',
    link: '/docs/Module-4-VLA/vision-language-action',
  },
  {
    title: 'Hardware Lab',
    description: 'Specs for building the Digital Twin Workstation (RTX 4090) and Edge Kit (Jetson Orin).',
    link: '/docs/Introduction/hardware-setup',
  },
  {
    title: 'Capstone Project',
    description: "Build 'The Tidy Housebot'. Deploy a complete autonomous stack to find and manipulate objects.",
    link: '/docs/Capstone/autonomous-humanoid',
  },
];

function Feature({title, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--4 margin-bottom--lg')}>
      <Link to={link} style={{ textDecoration: 'none' }}>
        <div className="feature-card">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
          <span className="feature-link">Start Module</span>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section style={{ padding: '4rem 0' }}>
      <div className="container">
        <div className="text--center margin-bottom--xl">
          <Heading as="h2" style={{ fontSize: '2.5rem' }}>Master the Future of Robotics</Heading>
          <p>A structured curriculum designed for the Era of Embodied Intelligence.</p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
