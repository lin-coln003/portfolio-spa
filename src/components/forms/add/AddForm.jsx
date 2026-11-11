import React, { useState } from "react";

export default function AddForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      setError("Please fill in both the title and the description.");
      return;
    }

    onAdd({
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
    });
    setTitle("");
    setDescription("");
    setError("");
  };

  return (
    <div className="flex justify-center px-4">
      <div className="border bg-gray-200 mt-3 w-full max-w-4xl rounded-lg p-4">
        <h2 className="font-bold text-2xl mb-3">Add Project</h2>

        <form className="space-y-3" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title" className="font-bold block mb-1">
              Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="Enter project title"
              className="border rounded-md w-full bg-white p-2 outline-none focus:ring-2 focus:ring-blue-400"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="description" className="font-bold block mb-1">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              placeholder="Enter project description"
              className="border w-full rounded-md bg-white p-2 outline-none focus:ring-2 focus:ring-blue-400 resize-y"
            />
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            className="border rounded-md px-5 py-2 bg-white font-semibold cursor-pointer hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}