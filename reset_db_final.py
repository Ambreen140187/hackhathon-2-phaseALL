import asyncio
from sqlmodel import SQLModel
from app.db import engine
from app.models.user import User
from app.models.task import Task

async def reset_database():
    """Drop and recreate all tables"""
    print("Dropping and recreating database tables...")

    # Drop all tables
    async with engine.begin() as conn:
        await conn.run_sync(SQLModel.metadata.drop_all)

    # Create all tables
    async with engine.begin() as conn:
        await conn.run_sync(SQLModel.metadata.create_all)

    print("Database tables recreated successfully!")

if __name__ == "__main__":
    asyncio.run(reset_database())