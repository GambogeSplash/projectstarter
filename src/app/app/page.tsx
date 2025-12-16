/**
 * Chat Dashboard Page (Next.js App Router)
 * Main chat interface for CHIDI
 */

"use client";

import { DashboardComplete } from "@/components/chat/DashboardComplete";
import { useRouter } from "next/navigation";

export default function ChatDashboardPage() {
  const router = useRouter();

  const handleNavigate = (page: 'chat' | 'inventory' | 'orders' | 'settings') => {
    if (page === 'inventory') {
      router.push('/app/inventory');
    } else if (page === 'orders') {
      router.push('/app/orders');
    } else if (page === 'settings') {
      router.push('/app/settings');
    } else {
      router.push('/app');
    }
  };

  const handleSignOut = () => {
    router.push('/');
  };

  return (
    <DashboardComplete
      onNavigate={handleNavigate}
      onSignOut={handleSignOut}
    />
  );
}