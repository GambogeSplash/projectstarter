/**
 * Inventory Page View
 * Full-screen inventory management page
 */

"use client";

import { useState, useEffect } from "react";
import { AppShell } from "@/components/app/AppShell";
import { SidebarNew } from "@/components/app/SidebarNew";
import { InventoryLayout } from "@/components/inventory/InventoryLayout";
import { InventoryHeader } from "@/components/inventory/InventoryHeader";
import { InventoryGrid } from "@/components/inventory/InventoryGrid";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductActions } from "@/components/product/ProductActions";
import { ProductMeta } from "@/components/product/ProductMeta";
import { businessState, getProduct } from "@/state/mockBusiness";
import { clearActiveContext } from "@/state/activeContext";
import { ArrowLeft } from "lucide-react";

interface InventoryPageViewProps {
  onNavigate?: (page: 'chat' | 'inventory' | 'orders' | 'settings') => void;
  onSignOut?: () => void;
}

export function InventoryPageView({ onNavigate, onSignOut }: InventoryPageViewProps) {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const selectedProduct = selectedProductId ? getProduct(selectedProductId) : null;

  // Clear context when viewing inventory list
  useEffect(() => {
    if (!selectedProductId) {
      clearActiveContext();
    }
  }, [selectedProductId]);

  const handleTabChange = (tab: 'chat' | 'inventory' | 'orders' | 'settings') => {
    onNavigate?.(tab);
  };

  const handleProductClick = (productId: string) => {
    setSelectedProductId(productId);
  };

  const handleBackToInventory = () => {
    setSelectedProductId(null);
  };

  const handleAskChidi = () => {
    // Navigate to chat with product context already set
    onNavigate?.('chat');
  };

  return (
    <AppShell
      sidebar={
        <SidebarNew
          activeTab="inventory"
          onTabChange={handleTabChange}
          onSignOut={onSignOut}
        />
      }
    >
      <InventoryLayout>
        {selectedProduct ? (
          // Product Detail View
          <>
            <button
              onClick={handleBackToInventory}
              className="
                flex
                items-center
                gap-[var(--space-2)]
                text-[var(--color-text-secondary)]
                hover:text-[var(--color-text-primary)]
                mb-[var(--space-2xl)]
                transition-colors
              "
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Inventory</span>
            </button>

            <div className="max-w-2xl">
              <ProductHero product={selectedProduct} />
              <ProductActions 
                product={selectedProduct} 
                onBackToInventory={handleBackToInventory}
                onAskChidi={handleAskChidi}
              />
              <ProductMeta product={selectedProduct} />
            </div>
          </>
        ) : (
          // Inventory List View
          <>
            <InventoryHeader />
            <InventoryGrid 
              items={businessState.inventory}
              onProductClick={handleProductClick}
            />
          </>
        )}
      </InventoryLayout>
    </AppShell>
  );
}