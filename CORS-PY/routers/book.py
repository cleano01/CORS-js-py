from fastapi import APIRouter
import requests
router = APIRouter()

@router.get("/")
async def read_root():
    r =  requests.get('http://localhost:3000/api/book/list')
    return {r.text}


@router.get("/book_py")
async def read_item():
    return {"book": "list py"}

