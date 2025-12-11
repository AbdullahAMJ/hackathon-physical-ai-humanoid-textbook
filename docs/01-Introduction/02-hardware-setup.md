---
title: Hardware Lab Setup Guide
sidebar_label: Hardware Setup
---
# Hardware Lab Setup Guide

## 1. The "Digital Twin" Workstation
The most critical component. NVIDIA Isaac Sim is an Omniverse application that requires "RTX" (Ray Tracing) capabilities. Standard laptops will not work.

### GPU Architecture (The Bottleneck)
- **Requirement:** NVIDIA RTX 40-Series (Ada Lovelace) is recommended.
- **VRAM Criticality:** Isaac Sim loads Universal Scene Description (USD) assets into VRAM. A standard humanoid robot asset can be 2-4GB. If you run out of VRAM, the simulation will crash.
- **Minimum:** RTX 4070 Ti (12GB).
- **Ideal:** RTX 4090 (24GB) allows for smoother "Sim-to-Real" training.

### CPU & RAM
- **Physics Threads:** Rigid body dynamics (calculating gravity for 50+ links) is CPU-bound. We recommend Intel Core i9-13900K or AMD Ryzen 9 7950X.
- **Memory:** 64GB DDR5 is the safety baseline. 32GB works but will swap to disk during high-fidelity rendering.
- **OS:** Ubuntu 22.04 LTS. **Do not use Windows 11** for ROS 2 Humble if possible; the latency is too high.

## 2. The "Physical AI" Edge Kit
For the "Physical" part, we use "brains without bodies":
- **The Brain:** NVIDIA Jetson Orin Nano (8GB) or Orin NX (16GB). This is the industry standard for embodied AI.
- **The Eyes:** Intel RealSense D435i. Provides RGB (Color) and Depth (Distance) data. Essential for vSLAM.
- **The Inner Ear:** BNO055 IMU. Often built into the RealSense D435i, but a separate module helps teach IMU calibration.
- **Voice Interface:** ReSpeaker USB Mic Array for the "Voice-to-Action" Whisper integration.
