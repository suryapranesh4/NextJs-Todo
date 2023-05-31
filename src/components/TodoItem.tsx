"use client";

type TodoItemProps = {
  title: string;
  id: string;
  complete: boolean;
  toggleTodo: (id: string, compelte: boolean) => void;
};

export default function TodoItem({
  title,
  id,
  complete,
  toggleTodo,
}: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <input
        type="checkbox"
        id={id}
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor="id"
        className="peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
    </li>
  );
}
