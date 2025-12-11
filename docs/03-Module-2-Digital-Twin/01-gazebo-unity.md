---
title: The Digital Twin (Gazebo & Unity)
sidebar_label: Module 2 - Digital Twin
---
# Module 2: The Digital Twin

Before we risk breaking a $15,000 robot, we test our AI in a **Digital Twin**—a physics-accurate virtual copy of the real world.

## 2.1 Gazebo Harmonic (Fortress)
Gazebo is the standard simulator for ROS 2. It calculates:
- **Rigid Body Dynamics:** How the robot falls.
- **Collision:** What happens when the robot hits a wall.
- **Friction:** How the wheels grip the floor.

### Troubleshooting "Tunneling"
If a robot arm moves too fast, it might pass through a table between simulation frames. We fix this by increasing the solver iteration count in `physics.yaml` or reducing the max step size.

## 2.2 Unity: High-Fidelity Rendering
While Gazebo is great for physics, Unity is used for **Human-Robot Interaction (HRI)**. It provides photorealistic visuals that allow us to test computer vision algorithms in messy environments.

## 2.3 Simulating Sensors
We don't just simulate the robot; we simulate its eyes and ears:
- **LiDAR:** Simulates laser beams bouncing off objects. We add Gaussian noise to test algorithm robustness.
- **Depth Cameras:** Simulates RGB-D data (Color + Distance).
- **IMUs:** Simulates accelerometers and gyroscopes for balance.
