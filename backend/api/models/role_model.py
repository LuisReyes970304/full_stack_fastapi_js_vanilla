from sqlmodel import SQLModel, Field

class Role(SQLModel, table=True, name="roles"):
    id: int = Field(primary_key=True)
    name: str = Field(unique=True, index=True)