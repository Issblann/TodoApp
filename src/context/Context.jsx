import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
export const PageContext = createContext();

function PageContextProvider({ children }) {
  const [data, setData] = useState("");
  const [pokemon, setPokemon] = useState("");

  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const createTask = (task) => {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: uuidv4(),
        description: task.description,
      },
    ]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <PageContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
        data,
        setData,
        pokemon,
        setPokemon,
      }}
    >
      {children}
    </PageContext.Provider>
  );
}

export default PageContextProvider;
