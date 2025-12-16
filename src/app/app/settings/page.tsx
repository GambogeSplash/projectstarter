/**
 * Settings Page - Minimal, earned, system-safe
 * 
 * PURPOSE:
 * "Settings exist to adjust how CHIDI helps you — not to configure the whole product."
 * 
 * V1 SCOPE (3 sections only):
 * 1. Notifications (control noise)
 * 2. Integrations (what's connected)
 * 3. Account (bare minimum)
 * 
 * WHAT WE DON'T BUILD:
 * ❌ Theme switcher
 * ❌ Language selector
 * ❌ Billing settings
 * ❌ Advanced preferences
 * ❌ "Labs" features
 */

"use client";

import { AppShell } from "@/components/app/AppShell";
import { SidebarNew } from "@/components/app/SidebarNew";
import { InventoryLayout } from "@/components/inventory/InventoryLayout";
import { SettingsSection } from "@/components/settings/SettingsSection";
import { NotificationSetting } from "@/components/settings/NotificationSetting";
import { IntegrationRow } from "@/components/settings/IntegrationRow";
import { AccountRow } from "@/components/settings/AccountRow";
import {
  getPreferences,
  updateNotificationPreference,
} from "@/state/preferences";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SettingsPage() {
  const router = useRouter();
  const [preferences, setPreferences] = useState(getPreferences());

  const handleTabChange = (tab: "chat" | "inventory" | "orders" | "settings") => {
    if (tab === "chat") {
      router.push("/app");
    } else if (tab === "inventory") {
      router.push("/app/inventory");
    } else if (tab === "orders") {
      router.push("/app/orders");
    } else if (tab === "settings") {
      router.push("/app/settings");
    }
  };

  const handleToggleNotification = (
    type: "lowStock" | "newOrder" | "actionCompleted"
  ) => {
    updateNotificationPreference(type, !preferences.notifications[type]);
    setPreferences(getPreferences());
  };

  return (
    <AppShell
      sidebar={
        <SidebarNew activeTab="settings" onTabChange={handleTabChange} />
      }
    >
      <InventoryLayout>
        <div className="max-w-2xl">
          <h1 className="text-[var(--color-text-primary)] mb-[var(--space-2xl)]">
            Settings
          </h1>

          {/* Notifications */}
          <SettingsSection title="Notifications">
            <NotificationSetting
              label="Let me know when inventory is running low"
              description="CHIDI will notify you when products need restocking"
              enabled={preferences.notifications.lowStock}
              onToggle={() => handleToggleNotification("lowStock")}
            />
            <NotificationSetting
              label="Notify me when a new order comes in"
              description="Get notified about incoming customer orders"
              enabled={preferences.notifications.newOrder}
              onToggle={() => handleToggleNotification("newOrder")}
            />
            <NotificationSetting
              label="Tell me when actions are completed"
              description="Confirmation when restocks and tasks finish"
              enabled={preferences.notifications.actionCompleted}
              onToggle={() => handleToggleNotification("actionCompleted")}
            />
          </SettingsSection>

          {/* Integrations */}
          <SettingsSection title="Integrations">
            <IntegrationRow name="Shopify" connected={true} />
            <IntegrationRow name="Etsy" connected={true} />
            <IntegrationRow name="WhatsApp" connected={false} />
            <IntegrationRow name="Instagram" connected={false} />
          </SettingsSection>

          {/* Account */}
          <SettingsSection title="Account">
            <AccountRow
              label="Business name"
              value={preferences.businessName || "My Store"}
            />
            <AccountRow
              label="Email"
              value={preferences.email || "user@example.com"}
            />
            <AccountRow label="Plan" value="Free" />
          </SettingsSection>
        </div>
      </InventoryLayout>
    </AppShell>
  );
}
