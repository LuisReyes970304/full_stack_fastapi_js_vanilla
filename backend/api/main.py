from fastapi import FastAPI, Depends
from contextlib import asynccontextmanager
from api.database.db import document, fake_db
from api.routes.create_user import router as create_user
from api.routes.update_user import router as update_user
from api.routes.delete_user import router as delete_user
from fastapi.middleware.cors import CORSMiddleware
from api.models.models import UserData


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

@app.get("/", response_model=UserData)
async def root():
    return {"users": fake_db}


app.include_router(create_user)
app.include_router(update_user)
app.include_router(delete_user)



