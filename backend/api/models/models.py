from pydantic import BaseModel, EmailStr
from api.models.uses_cases import Name, Password

class UserData(BaseModel):
    users: list[dict]

class User(BaseModel):
    name: Name
    email: EmailStr
    password: Password
    
