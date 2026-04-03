import { useState } from "react";

function TodoInput({ addTodo }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text) return;
    addTodo(text);
    setText("");
  };

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)}></input>
      <button onClick={handleAdd}>Add</button>
    </>
  );
}
export default TodoInput;
