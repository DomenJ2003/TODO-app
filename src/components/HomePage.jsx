import { useState } from "react";
import Card from "./Card";
import AddTodoModal from "./modals/AddTodoModal";
import { useSelector } from "react-redux";

function HomePage() {
  const todos = useSelector((state) => state.todo.todoData);

  return (
    <>
      <div className="row">
        {todos.map((todo) => (
          <Card key={todo.ident} todo={todo} />
        ))}
      </div>
      <AddTodoModal />
    </>
  );
}

export default HomePage;
