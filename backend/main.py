from fastapi import FastAPI
from contextlib import asynccontextmanager
from database.db import document, fake_db
from routes.create_user import router as create_user
from routes.update_user import router as update_user
from routes.delete_user import router as delete_user
from fastapi.middleware.cors import CORSMiddleware


import json

@asynccontextmanager
async def lifepan(app: FastAPI):
    with open(document, "r") as file:
        data = json.load(file)
    fake_db[:] = data
    yield
    fake_db.clear()

app = FastAPI(lifespan=lifepan)

origins = [
    "http://localhost:5400",
    "https://localhost:5400",
    "http://127.0.0.1:5400",
    "https://127.0.0.1:5400",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"users": fake_db}

app.include_router(create_user)
app.include_router(update_user)
app.include_router(delete_user)



