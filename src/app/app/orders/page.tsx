/**
 * Orders Page
 * 
 * PURPOSE:
 * "A calm, chronological record of what happened."
 * 
 * PHILOSOPHY:
 * - Orders are events, not analytics
 * - Chat interprets, orders verify
 * - Answer: "Did anything go wrong?" in under 10 seconds
 * 
 * V1 SCOPE:
 * - Simple list of orders
 * - Status, amount, date
 * - No charts
 * - No analytics
 */

"use client";

import { AppShell } from "@/components/app/AppShell";
import { SidebarNew } from "@/components/app/SidebarNew";
import { InventoryLayout } from "@/components/inventory/InventoryLayout";
import { OrdersHeader } from "@/components/orders/OrdersHeader";
import { OrdersList } from "@/components/orders/OrdersList";
import { businessState } from "@/state/mockBusiness";
import { useRouter } from "next/navigation";

export default function OrdersPage() {
  const router = useRouter();

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
          activeTab="orders"
          onTabChange={handleTabChange}
        />
      }
    >
      <InventoryLayout>
        <OrdersHeader />
        <OrdersList orders={businessState.orders} />
      </InventoryLayout>
    </AppShell>
  );
}
