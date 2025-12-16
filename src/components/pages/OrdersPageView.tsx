/**
 * Orders Page View
 * Full-screen orders list page
 */

"use client";

import { AppShell } from "@/components/app/AppShell";
import { SidebarNew } from "@/components/app/SidebarNew";
import { InventoryLayout } from "@/components/inventory/InventoryLayout";
import { OrdersHeader } from "@/components/orders/OrdersHeader";
import { OrdersList } from "@/components/orders/OrdersList";
import { businessState } from "@/state/mockBusiness";

interface OrdersPageViewProps {
  onNavigate?: (page: 'chat' | 'inventory' | 'orders' | 'settings') => void;
  onSignOut?: () => void;
}

export function OrdersPageView({ onNavigate, onSignOut }: OrdersPageViewProps) {
  const handleTabChange = (tab: 'chat' | 'inventory' | 'orders' | 'settings') => {
    onNavigate?.(tab);
  };

  return (
    <AppShell
      sidebar={
        <SidebarNew
          activeTab="orders"
          onTabChange={handleTabChange}
          onSignOut={onSignOut}
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
