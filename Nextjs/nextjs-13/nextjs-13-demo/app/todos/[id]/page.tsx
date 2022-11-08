import { Todo } from "../../../typings";

type PageProps = {
   params: {
      id: string
   };   
};

const fetchTodoById = async (id: string) => {
   const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
   const todo: Todo = await response.json();

   return todo;
};

export default async function TodoPage({ params: { id } }: PageProps) {
   const todo = await fetchTodoById(id);

   return (
      <div className="bg-yellow-200 p-10">
         <p>Todo #{todo.id}: {todo.title}</p>
         <p>Completed: {todo.completed ? "Yes" : "No"}</p>
         <p className="border-t border-black mt-5">By User: {todo.userId}</p>
      </div>
   );
};