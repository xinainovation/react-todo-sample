import React from "react";

export const InCompleteTodoSection = (props) => {
  const { compTodo, deleteTodo, incompleteTasks } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のtodo</p>
      <ul>
        {incompleteTasks.map((task, index) => {
          return (
            <div key={task} className="list-row">
              <li>{task}</li>
              <button onClick={() => compTodo(index)}>完了</button>
              <button onClick={() => deleteTodo(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
