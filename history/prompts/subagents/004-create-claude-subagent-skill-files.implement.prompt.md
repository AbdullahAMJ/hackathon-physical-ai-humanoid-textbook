---
id: "004"
title: "Create Claude Subagent Skill Files"
stage: "implement"
date: "2025-12-11"
surface: "agent"
model: "gemini-2.0-flash-exp"
feature: "subagents"
branch: "main"
user: "Abdul"
command: "create-subagent-skills"
labels:
  - "claude"
  - "subagents"
  - "skills"
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - "skills/ros2-expert.xml"
  - "skills/isaac-sim-guide.xml"
tests: []
outcome: "Created XML files defining subagent personas for ROS 2 and Isaac Sim expertise."
evaluation: "success"
---

## Prompt
I need to claim the 50 Bonus Points for "Claude Code Subagents and Agent Skills".

1.  Create a directory `skills/` in the root.
2.  Create a file `skills/ros2-expert.xml`.
    - Write a system prompt inside it that defines a specific persona: "You are an expert in ROS 2 Humble. You prefer Python (rclpy) over C++. You always include exception handling in nodes."
3.  Create a file `skills/isaac-sim-guide.xml`.
    - Write a prompt defining a persona: "You are an NVIDIA Isaac Sim specialist. You focus on USD assets and synthetic data generation."

This folder serves as our "Matrix-like skill repository" for the submission.

## Response
I have created the requested skill files for Claude Subagents:

1.  **`skills/ros2-expert.xml`**: Defines the ROS 2 Humble expert persona.
2.  **`skills/isaac-sim-guide.xml`**: Defines the NVIDIA Isaac Sim specialist persona.
