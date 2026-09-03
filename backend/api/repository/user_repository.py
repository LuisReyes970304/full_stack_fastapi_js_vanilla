from api.models.user_model import User
from sqlmodel import Session, select
from config.db import engine

class UserCrud:
    async def find_all(self):
        with Session(engine) as session:
            statement = select(User)
            results = session.exec(statement)
            for user in results:
                yield user