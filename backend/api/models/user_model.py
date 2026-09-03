from sqlmodel import SQLModel, Field

class User(SQLModel, table=True, name="users"):
    id: int | None = Field(default=None, primary_key=True)
    name: str
    email: str
    password: str
    role: str | None = Field(foreign_key="role.name", default="roles")
    

