import React from "react";

export const InputTodoSection = (props) => {
  const { value, onChange, onClick } = props;
  return (
    <div className="input-area">
      <input placeholder="input-todo" value={value} onChange={onChange} />
      <button onClick={() => onClick(null)}>追加</button>
    </div>
  );
};
