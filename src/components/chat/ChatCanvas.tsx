/**
 * Chat Canvas - The heart of CHIDI
 * Clean, calm space for conversation
 */

import { ReactNode } from "react";

interface ChatCanvasProps {
  children: ReactNode;
}

export function ChatCanvas({ children }: ChatCanvasProps) {
  return (
    <div className="
      h-full
      flex
      flex-col
      items-center
      justify-center
      px-[var(--space-2xl)]
    ">
      {children}
    </div>
  );
}
