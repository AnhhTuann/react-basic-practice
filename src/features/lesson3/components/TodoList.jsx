import TodoItem from "./TodoItem";

function TodoList({ todos, deleleTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleleTodo} />
      ))}
    </ul>
  );
}
export default TodoList;
