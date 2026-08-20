from fastapi import APIRouter
from api.repository.user_repository import UserCrud
from api.models.models import User


router = APIRouter()

@router.post("/create_user")
async def create_user(user: User):
    new_user = UserCrud()
    return new_user.create(user)



