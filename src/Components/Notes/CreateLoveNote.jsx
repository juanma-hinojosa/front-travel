import { useNavigate } from "react-router-dom";
import LoveNoteForm from "./LoveNoteForm";
import { createLoveNote } from "../../services/loveNoteService";



const CreateLoveNote = () => {
  const navigate = useNavigate();

  const handleCreate = async (data) => {
    await createLoveNote(data);
    navigate("/");
  };

  return (
    <div>
      <h2>Crear Nota</h2>
      <LoveNoteForm onSubmit={handleCreate} />
    </div>
  );
};

export default CreateLoveNote;