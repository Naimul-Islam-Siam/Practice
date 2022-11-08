import Link from "next/link";
import { Todo } from "../../typings";

const fetchTodos = async() => {
   const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
   const todos: Todo[] = await response.json();

   return todos;
};

export default async function TodosList() {
   const todos = await fetchTodos();

   return (
      <ul className="list-none">
         {todos.map((todo) => (
            <li key={todo.id}>
               <Link href={`/todos/${todo.id}`}>Todo: {todo.id}</Link>
            </li>
         ))}
      </ul>
   );
};