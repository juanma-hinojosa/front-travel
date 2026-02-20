import DateCard from "./DateCard";

const DateList = ({ dates, onEdit, onDelete }) => {
  if (!dates.length) return <p>No hay dates aún 💔</p>;

  return (
    <div>
      {dates.map((date) => (
        <DateCard
          key={date._id}
          date={date}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default DateList;
