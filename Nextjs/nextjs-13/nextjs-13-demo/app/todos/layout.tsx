import TodosList from "./TodosList";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex">
      <div>
         {/* @ts-ignore */}
         <TodosList />
      </div>

      {/* only this portion will re-rendered if a new route of todo is clicked */}
      <div className="flex-1 bg-slate-200">
         {children}
      </div>
    </main>
  );
};