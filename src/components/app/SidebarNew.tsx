/**
 * Sidebar - Business context navigation
 * Refactored with design tokens, chat history, clean structure
 */

import { motion } from "motion/react";
import { MessageSquare, Package, ShoppingCart, User, LogOut, Settings } from "lucide-react";
import { Stack } from "../ui/stack";
import svgPaths from "../../imports/svg-amotgg95xn";
import { NotificationIndicator } from "./NotificationIndicator";

interface SidebarNewProps {
  activeTab?: 'chat' | 'inventory' | 'orders' | 'settings';
  onTabChange?: (tab: 'chat' | 'inventory' | 'orders' | 'settings') => void;
  onSignOut?: () => void;
  isOpen?: boolean;
  onClose?: () => void;
  notificationCount?: number;
}

export function SidebarNew({
  activeTab = 'chat',
  onTabChange,
  onSignOut,
  isOpen = true,
  onClose,
  notificationCount,
}: SidebarNewProps) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && onClose && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:relative
          inset-y-0 left-0
          z-50
          w-64
          bg-[var(--color-bg-app)]
          border-r border-[var(--color-border-subtle)]
          p-[var(--space-lg)]
          flex flex-col
          gap-[var(--space-xl)]
          transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Brand */}
        <div className="flex items-center gap-[var(--space-3)]">
          <div className="w-8 h-8 bg-[var(--color-accent-primary)] rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 50 50">
              <path d={svgPaths.pa7eb480} fill="white" />
            </svg>
          </div>
          <span className="text-label text-[var(--color-text-primary)]">
            CHIDI
          </span>
        </div>

        {/* Primary Navigation */}
        <nav>
          <Stack gap="xs">
            <SidebarItem
              icon={<MessageSquare className="w-4 h-4" />}
              label="Chat"
              active={activeTab === 'chat'}
              onClick={() => {
                onTabChange?.('chat');
                onClose?.();
              }}
            />
            <SidebarItem
              icon={<Package className="w-4 h-4" />}
              label="Inventory"
              active={activeTab === 'inventory'}
              onClick={() => {
                onTabChange?.('inventory');
                onClose?.();
              }}
            />
            <SidebarItem
              icon={<ShoppingCart className="w-4 h-4" />}
              label="Orders"
              badge="Beta"
              active={activeTab === 'orders'}
              onClick={() => {
                onTabChange?.('orders');
                onClose?.();
              }}
            />
            <SidebarItem
              icon={<Settings className="w-4 h-4" />}
              label="Settings"
              active={activeTab === 'settings'}
              onClick={() => {
                onTabChange?.('settings');
                onClose?.();
              }}
            />
          </Stack>
        </nav>

        {/* Chat History */}
        <div className="flex-1 overflow-auto">
          <div className="mb-[var(--space-2)] text-caption text-[var(--color-text-secondary)] uppercase tracking-wider">
            Recent Chats
          </div>
          <Stack gap="xs">
            <ChatHistoryItem title="Your sales are looking..." />
            <ChatHistoryItem title="Inventory follow-up" />
            <ChatHistoryItem title="Customer message draft" />
          </Stack>
        </div>

        {/* Account Section */}
        <div className="mt-auto border-t border-[var(--color-border-subtle)] pt-[var(--space-md)]">
          <Stack gap="sm">
            <div className="text-body-sm text-[var(--color-text-secondary)]">
              Free plan · Your Business
            </div>
            <button
              onClick={onSignOut}
              className="
                flex items-center gap-[var(--space-2)]
                text-body-sm text-[var(--color-text-secondary)]
                hover:text-[var(--color-text-primary)]
                transition-colors
              "
            >
              <LogOut className="w-4 h-4" />
              Sign out
            </button>
          </Stack>
        </div>
      </aside>
    </>
  );
}

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  badge?: string;
  onClick?: () => void;
}

function SidebarItem({ icon, label, active, badge, onClick }: SidebarItemProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        w-full
        px-[var(--space-3)]
        py-[var(--space-2)]
        rounded-[var(--radius-button)]
        flex items-center justify-between
        transition-colors
        ${
          active
            ? "bg-[var(--color-bg-surface)] text-[var(--color-text-primary)]"
            : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-surface-raised)]"
        }
      `}
    >
      <div className="flex items-center gap-[var(--space-2)]">
        {icon}
        <span className="text-body-sm">{label}</span>
      </div>
      {badge && (
        <span className="text-caption text-[var(--color-accent-primary)]">
          {badge}
        </span>
      )}
    </motion.button>
  );
}

function ChatHistoryItem({ title }: { title: string }) {
  return (
    <button
      className="
        w-full
        px-[var(--space-3)]
        py-[var(--space-2)]
        rounded-[var(--radius-button)]
        text-left
        text-body-sm
        text-[var(--color-text-secondary)]
        hover:bg-[var(--color-bg-surface-raised)]
        transition-colors
        truncate
      "
    >
      {title}
    </button>
  );
}