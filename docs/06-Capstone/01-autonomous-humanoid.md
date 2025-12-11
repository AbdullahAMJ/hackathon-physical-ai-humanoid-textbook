---
title: Capstone Project
sidebar_label: Capstone
---
# Capstone: The Autonomous Humanoid

## 5.1 Project Overview
In this final project, you will deploy a complete AI stack to a simulated humanoid robot.
**Scenario:** "The Tidy Housebot"
**Goal:** The robot starts in the hallway. You will say, *"Go to the living room and find the red ball."*

## 5.2 Success Criteria (100 Points)
1.  **Voice Recognition (20pts):** Robot correctly identifies the command.
2.  **Navigation (30pts):** Robot uses Nav2 to move from Hallway -> Living Room without hitting walls.
3.  **Perception (30pts):** Robot uses its camera and Computer Vision model (YOLO/OWL-ViT) to detect the "Red Ball."
4.  **Manipulation (20pts):** Robot successfully grasps the ball (Simulation only).

## 5.3 Troubleshooting Guide
### "My robot spins in circles!"
**Cause:** AMCL (Localization) has lost track of where it is.
**Fix:** Use the "2D Pose Estimate" tool in Rviz to give it a hint, or increase the particle count in AMCL params.

### "The simulation is running at 5 FPS!"
**Cause:** Your VRAM is full.
**Fix:** Turn off "Real-Time Ray Tracing" in the Isaac Sim render settings and switch to "Eco Mode."
