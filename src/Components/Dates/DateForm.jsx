import { useState, useEffect } from "react";
import { createDate, updateDate } from "../../services/dateService";

const DateForm = ({ selectedDate, onSuccess }) => {
  const [lugar, setLugar] = useState("");
  // const [fecha, setFecha] = useState("");
  const [nota, setNota] = useState("");
  const [foto, setFoto] = useState(null);

  useEffect(() => {
    if (selectedDate) {
      setLugar(selectedDate.lugar);
      // setFecha(selectedDate.fecha?.split("T")[0]);
      setNota(selectedDate.nota || "");
    }
  }, [selectedDate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("lugar", lugar);
    // formData.append("fecha", fecha);
    formData.append("nota", nota);
    if (foto) formData.append("foto", foto);

    if (selectedDate) {
      await updateDate(selectedDate._id, formData);
    } else {
      await createDate(formData);
    }

    onSuccess();
    setLugar("");
    // setFecha("");
    setNota("");
    setFoto(null);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
      <h2>{selectedDate ? "Editar Date" : "Nuevo Date"}</h2>

      <input
        type="text"
        placeholder="Lugar"
        value={lugar}
        onChange={(e) => setLugar(e.target.value)}
        required
      />

      {/* <input
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
        required
      /> */}

      <textarea
        placeholder="Nota"
        value={nota}
        onChange={(e) => setNota(e.target.value)}
      />

      <input
        type="file"
        onChange={(e) => setFoto(e.target.files[0])}
      />

      <button type="submit">
        {selectedDate ? "Actualizar" : "Crear"}
      </button>
    </form>
  );
};

export default DateForm;
