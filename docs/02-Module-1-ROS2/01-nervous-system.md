---
title: The Robotic Nervous System (ROS 2)
sidebar_label: Module 1 - ROS 2
---
# Module 1: The Robotic Nervous System (ROS 2)

> "If the AI is the brain, ROS 2 is the nervous system."

## 1.1 The Philosophy of Middleware
Robotics is a "System of Systems." You have a LiDAR sensor updating at 20Hz, a camera at 30Hz, and a motor controller at 1kHz. If you wrote this as a single Python script (`while True:`), the camera lag would cause the motors to stutter.

**ROS 2 (Robot Operating System)** solves this by decoupling processes. It uses **DDS (Data Distribution Service)** to handle the networking layer, allowing "Nodes" to communicate without knowing about each other.

## 1.2 Core Concepts

### Nodes (The Workers)
A **Node** is a single process that performs a specific computation.
- **Best Practice:** Write nodes in Python using `rclpy` for logic, and C++ for heavy perception.
- **Lifecycle:** Nodes have states (Unconfigured, Inactive, Active) to ensure the robot doesn't start moving before the brakes are released.

### Topics (The Veins)
Nodes communicate by passing messages over **Topics**. It uses a Publisher/Subscriber model.
- **Camera Node:** Publishes images to `/camera/image_raw`.
- **Vision Node:** Subscribes to `/camera/image_raw` to detect faces.
- **QoS (Quality of Service):** You can configure topics to be "Best Effort" (drop packets if busy) or "Reliable" (guarantee delivery).

### Services (The Reflexes)
While Topics are for streaming data, **Services** are for synchronous request/response interactions.
- Example: "Take a picture now." (Client sends Request -> Server takes photo -> Server sends Response).

## 1.3 URDF: The Body Schema
To simulate a humanoid, we must describe its physical structure (links and joints) using the **Unified Robot Description Format (URDF)**.
- **Links:** The rigid parts (arm, leg, head).
- **Joints:** The moving parts (servo motors, hinges).
- **Inertial:** Mass and Center of Gravity data (crucial for physics simulation).
