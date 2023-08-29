import React, { useState } from "react";
import { InputTodoSection } from "./component/InputTodoSection";
import { InCompleteTodoSection } from "./component/InCompleteTodoSection";
import { CompleteTodoSection } from "./component/CompleteTodoSection";
import "./styles.css";

export const App = () => {
  const [incompleteTasks, setIncompleteTasks] = useState(["task"]);
  const [completeTasks, setCompleteTasks] = useState(["task"]);
  const [inputTodo, setInputTodo] = useState("");

  const changeInput = (event) => {
    setInputTodo(event.target.value);
  };

  const addTodo = (task) => {
    if (task != null) {
      setIncompleteTasks([...incompleteTasks, task]);
      return;
    }

    if (inputTodo === "") return;

    setIncompleteTasks([...incompleteTasks, inputTodo]);
    setInputTodo("");
  };

  const deleteTodo = (index) => {
    const newTodos = [...incompleteTasks];
    newTodos.splice(index, 1);
    setIncompleteTasks(newTodos);
  };

  const compTodo = (index) => {
    setCompleteTasks([...completeTasks, incompleteTasks[index]]);
    deleteTodo(index);
  };

  const returnTodo = (index) => {
    addTodo(completeTasks[index]);
    const newTodos = [...completeTasks];
    newTodos.splice(index, 1);
    setCompleteTasks(newTodos);
  };
  return (
    <>
      <InputTodoSection
        value={inputTodo}
        onChange={changeInput}
        onClick={addTodo}
      />
      <InCompleteTodoSection
        incompleteTasks={incompleteTasks}
        compTodo={compTodo}
        deleteTodo={deleteTodo}
      />
      <CompleteTodoSection
        completeTasks={completeTasks}
        returnTodo={returnTodo}
      />
    </>
  );
};
