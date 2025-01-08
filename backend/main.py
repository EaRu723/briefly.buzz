from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from datetime import datetime
import uvicorn

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Sample data - in a real app, this would come from a database
posts = [
    {
        "id": 1,
        "title": "First Post",
        "content": "This is the content of the first post",
        "created_at": "2024-01-01T12:00:00",
        "author": "John Doe"
    },
    {
        "id": 2,
        "title": "Second Post",
        "content": "This is the content of the second post",
        "created_at": "2024-01-02T14:30:00",
        "author": "Jane Smith"
    }
]

class Post(BaseModel):
    id: int
    title: str
    content: str
    created_at: str
    author: str

@app.get("/")
def read_root():
    return {"message": "Welcome to the Briefly.buzz API"}

@app.get("/api/posts", response_model=List[Post])
def get_posts():
    return posts

@app.get("/api/posts/{post_id}", response_model=Post)
def get_post(post_id: int):
    post = next((post for post in posts if post["id"] == post_id), None)
    if post is None:
        raise HTTPException(status_code=404, detail="Post not found")
    return post

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
