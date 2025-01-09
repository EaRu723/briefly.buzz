from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from datetime import datetime
import uvicorn
from articles import posts
from categories import categories

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Post(BaseModel):
    id: int
    title: str
    content: str
    created_at: str
    author: str
    category: str

class Category(BaseModel):
    id: int
    name: str
    path: str

@app.get("/api/posts/{category}", response_model=List[Post])
def get_posts_by_category(category: str):
    if category == "all":
        # Return all posts flattened into a single list
        all_posts = []
        for cat_posts in posts.values():
            all_posts.extend(cat_posts)
        return sorted(all_posts, key=lambda x: x["id"])
    
    if category not in posts:
        raise HTTPException(status_code=404, detail="Category not found")
    return posts[category]

@app.get("/api/categories", response_model=List[Category])
def get_categories():
    return categories

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8001, reload=True)
