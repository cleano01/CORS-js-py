from fastapi import FastAPI
from routers import book

app = FastAPI()


print(book)
app.include_router(book.router)
