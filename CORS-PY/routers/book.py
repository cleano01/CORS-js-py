from fastapi import APIRouter
import requests
router = APIRouter()

@router.get("/")
async def read_root():
    r =  requests.get('http://localhost:3000/api/book/list')
    return {r.text}


@router.get("/items/{item_id}")
async def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}

