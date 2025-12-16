/**
 * App Shell - Highest-level layout structure
 * Provides consistent sidebar + main content layout
 */

import { ReactNode } from "react";

interface AppShellProps {
  sidebar: ReactNode;
  children: ReactNode;
}

export function AppShell({ sidebar, children }: AppShellProps) {
  return (
    <div className="
      flex
      h-screen
      bg-[var(--color-bg-app)]
      text-[var(--color-text-primary)]
      overflow-hidden
    ">
      {/* Sidebar */}
      {sidebar}

      {/* Main Content */}
      <main className="
        flex-1
        relative
        overflow-hidden
      ">
        {children}
      </main>
    </div>
  );
}
