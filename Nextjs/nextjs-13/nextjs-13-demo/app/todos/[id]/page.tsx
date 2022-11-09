import { Todo } from "../../../typings";
import { notFound } from "next/navigation";

export const dynamicParams = true;

type PageProps = {
   params: {
      id: string
   };   
};

const fetchTodoById = async (id: string) => {
   const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, { next: { revalidate: 60 } });
   const todo: Todo = await response.json();

   return todo;
};

export default async function TodoPage({ params: { id } }: PageProps) {
   const todo = await fetchTodoById(id);

   if(!todo.id) {
      return notFound();
   }

   return (
      <div className="bg-yellow-200 p-10">
         <p>Todo #{todo.id}: {todo.title}</p>
         <p>Completed: {todo.completed ? "Yes" : "No"}</p>
         <p className="border-t border-black mt-5">By User: {todo.userId}</p>
      </div>
   );
};

// generate static site pages for first 10 todos
export async function generateStaticParams() {
   const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
   const todos: Todo[] = await response.json();

   const trimmedTodos = todos.splice(0, 10); // first ten todos

   return trimmedTodos.map((todo) => ({
      id: todo.id.toString()
   }));
};