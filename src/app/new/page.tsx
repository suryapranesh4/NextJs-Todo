import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

async function createTodo(data: FormData) {
  "use server";

  const title = data.get("title")?.valueOf();
  if (typeof title != "string" || title.length == 0)
    throw new Error("Invalid title");

  await prisma.todo.create({ data: { title, complete: false } });
  redirect("/");
}

export default function New() {
  return (
    <>
      <header className="text-2xl flex justify-between items-center mb-4">
        <h1>New</h1>
      </header>
      <form className="flex flex-col gap-2" action={createTodo}>
        <input
          type="text"
          name="title"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <div className="flex gap-1 justify-end">
          <Link
            href=".."
            className="border border-slate-300 text-slate-300 rounded px-2 py-1 hover:bg-slate-700 focus-within:bg-slate-700 outline-none "
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="border border-slate-300 text-slate-300 rounded px-2 py-1 hover:bg-slate-700 focus-within:bg-slate-700 outline-none "
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
}
