const DateCard = ({ date, onEdit, onDelete }) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "1rem",
      marginBottom: "1rem",
      borderRadius: "10px"
    }}>
      <h3>{date.lugar}</h3>
      <p><strong>Fecha:</strong> {new Date(date.fecha).toLocaleDateString()}</p>
      <p>{date.nota}</p>

      {date.foto && (
        <img
          src={date.foto}
          alt={date.lugar}
          width="200"
          style={{ borderRadius: "10px" }}
        />
      )}

      <div style={{ marginTop: "1rem" }}>
        <button onClick={() => onEdit(date)}>Editar</button>
        <button onClick={() => onDelete(date._id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default DateCard;
