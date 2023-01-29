export function ButtonBg({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex py-1 px-2 -mx-2 relative before:block before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-lg before:-z-10 before:bg-bg-tint-1 before:scale-75 before:opacity-0 [.group:hover>&]:before:opacity-100 [.group:hover>&]:before:scale-100 group-aria-[current=page]:before:scale-100 group-aria-[current=page]:before:opacity-100 group-aria-[current=page]:before:bg-accent group-aria-[current=page]:text-bg before:transition-all transition-colors">
      {children}
    </span>
  );
}
