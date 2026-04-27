"use client";
import React, { useEffect, useState } from "react";
import AddDialog from "@/components/custom/AddDialog";
import {
  Table, TableBody, TableCell,
  TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel,
  AlertDialogContent, AlertDialogDescription,
  AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deleteTodo, updateTodo } from "@/actions/ServerAction";

export default function Page() {
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDesc, setEditDesc] = useState("");

  const fetchTodos = async () => {
    const res = await fetch("http://localhost:3000/todo");
    const data = await res.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleDelete = async (id) => {
    await deleteTodo(id);
    fetchTodos();
  };

  const handleEditClick = (todo) => {
    setEditId(todo.id);
    setEditTitle(todo.title);
    setEditDesc(todo.description);
  };

  const handleUpdate = async (id) => {
    await updateTodo(id, editTitle, editDesc);
    setEditId(null);
    fetchTodos();
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Todos</h1>
        <AddDialog onAdd={fetchTodos} />
      </div>

      <Table className="w-full border border-gray-200 rounded-lg">
        <TableHeader className="bg-gray-100">
          <TableRow>
            <TableHead className="w-20 text-base font-semibold text-black">ID</TableHead>
            <TableHead className="text-base font-semibold text-black">Todo</TableHead>
            <TableHead className="text-base font-semibold text-black">Description</TableHead>
            <TableHead className="w-24 text-base font-semibold text-black">Edit</TableHead>
            <TableHead className="w-24 text-base font-semibold text-black">Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todos.map((todo) => (
            <TableRow key={todo.id} className="text-base">
              <TableCell>{todo.id}</TableCell>
              <TableCell>
                {editId === todo.id ? (
                  <input
                    className="border px-2 py-1 rounded w-full"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                ) : (
                  todo.title
                )}
              </TableCell>
              <TableCell>
                {editId === todo.id ? (
                  <input
                    className="border px-2 py-1 rounded w-full"
                    value={editDesc}
                    onChange={(e) => setEditDesc(e.target.value)}
                  />
                ) : (
                  todo.description
                )}
              </TableCell>
              <TableCell>
                {editId === todo.id ? (
                  <button
                    onClick={() => handleUpdate(todo.id)}
                    className="text-green-600 hover:underline"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => handleEditClick(todo)}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                )}
              </TableCell>
              <TableCell>
                <AlertDialog>
                  <AlertDialogTrigger className="text-red-600 hover:underline">
                    Delete
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This will permanently delete this todo.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => handleDelete(todo.id)}
                        className="bg-red-600 hover:bg-red-700"
                      >
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}