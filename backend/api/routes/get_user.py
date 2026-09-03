from fastapi import APIRouter
from api.dto.user_dto import UserData
from api.repository.user_repository import UserCrud

router = APIRouter()

@router.get("/", response_model=UserData)
async def root():
    users = UserCrud()
    return users.find_all()