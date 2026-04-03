function TodoItem({ todo, deleteTodo }) {
  return (
    <li>
      {todo.text}
      <button onClick={() => deleteTodo(todo.id)}>X</button>
    </li>
  );
}
export default TodoItem;
