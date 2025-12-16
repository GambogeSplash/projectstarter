/**
 * Product Detail Page
 * 
 * PURPOSE:
 * "Explain why a product matters and let the user act with confidence."
 * 
 * V1 SCOPE:
 * - Product hero (image, name, stock)
 * - Primary action (restock if low)
 * - Ask CHIDI button
 * - Quiet metadata
 * 
 * NOT IN V1:
 * - Revenue analytics
 * - Orders tab
 * - Bulk operations
 */

"use client";

import { AppShell } from "@/components/app/AppShell";
import { SidebarNew } from "@/components/app/SidebarNew";
import { InventoryLayout } from "@/components/inventory/InventoryLayout";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductActions } from "@/components/product/ProductActions";
import { ProductMeta } from "@/components/product/ProductMeta";
import { getProduct } from "@/state/mockBusiness";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProductDetailPage({
  params,
}: {
  params: { productId: string };
}) {
  const router = useRouter();
  const product = getProduct(params.productId);

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

  if (!product) {
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
          <div className="text-center py-[var(--space-4xl)] text-[var(--color-text-secondary)]">
            Product not found
          </div>
        </InventoryLayout>
      </AppShell>
    );
  }

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
        {/* Back Button */}
        <button
          onClick={() => router.push("/app/inventory")}
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

        {/* Product Content */}
        <div className="max-w-2xl">
          <ProductHero product={product} />
          <ProductActions product={product} />
          <ProductMeta product={product} />
        </div>
      </InventoryLayout>
    </AppShell>
  );
}
