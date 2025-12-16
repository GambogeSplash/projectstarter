/**
 * Notification Service - Create notifications based on business events
 * 
 * RULES:
 * - Check if notification is enabled in preferences
 * - Don't duplicate unresolved notifications
 * - Auto-resolve when condition no longer exists
 */

import {
  addNotification,
  hasLowStockNotification,
  type Notification,
} from "@/state/notifications";
import { isNotificationEnabled } from "@/state/preferences";
import { getLowStockItems, type InventoryItem } from "@/state/mockBusiness";

/**
 * Check for low stock and create notifications
 */
export function checkLowStockNotifications(): void {
  if (!isNotificationEnabled("lowStock")) return;

  const lowStockItems = getLowStockItems();

  lowStockItems.forEach((item) => {
    // Only notify if we haven't already
    if (!hasLowStockNotification(item.id)) {
      addNotification({
        id: crypto.randomUUID(),
        type: "low_stock",
        title: `${item.name} is running low`,
        message: `Only ${item.stock} units left`,
        context: { productId: item.id },
        resolved: false,
        createdAt: Date.now(),
      });
    }
  });
}

/**
 * Create new order notification
 */
export function notifyNewOrder(orderId: string, productName: string): void {
  if (!isNotificationEnabled("newOrder")) return;

  addNotification({
    id: crypto.randomUUID(),
    type: "new_order",
    title: "New order received",
    message: `Order for ${productName}`,
    context: { orderId },
    resolved: false,
    createdAt: Date.now(),
  });
}

/**
 * Create action completed notification
 */
export function notifyActionCompleted(
  action: string,
  details?: string
): void {
  if (!isNotificationEnabled("actionCompleted")) return;

  addNotification({
    id: crypto.randomUUID(),
    type: "action_completed",
    title: action,
    message: details,
    resolved: false,
    createdAt: Date.now(),
  });
}
