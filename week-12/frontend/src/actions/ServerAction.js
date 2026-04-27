"use server";

export async function createTodo(title, description) {
  const res = await fetch("http://localhost:3000/todo", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description }),
  });
  if (!res.ok) throw new Error("Failed to create todo");
  return await res.json();
}

export async function deleteTodo(id) {
  const res = await fetch(`http://localhost:3000/todo/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete todo");
  return await res.json();
}

export async function updateTodo(id, title, description) {
  const res = await fetch(`http://localhost:3000/todo/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description }),
  });
  if (!res.ok) throw new Error("Failed to update todo");
  return await res.json();
}