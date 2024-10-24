// frontend/src/api/items.js

const API_URL = "http://localhost:8000"; // Your backend URL

export const getAllItems = async () => {
  const response = await fetch(`${API_URL}/get_all_items/`);
  return response.json();
};

export const createItem = async (item) => {
  const response = await fetch(`${API_URL}/items/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
  return response.json();
};

export const updateItem = async (item_id, item) => {
  const response = await fetch(`${API_URL}/items/${item_id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
  return response.json();
};

export const deleteItem = async (item_id) => {
  await fetch(`${API_URL}/items/${item_id}`, {
    method: "DELETE",
  });
};
