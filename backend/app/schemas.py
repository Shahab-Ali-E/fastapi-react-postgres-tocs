from typing import List
from pydantic import BaseModel

class ItemBase(BaseModel):
    name: str
    description: str


class ItemCreate(ItemBase):
    pass

class ItemUpdate(ItemBase):
    pass

class Item(ItemBase):
    id: int

class getAllItems(BaseModel):
    items: List[Item] 


