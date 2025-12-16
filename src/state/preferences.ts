/**
 * User Preferences - Control how CHIDI helps
 * 
 * Settings exist to adjust how CHIDI helps you,
 * not to configure the whole product.
 */

export type NotificationPreferences = {
  lowStock: boolean;
  newOrder: boolean;
  actionCompleted: boolean;
};

export type UserPreferences = {
  notifications: NotificationPreferences;
  businessName?: string;
  email?: string;
};

let preferences: UserPreferences = {
  notifications: {
    lowStock: true,
    newOrder: true,
    actionCompleted: true,
  },
  businessName: "My Store",
  email: "user@example.com",
};

/**
 * Get current preferences
 */
export function getPreferences(): UserPreferences {
  return preferences;
}

/**
 * Update notification preference
 */
export function updateNotificationPreference(
  type: keyof NotificationPreferences,
  enabled: boolean
): void {
  preferences.notifications[type] = enabled;
}

/**
 * Update business info
 */
export function updateBusinessInfo(info: {
  businessName?: string;
  email?: string;
}): void {
  if (info.businessName !== undefined) {
    preferences.businessName = info.businessName;
  }
  if (info.email !== undefined) {
    preferences.email = info.email;
  }
}

/**
 * Check if a notification type is enabled
 */
export function isNotificationEnabled(
  type: keyof NotificationPreferences
): boolean {
  return preferences.notifications[type];
}
