/**
 * Notification Indicator - Quiet, unobtrusive signal
 * 
 * NOT:
 * - Red badge
 * - Animation
 * - Shouting
 * 
 * BUT:
 * - Small dot
 * - Calm presence
 * - "Something new if you want to check"
 */

"use client";

interface NotificationIndicatorProps {
  count: number;
}

export function NotificationIndicator({ count }: NotificationIndicatorProps) {
  if (count === 0) return null;

  return (
    <div className="flex items-center gap-[var(--space-2)]">
      {/* Quiet dot indicator */}
      <div className="
        w-2
        h-2
        rounded-full
        bg-[var(--color-accent-primary)]
      " />
      
      {/* Optional count (very subtle) */}
      {count > 1 && (
        <span className="text-caption text-[var(--color-text-secondary)]">
          {count}
        </span>
      )}
    </div>
  );
}
