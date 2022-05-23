export default function ListItemSkeleton() {
  return (
    <li className="flex animate-pulse flex-col gap-2 border-b border-zinc-600 p-3">
      <div className="flex items-center gap-2">
        <div className="h-5 w-1/6 rounded-md bg-zinc-600"></div>
        <div className="h-4 w-20 rounded-md bg-zinc-600"></div>
      </div>
      <p className="h-4 w-1/2 rounded-md bg-zinc-600 text-zinc-400"></p>
      <div className="flex items-center gap-2 text-sm">
        <span className="h-4 w-10 rounded-md bg-zinc-600"></span>
        <span className="h-4 w-10 rounded-md bg-zinc-600"></span>
        <span className="h-4 w-10 rounded-md bg-zinc-600"></span>
      </div>
    </li>
  );
}
