import { useState } from "react";

const CrearEntrada = () => {
  const [numero, setNumero] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!numero) return alert("Ingresa un número");

    try {
      setLoading(true);

      const response = await fetch(
        "https://back-travel.onrender.com/api/entradas",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ numero: Number(numero) }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.mensaje || "Error al crear entrada");
      }

      setNumero("");
      // onEntradaCreada(); // refrescar total o lista

    } catch (error) {
      console.error(error);
      alert("Error al crear entrada");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear Entrada</h2>

      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        placeholder="Ingrese un número"
      />

      <button type="submit" disabled={loading}>
        {loading ? "Guardando..." : "Guardar"}
      </button>
    </form>
  );
};

export default CrearEntrada;
