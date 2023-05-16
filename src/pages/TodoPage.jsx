import React from "react";
import TaskForm from "../components/TaskForm/TaskForm";
import TaskList from "../components/TaskList/TaskList";

const Todo = () => {
  return (
    <main className="bg-zinc-900 h-screen mt-20">
      <section className="container mx-auto items-center justify-center flex flex-col bg-zinc-900">
        <TaskForm />
        <TaskList />
      </section>
    </main>
  );
};

export default Todo;
