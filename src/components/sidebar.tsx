export function SidebarButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      className={
        "pl-6 p-2 flex hover:bg-[var(--border)] transition-all duration-200 hover:cursor-pointer items-center gap-2.5"
      }
    >
      {children}
    </button>
  );
}

export function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <aside className="w-60 h-screen text-sm flex flex-col">{children}</aside>
  );
}
