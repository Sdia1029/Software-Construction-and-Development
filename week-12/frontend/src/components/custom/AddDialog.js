import React from 'react'
import {
  Dialog, DialogContent, DialogDescription,
  DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog"
import AddDialogForm from './AddDialogForm'

function AddDialog({ onAdd }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm">
          + Add Todo
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Todo</DialogTitle>
          <DialogDescription>Fill in the details below</DialogDescription>
        </DialogHeader>
        <AddDialogForm onAdd={onAdd} />
      </DialogContent>
    </Dialog>
  )
}

export default AddDialog