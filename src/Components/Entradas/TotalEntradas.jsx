import { useEffect, useState } from "react";
import ProgressViaje from "./ProgressViaje";

const TotalEntradas = () => {
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const meta = 550000

  const obtenerTotal = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "https://back-travel.onrender.com/api/entradas/total"
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.mensaje || "Error al obtener total");
      }

      setTotal(data.total);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerTotal();
  }, []);

  return (
    <div>
      {/* <h2>Total acumulado</h2> */}
      {/* {loading ? <p>Cargando...</p> : <h3 style={{fontSize:'2rem'}} className="poppins-regular" >${parseInt(total)} / ${meta}</h3>} */}

      {loading ? (
        <p>Carregando...</p>
      ) : (
        <>
          <h3 style={{ fontSize: "2rem" }} className="poppins-regular">
            ${parseInt(total)} / ${meta}
          </h3>

          <ProgressViaje total={total} meta={meta} />
        </>
      )}


      <button className="poppins-regular" onClick={obtenerTotal}>Atualizar</button>
    </div>
  );
};

export default TotalEntradas;
