"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarDays,
  Trash2,
  Eye,
  CheckCircle2,
  Circle,
  Sparkles,
  Clock,
  Flag,
  MoreHorizontal,
  Zap,
} from "lucide-react";

export default function TodoList({ todos }) {
  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <AnimatePresence>
        {todos.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl mb-6 shadow-sm">
              <Sparkles className="w-12 h-12 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Create something amazing</h3>
            <p className="text-sm text-gray-500">Your todo list is waiting for inspiration</p>
          </motion.div>
        ) : (
          <div className="space-y-4">
            {/* Stats Bar */}
            <div className="flex items-center justify-between mb-6 px-1">
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs text-gray-600">
                    {todos.filter((_, i) => i < 3).length} active
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-3 h-3 text-yellow-500" />
                  <span className="text-xs text-gray-600">{todos.length} total</span>
                </div>
              </div>
              <Badge variant="outline" className="text-[10px] bg-gradient-to-r from-gray-50 to-white">
                Updated just now
              </Badge>
            </div>

            {/* Todo Items */}
            {todos.map((todo, index) => (
              <TodoItem key={todo.id} todo={todo} index={index} />
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function TodoItem({ todo, index }) {
  const [isCompleted, setIsCompleted] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showViewDialog, setShowViewDialog] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const response = await fetch(`http://localhost:3000/todo/${todo.id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        window.location.reload();
      } else {
        alert("Failed to delete todo");
      }
    } catch (error) {
      alert("Error deleting todo");
    } finally {
      setIsDeleting(false);
      setShowDeleteDialog(false);
    }
  };

  const getPriorityColor = () => {
    const colors = ["emerald", "blue", "purple", "rose", "amber"];
    return colors[index % colors.length];
  };

  const priority = getPriorityColor();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.05 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <Card className="group relative bg-white/90 backdrop-blur-sm border-0 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
          {/* Gradient Border Effect */}
          <div className={`absolute inset-0 bg-gradient-to-r from-${priority}-400/0 to-${priority}-400/0 group-hover:from-${priority}-400/10 group-hover:to-transparent transition-all duration-700`} />
          
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50/0 to-transparent group-hover:via-gray-50/30 transition-all duration-700" />

          <CardContent className="relative p-5">
            <div className="flex items-start gap-4">
              {/* Checkbox with Animation */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsCompleted(!isCompleted)}
                className="mt-1 focus:outline-none"
              >
                <motion.div
                  initial={false}
                  animate={{ scale: isCompleted ? [1, 1.2, 1] : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {isCompleted ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500 drop-shadow-sm" />
                  ) : (
                    <Circle className="w-5 h-5 text-gray-300 group-hover:text-blue-400 transition-colors duration-300" />
                  )}
                </motion.div>
              </motion.button>

              {/* Content */}
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3
                    className={`text-[15px] font-medium tracking-tight ${
                      isCompleted ? "line-through text-gray-400" : "text-gray-800"
                    } transition-all duration-300`}
                  >
                    {todo.title}
                  </h3>
                  
                  {/* Priority Badge */}
                  <Badge
                    className={`text-[9px] font-normal bg-${priority}-50 text-${priority}-600 border-${priority}-200`}
                    style={{
                      backgroundColor: `var(--${priority}-50, #f0fdf4)`,
                      color: `var(--${priority}-600, #16a34a)`,
                    }}
                  >
                    <Flag className="w-2.5 h-2.5 mr-1" />
                    Priority {index + 1}
                  </Badge>
                </div>

                <p
                  className={`text-[13px] ${
                    isCompleted ? "line-through text-gray-400" : "text-gray-500"
                  } leading-relaxed line-clamp-2 transition-all duration-300`}
                >
                  {todo.description || "✨ No description added yet"}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 pt-1">
                  <div className="flex items-center gap-1.5">
                    <CalendarDays className="w-3 h-3 text-gray-400" />
                    <span className="text-[11px] text-gray-400 font-medium">
                      {new Date(todo.createdAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-gray-400" />
                    <span className="text-[11px] text-gray-400">in progress</span>
                  </div>

                  {isCompleted && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="flex items-center gap-1"
                    >
                      <Badge className="bg-gradient-to-r from-green-50 to-emerald-50 text-green-600 border-green-200 text-[9px]">
                        ✓ Completed
                      </Badge>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Action Buttons with Tooltips */}
              <TooltipProvider>
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                        onClick={() => setShowViewDialog(true)}
                      >
                        <Eye className="h-3.5 w-3.5" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xs">View details</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 hover:bg-red-50 hover:text-red-600 transition-all duration-200"
                        onClick={() => setShowDeleteDialog(true)}
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xs">Delete task</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 hover:bg-gray-100"
                      >
                        <MoreHorizontal className="h-3.5 w-3.5 text-gray-400" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xs">More options</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </TooltipProvider>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Delete Dialog - Modern Design */}
      {showDeleteDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trash2 className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Delete Task?</h3>
              <p className="text-sm text-gray-500 mb-6">
                Are you sure you want to delete <span className="font-medium text-gray-700">"{todo.title}"</span>? 
                This action cannot be undone.
              </p>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => setShowDeleteDialog(false)}
                  disabled={isDeleting}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleDelete}
                  disabled={isDeleting}
                  className="flex-1 bg-red-600 hover:bg-red-700 shadow-md"
                >
                  {isDeleting ? "Deleting..." : "Delete"}
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* View Dialog - Modern Design */}
      {showViewDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl p-6 max-w-lg w-full mx-4 shadow-2xl"
          >
            <div className="space-y-5">
              <div>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{todo.title}</h3>
                  <Badge className={isCompleted ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}>
                    {isCompleted ? "Completed" : "In Progress"}
                  </Badge>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Description</label>
                    <div className="mt-2 p-4 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {todo.description || "✨ No description provided"}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Created</label>
                      <p className="text-sm text-gray-700 mt-1">
                        {new Date(todo.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </p>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Priority</label>
                      <p className="text-sm text-gray-700 mt-1">Level {index + 1}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Button onClick={() => setShowViewDialog(false)} className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-gray-800">
                Close
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}