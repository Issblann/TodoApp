import { useContext, useState } from "react";
import { PageContext } from "../../context/Context";
function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(PageContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) return alert("Ingresa alguna tarea");

    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };
  return (
    <div className="sm:max-w-2xl mb-5 w-ful px-2">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 mt-8">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2"
        />

        <textarea
          placeholder="Escribe tu descripcion"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>

        <button className="bg-indigo-500 px-3 py-1">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
