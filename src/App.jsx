import { useState } from "react";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto bg-zinc-900">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
