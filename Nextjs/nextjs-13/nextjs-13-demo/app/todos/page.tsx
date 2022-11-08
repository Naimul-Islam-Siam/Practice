import TodosList from "./TodosList";

export default function TodosPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-3">Todos Page</h1>
      {/* @ts-ignore */}
      <TodosList />
    </>
  );
};