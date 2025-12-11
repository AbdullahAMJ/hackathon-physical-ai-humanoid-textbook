---
title: The Robotic Nervous System (ROS 2)
sidebar_label: Module 1 - ROS 2
---
# Module 1: The Robotic Nervous System
> "In Physical AI, ROS 2 is the nervous system connecting the brain (VLA) to the muscles (Actuators)."

## 1.1 Architecture: The DDS Layer
Unlike ROS 1, ROS 2 uses **DDS (Data Distribution Service)** for real-time communication. This eliminates the "Master Node" bottleneck (the `roscore` single point of failure).
- **Discovery:** Nodes automatically discover each other on the network via multicasting.
- **QoS (Quality of Service):** We configure sensors to `Best Effort` (low latency, okay to drop packets) and control commands to `Reliable` (guaranteed delivery, with retries).
- **Serialization:** Data is serialized into binary format for efficient transport over UDP/TCP.

## 1.2 Core Concepts

### Nodes (The Workers)
A **Node** is a single executable process that performs a specific task (e.g., `camera_driver`, `path_planner`).
```python
import rclpy
from rclpy.node import Node
from sensor_msgs.msg import LaserScan

class SensorNode(Node):
    def __init__(self):
        super().__init__('lidar_driver')
        # Create a publisher on topic 'scan' with a queue size of 10
        self.pub = self.create_publisher(LaserScan, 'scan', 10)
        self.timer = self.create_timer(0.1, self.timer_callback) # 10Hz

    def timer_callback(self):
        msg = LaserScan()
        # ... populate msg data ...
        self.pub.publish(msg)

def main(args=None):
    rclpy.init(args=args)
    node = SensorNode()
    rclpy.spin(node)
    rclpy.shutdown()
```

### Topics (The Veins)
Topics handle asynchronous data streaming.
- **Publish/Subscribe:** A many-to-many communication model.
- **Interface Definition:** Defined in `.msg` files (e.g., `geometry_msgs/Twist` for velocity).

### Services (The Reflexes)
Services handle synchronous Request/Response interactions.
- **Client/Server:** A one-to-one model. The client waits (blocks or yields) until the server responds.
- **Use Case:** "Reset Simulation", "Calibrate IMU", "Trigger Grasp".

### Actions (The Long-Term Goals)
For tasks that take time (e.g., "Navigate to Kitchen"), we use **Actions**.
- **Feedback:** The server provides periodic updates (e.g., "Distance remaining: 2.5m") while working.
- **Cancelable:** The client can abort the goal mid-execution.

## 1.3 The Execution Model
ROS 2 uses **Executors** to handle callbacks within a process.
- **SingleThreadedExecutor:** Runs callbacks sequentially. Safe but can block.
- **MultiThreadedExecutor:** Runs callbacks in a thread pool. requires thread-safe code.

## 1.4 URDF & TF2
- **URDF (Unified Robot Description Format):** An XML representation of the robot's kinematics (links, joints, limits).
- **TF2 (Transform Library):** Keeps track of multiple coordinate frames (e.g., `map` -> `odom` -> `base_link` -> `camera_link`) over time. This allows us to transform a point detected by the camera into the map frame for navigation.