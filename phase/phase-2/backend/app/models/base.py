from datetime import datetime
from sqlmodel import SQLModel, Field
from typing import Optional
from sqlalchemy import Column, DateTime
from sqlalchemy.sql import func

def get_current_time():
    return datetime.utcnow()

class TimestampMixin(SQLModel):
    __abstract__ = True  # This is for SQLModel, we'll handle this differently
    created_at: datetime = Field(default_factory=get_current_time, nullable=False)
    updated_at: datetime = Field(default_factory=get_current_time, nullable=False)
