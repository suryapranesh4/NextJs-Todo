import TodoItem from "@/components/TodoItem";
import { prisma } from "@/db";
import Link from "next/link";

export default async function Home() {
  function getTodos() {
    return prisma.todo.findMany();
  }
  const todos = await getTodos();

  async function toggleTodo(id: string, complete: boolean) {
    "use server";

    await prisma.todo.update({ where: { id }, data: { complete } });
  }
  return (
    <>
      <header className="text-2xl flex justify-between items-center mb-4">
        <h1>Todos</h1>
        <Link
          href="/new"
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        >
          New
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </>
  );
}
