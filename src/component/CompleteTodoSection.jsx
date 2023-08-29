import React from "react";

export const CompleteTodoSection = (props) => {
  const { completeTasks, returnTodo } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のtodo</p>
      <ul>
        {completeTasks.map((task, index) => {
          return (
            <div key={task} className="list-row">
              <li>{task}</li>
              <button onClick={() => returnTodo(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
