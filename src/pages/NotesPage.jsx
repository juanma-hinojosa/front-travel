import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const API_URL = "https://back-travel.onrender.com/api/love-notes";

const LoveNotePageManager = () => {
  const [notes, setNotes] = useState([]);
  const [form, setForm] = useState({
    de: "",
    para: "",
    nota: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [view, setView] = useState("list");
  const [loading, setLoading] = useState(false);

  // ==========================
  // OBTENER NOTAS
  // ==========================
  const fetchNotes = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_URL);
      const data = await res.json();
      setNotes(data);
    } catch (error) {
      toast.error("Error al obtener notas 💔");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // ==========================
  // MANEJO FORM
  // ==========================
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ==========================
  // CREAR / ACTUALIZAR
  // ==========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const method = editingId ? "PUT" : "POST";
      const url = editingId ? `${API_URL}/${editingId}` : API_URL;

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Error en la petición");

      if (editingId) {
        toast.success("Nota actualizada ✨");
      } else {
        toast.success("Nota creada 💌");
      }

      setForm({ de: "", para: "", nota: "" });
      setEditingId(null);
      fetchNotes();
      setView("list");
    } catch (error) {
      toast.error("Error al guardar la nota ❌");
    }
  };

  // ==========================
  // EDITAR
  // ==========================
  const handleEdit = (note) => {
    setForm({
      de: note.de,
      para: note.para,
      nota: note.nota,
    });
    setEditingId(note._id);
    setView("create");
  };

  // ==========================
  // ELIMINAR
  // ==========================
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "¿Seguro que quieres eliminar esta nota?"
    );
    if (!confirmDelete) return;

    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error();

      toast.success("Nota eliminada 🗑️");
      fetchNotes();
    } catch (error) {
      toast.error("Error al eliminar ❌");
    }
  };

  return (
    <div style={styles.container}>
      <h1 className="playwrite-at-title">💌 Recadinhos e Cartas</h1>

      {/* BOTONES */}
      <div style={styles.nav}>
        <button
          onClick={() => setView("list")}
          style={view === "list" ? styles.activeButton : {}}
        >
          📜 Ver Cartas
        </button>
        <button
          onClick={() => {
            setEditingId(null);
            setForm({ de: "", para: "", nota: "" });
            setView("create");
          }}
          style={view === "create" ? styles.activeButton : {}}
        >
          ✍️ Criar Notinha
        </button>
      </div>

      {/* ===================== */}
      {/* LISTA */}
      {/* ===================== */}
      {view === "list" && (
        <>
          <h2>📜 Todas os Recadinhos e Cartinhas</h2>

          {loading ? (
            <p>Carregando...</p>
          ) : notes.length === 0 ? (
            <p>No hay notas aún.</p>
          ) : (
            notes.map((note) => (
              <div key={note._id} style={styles.card}>
                <p><strong>De:</strong> {note.de}</p>
                <p><strong>Para:</strong> {note.para}</p>
                <p>{note.nota}</p>

                <div style={styles.actions}>
                  <button onClick={() => handleEdit(note)}>
                    Alterar
                  </button>
                  <button onClick={() => handleDelete(note._id)}>
                    Deletar
                  </button>
                </div>
              </div>
            ))
          )}
        </>
      )}

      {/* ===================== */}
      {/* FORM */}
      {/* ===================== */}
      {view === "create" && (
        <>
          <h2>{editingId ? "Editar Nota" : "Crear Nueva Nota"}</h2>

          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="text"
              name="de"
              placeholder="De"
              value={form.de}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="para"
              placeholder="Para"
              value={form.para}
              onChange={handleChange}
              required
            />
            <textarea
              name="nota"
              placeholder="Escribe tu nota..."
              value={form.nota}
              onChange={handleChange}
              required
            />
            <button type="submit">
              {editingId ? "Actualizar Nota" : "Guardar Nota"}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    fontFamily: "Arial",
    padding: "0px 20px",
  },
  nav: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  activeButton: {
    backgroundColor: "#ff4d6d",
    color: "white",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  card: {
    border: "1px solid #ddd",
    padding: "15px",
    marginBottom: "10px",
    borderRadius: "8px",
  },
  actions: {
    marginTop: "10px",
    display: "flex",
    gap: "10px",
  },
};

export default LoveNotePageManager;