// frontend/src/components/ItemsList.js

import React, { useState, useEffect } from "react";
import { getAllItems } from "../api/items";

const ItemsList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const data = await getAllItems();
      setItems(data.items);
    };
    fetchItems();
  }, []);

  return (
    <div>
      <h2>Items List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemsList;
