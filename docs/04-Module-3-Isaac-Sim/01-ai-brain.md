---
title: The AI-Robot Brain (NVIDIA Isaac)
sidebar_label: Module 3 - Isaac Sim
---
# Module 3: The AI-Robot Brain (NVIDIA Isaac)

Focus: Advanced Perception and Synthetic Data.

## 3.1 Why Isaac Sim?
Standard simulators are too slow for modern AI training. Isaac Sim runs on **NVIDIA RTX GPUs**, allowing us to run simulations thousands of times faster than real-time. It uses **USD (Universal Scene Description)**, the same format used by Pixar movies.

## 3.2 Domain Randomization (DR)
The "Reality Gap" is the biggest problem in Physical AI. An AI trained on a clean 3D model of a cup might not recognize a dirty, chipped cup in 4K resolution.

**Solution:** Domain Randomization.
Isaac Sim can randomly alter the scene *every frame* during training:
- **Lighting:** Changes brightness, color, and shadow position.
- **Texture:** Changes the floor from wood to carpet to metal.
- **Distractor Objects:** Spawns random cubes/spheres to confuse the robot.

## 3.3 The Nav2 Stack
Nav2 is the "GPS" for robots. It plans a path from Point A to Point B while avoiding dynamic obstacles.
- **Global Planner:** Uses A* or Dijkstra to find the shortest path on the map.
- **Local Planner:** Uses DWB or TEB to avoid the cat that just walked in front of the robot.
- **Costmaps:** 2D grids representing safe (0) vs. unsafe (255) areas.
