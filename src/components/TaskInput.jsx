import React, { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe una tarea"
        className="flex-1 p-2 rounded-l bg-gray-800 border border-gray-600"
      />
      <button type="submit" className="bg-blue-600 px-4 rounded-r">
        Agregar
      </button>
    </form>
  );
};

export default TaskInput;