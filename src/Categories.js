// src/Categories.js
import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc
} from "firebase/firestore";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({ name: "", description: "" });
  const [editingId, setEditingId] = useState(null);

  // Reference to the "categories" collection
  const colRef = collection(db, "categories");

  // Fetch all categories from Firestore
  async function fetchCategories() {
    try {
      const snapshot = await getDocs(colRef);
      setCategories(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  // Handle form submit (create or update)
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (editingId) {
        const ref = doc(db, "categories", editingId); // Correct usage
        await updateDoc(ref, form);
        setEditingId(null);
      } else {
        await addDoc(colRef, form);
      }
      setForm({ name: "", description: "" });
      fetchCategories();
    } catch (error) {
      console.error("Error saving category:", error);
    }
  }

  // Delete a category by ID
  async function handleDelete(id) {
    try {
      const ref = doc(db, "categories", id);
      await deleteDoc(ref);
      fetchCategories();
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  }

  // Set form for editing
  function handleEdit(cat) {
    setEditingId(cat.id);
    setForm({ name: cat.name, description: cat.description || "" });
  }

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h1>Categories CRUD</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          required
          style={{ marginRight: "10px" }}
        />
        <input
          placeholder="Description"
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
          style={{ marginRight: "10px" }}
        />
        <button type="submit">{editingId ? "Update" : "Create"}</button>
      </form>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {categories.map(c => (
          <li key={c.id} style={{ marginBottom: "10px" }}>
            <b>{c.name}</b> — {c.description}
            <button onClick={() => handleEdit(c)} style={{ marginLeft: "10px" }}>
              Edit
            </button>
            <button onClick={() => handleDelete(c.id)} style={{ marginLeft: "5px" }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
