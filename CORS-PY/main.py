from fastapi import FastAPI
from routers import book
from starlette.middleware.cors import CORSMiddleware

app = FastAPI()


origins = ["http://localhosasast:3001"]

app.add_middleware(
    CORSMiddleware,
    allow_origins= origins,
    allow_credentials= True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(book.router)
