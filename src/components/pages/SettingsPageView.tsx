/**
 * Settings Page View
 * Full-screen settings page
 */

"use client";

import { useState } from "react";
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

interface SettingsPageViewProps {
  onNavigate?: (page: 'chat' | 'inventory' | 'orders' | 'settings') => void;
  onSignOut?: () => void;
}

export function SettingsPageView({ onNavigate, onSignOut }: SettingsPageViewProps) {
  const [preferences, setPreferences] = useState(getPreferences());

  const handleTabChange = (tab: "chat" | "inventory" | "orders" | "settings") => {
    onNavigate?.(tab);
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
        <SidebarNew 
          activeTab="settings" 
          onTabChange={handleTabChange}
          onSignOut={onSignOut}
        />
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
