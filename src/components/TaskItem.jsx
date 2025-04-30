import React from "react";

const TaskItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <li className="flex justify-between items-center bg-gray-800 p-2 rounded">
      <span
        onClick={() => toggleTask(task.id)}
        className={`cursor-pointer ${task.completed ? "line-through text-gray-400" : ""}`}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)} className="text-red-500">
        ✕
      </button>
    </li>
  );
};

export default TaskItem;