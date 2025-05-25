// === Frontend (React) ===

// File: frontend/src/App.js
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [articles, setArticles] = useState([]);
  const [form, setForm] = useState({ title: "", content: "", category: "" });

  useEffect(() => {
    axios.get("http://localhost:5000/api/articles").then((res) => {
      setArticles(res.data);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/articles", form);
    const res = await axios.get("http://localhost:5000/api/articles");
    setArticles(res.data);
    setForm({ title: "", content: "", category: "" });
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Health Insurance Education</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          className="border p-2 w-full mb-2"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <textarea
          className="border p-2 w-full mb-2"
          placeholder="Content"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        ></textarea>
        <input
          className="border p-2 w-full mb-2"
          placeholder="Category (e.g., US, Canada, Tips)"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
          Post Article
        </button>
      </form>
      <div>
        {articles.map((a, i) => (
          <div key={i} className="mb-4 border p-2 rounded shadow">
            <h2 className="font-semibold">{a.title}</h2>
            <p className="text-sm text-gray-600 mb-1">Category: {a.category}</p>
            <p>{a.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
