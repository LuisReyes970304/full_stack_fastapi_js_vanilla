from fastapi import APIRouter
from api.models.models import UserData
from api.repository.user_repository import UserCrud

router = APIRouter()

@router.get("/", response_model=UserData)
async def root():
    users = UserCrud()
    return await users.find_all()