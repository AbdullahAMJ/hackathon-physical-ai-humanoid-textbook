---
title: Vision-Language-Action (VLA)
sidebar_label: Module 4 - VLA Models
---
# Module 4: Vision-Language-Action (VLA)

The convergence of Large Language Models (LLMs) and Robotics has created a new field: **VLA**.

## 4.1 The Cognitive Loop
How do we turn a vague command like *"Clean the kitchen"* into robot motor movements?

### Step 1: Voice-to-Text
Using **OpenAI Whisper**, we convert the audio waveform to text. This runs locally on the Jetson Orin to reduce latency.

### Step 2: Cognitive Planning (The LLM)
An LLM (like GPT-4o) breaks the high-level command into atomic steps.
- **User:** "Throw away the trash."
- **LLM:** `[locate("trash_can"), pick("trash"), move_to("trash_can"), release()]`

### Step 3: Action Generation
The VLA model translates these semantic steps into specific ROS 2 actions (velocity commands).
- **Zero-Shot Transfer:** Because the LLM knows what "trash" is from the internet, we don't need to train a specific "Trash Detector." We just need an Open-Vocabulary detector like OWL-ViT.
