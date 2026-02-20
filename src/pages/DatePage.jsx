import { useEffect, useState } from "react";
import { getDates, deleteDate } from "../services/dateService";
import DateForm from "../Components/Dates/DateForm";
import DateList from "../Components/Dates/DateList";


const DatesPage = () => {
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  const fetchDates = async () => {
    const data = await getDates();
    setDates(data);
  };

  useEffect(() => {
    fetchDates();
  }, []);

  const handleDelete = async (id) => {
    await deleteDate(id);
    fetchDates();
  };

  const handleSuccess = () => {
    setSelectedDate(null);
    fetchDates();
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h1>💖 Mis Dates</h1>

      <DateForm
        selectedDate={selectedDate}
        onSuccess={handleSuccess}
      />

      <DateList
        dates={dates}
        onEdit={setSelectedDate}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default DatesPage;
