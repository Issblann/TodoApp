import TaskCard from "../TaskCard/TaskCard";
import { TaskContext } from "../../context/TaskContext";
// import { useLocalStorage } from "./UseLocalStorage";
import { useContext } from "react";
function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return (
      <h1 className="text-white text-4xl font-bold text-center">
        No hay tareas aun
      </h1>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-4 p-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
