import { useState, useEffect } from "react";

const LoveNoteForm = ({ onSubmit, initialData = {} }) => {
  const [form, setForm] = useState({
    de: "",
    para: "",
    nota: "",
  });

  useEffect(() => {
    if (initialData._id) {
      setForm(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Guardar</button>
    </form>
  );
};

export default LoveNoteForm;