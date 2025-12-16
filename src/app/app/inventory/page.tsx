/**
 * Inventory Page
 * 
 * PURPOSE:
 * "The Inventory page exists to let users review and adjust product details surfaced by chat."
 * 
 * PHILOSOPHY:
 * - Chat is primary, this is secondary
 * - Calm, visual, scannable
 * - Not analytics-heavy
 * - Supports questions raised by chat
 */

"use client";

import { AppShell } from "@/components/app/AppShell";
import { SidebarNew } from "@/components/app/SidebarNew";
import { InventoryLayout } from "@/components/inventory/InventoryLayout";
import { InventoryHeader } from "@/components/inventory/InventoryHeader";
import { InventoryGrid } from "@/components/inventory/InventoryGrid";
import { businessState } from "@/state/mockBusiness";
import { clearActiveContext } from "@/state/activeContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function InventoryPage() {
  const router = useRouter();

  // Clear context when returning to inventory list
  useEffect(() => {
    clearActiveContext();
  }, []);

  const handleTabChange = (tab: 'chat' | 'inventory' | 'orders' | 'settings') => {
    if (tab === 'chat') {
      router.push('/app');
    } else if (tab === 'inventory') {
      router.push('/app/inventory');
    } else if (tab === 'orders') {
      router.push('/app/orders');
    } else if (tab === 'settings') {
      router.push('/app/settings');
    }
  };

  return (
    <AppShell
      sidebar={
        <SidebarNew
          activeTab="inventory"
          onTabChange={handleTabChange}
        />
      }
    >
      <InventoryLayout>
        <InventoryHeader />
        <InventoryGrid items={businessState.inventory} />
      </InventoryLayout>
    </AppShell>
  );
}
