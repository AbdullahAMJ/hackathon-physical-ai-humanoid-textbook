---
id: "003"
title: "Implement Frontend Chat Widget"
stage: "implement"
date: "2025-12-11"
surface: "agent"
model: "gemini-2.0-flash-exp"
feature: "frontend"
branch: "main"
user: "Abdul"
command: "implement-chat-widget"
labels:
  - "react"
  - "tailwind"
  - "docusaurus"
  - "chat-widget"
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - "tailwind.config.js"
  - "src/components/ChatWidget/index.tsx"
  - "src/theme/Root.js"
tests: []
outcome: "Implemented ChatWidget component and registered it globally via swizzled Root theme component."
evaluation: "success"
---

## Prompt
Now let's build the Frontend Chat Widget in Docusaurus.

1.  Create a new component file: `src/components/ChatWidget/index.tsx`.
    - It should be a floating button (bottom-right).
    - When clicked, it opens a small chat window.
    - It must capture text input and send a POST request to `http://127.0.0.1:8000/api/chat`.
    - Handle the "selectedText" requirement: Use `window.getSelection().toString()` to grab any text the user highlighted on the book page and send it with the message.
    - Use Tailwind CSS for styling (make it look modern and blue).

2.  Register this component in `src/theme/Root.js` (create this file if missing) so the chat widget appears globally on every page of the textbook.

## Response
I have implemented the frontend chat widget:

1.  **`tailwind.config.js`**: Updated content configuration to scan `src` directory for Tailwind classes.
2.  **`src/components/ChatWidget/index.tsx`**: Created the ChatWidget component.
    -   Features a toggleable floating button.
    -   Captures user input and selected text from the page.
    -   Sends POST requests to the backend API.
    -   Displays user messages and assistant responses.
    -   Styled with Tailwind CSS.
3.  **`src/theme/Root.js`**: Created this file (swizzled Docusaurus Root) to globally render the `ChatWidget` on all pages.
