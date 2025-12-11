from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional

app = FastAPI()

# Enable CORS for frontend
origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str
    selectedText: Optional[str] = None

@app.post("/api/chat")
async def chat_endpoint(request: ChatRequest):
    # Placeholder logic for now
    return {"reply": "I am the AI assistant. RAG is coming soon!"}

@app.get("/health")
async def health_check():
    return {"status": "ok"}