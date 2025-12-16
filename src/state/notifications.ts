/**
 * Notification System - Signals that invite conversation
 * 
 * CORE CONTRACT:
 * 1. Every notification has context
 * 2. Every notification opens chat
 * 3. Every notification is explainable
 * 4. No repeated nagging
 * 5. Notifications auto-resolve when acted on
 */

export type NotificationType =
  | "low_stock"
  | "new_order"
  | "action_completed";

export type Notification = {
  id: string;
  type: NotificationType;
  title: string;
  message?: string;
  context?: {
    productId?: string;
    orderId?: string;
  };
  resolved: boolean;
  createdAt: number;
};

let notifications: Notification[] = [];

/**
 * Add a new notification
 */
export function addNotification(n: Notification): void {
  // Don't add duplicate unresolved notifications
  const existingUnresolved = notifications.find(
    (existing) =>
      !existing.resolved &&
      existing.type === n.type &&
      JSON.stringify(existing.context) === JSON.stringify(n.context)
  );

  if (existingUnresolved) {
    return; // No nagging
  }

  notifications.unshift(n);
}

/**
 * Get unresolved notifications
 */
export function getNotifications(): Notification[] {
  return notifications.filter((n) => !n.resolved);
}

/**
 * Get all notifications (for debugging)
 */
export function getAllNotifications(): Notification[] {
  return notifications;
}

/**
 * Resolve a notification
 */
export function resolveNotification(id: string): void {
  notifications = notifications.map((n) =>
    n.id === id ? { ...n, resolved: true } : n
  );
}

/**
 * Resolve all notifications of a specific type with matching context
 */
export function resolveNotificationsByContext(
  type: NotificationType,
  context: Notification["context"]
): void {
  notifications = notifications.map((n) =>
    n.type === type && JSON.stringify(n.context) === JSON.stringify(context)
      ? { ...n, resolved: true }
      : n
  );
}

/**
 * Clear all resolved notifications (cleanup)
 */
export function clearResolvedNotifications(): void {
  notifications = notifications.filter((n) => !n.resolved);
}

/**
 * Check if a low stock notification exists for a product
 */
export function hasLowStockNotification(productId: string): boolean {
  return notifications.some(
    (n) =>
      n.type === "low_stock" &&
      !n.resolved &&
      n.context?.productId === productId
  );
}
