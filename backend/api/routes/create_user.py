from fastapi import APIRouter
from api.database.db import fake_db, document
import json
from api.models.models import User

router = APIRouter()

@router.post("/create_user")
async def create_user(user: User):
    try:
        id = await max_id(fake_db)
    except Exception:
        id = 1
    new_user = {"user_id": id, **user.model_dump()}
    fake_db.append(new_user)
    with open(document, "w") as file:
        json.dump(fake_db, file, indent= 4)
    return {"new_user": new_user}



async def max_id(fake_db: list):
    """
    This is a function that looks for a numeric id and take the bigger of them and add one
    So it become in the new id for the new user.
    """
    data = []
    for user in fake_db:
        data.append(int(user["user_id"]))
    return max(data) + 1