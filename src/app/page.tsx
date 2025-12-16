/**
 * Root Page - Redirects to main app
 * 
 * ⚠️ WARNING: This Next.js App Router is NOT currently active!
 * 
 * CHIDI uses state-based routing in /App.tsx instead:
 * - switch (currentScreen) { case 'welcome': ... }
 * 
 * These Next.js files are kept for potential future migration,
 * but they are NOT part of the current application flow.
 * 
 * Active entry point: /App.tsx
 * Active routing: State-based (useState + switch statement)
 * 
 * If you're seeing this page, something is misconfigured.
 */

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the main app
    router.push("/app");
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-[var(--color-text-secondary)]">Loading...</div>
    </div>
  );
}