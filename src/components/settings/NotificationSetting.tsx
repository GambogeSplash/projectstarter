/**
 * Notification Setting - Plain-language notification control
 * 
 * COPY PRINCIPLE:
 * Good: "Let me know when inventory is running low"
 * Bad: "Enable low stock notifications"
 * 
 * We speak like a human assistant.
 */

"use client";

interface NotificationSettingProps {
  label: string;
  description: string;
  enabled: boolean;
  onToggle: () => void;
}

export function NotificationSetting({
  label,
  description,
  enabled,
  onToggle,
}: NotificationSettingProps) {
  return (
    <div className="flex items-center justify-between p-[var(--space-lg)]">
      <div className="flex-1 pr-[var(--space-lg)]">
        <div className="text-body text-[var(--color-text-primary)] mb-[var(--space-1)]">
          {label}
        </div>
        <div className="text-caption text-[var(--color-text-secondary)]">
          {description}
        </div>
      </div>

      {/* Toggle Switch */}
      <button
        onClick={onToggle}
        className={`
          relative
          w-12
          h-6
          rounded-full
          transition-colors
          ${
            enabled
              ? "bg-[var(--color-accent-primary)]"
              : "bg-[var(--color-border)]"
          }
        `}
        aria-label={`Toggle ${label}`}
      >
        <div
          className={`
            absolute
            top-1
            w-4
            h-4
            rounded-full
            bg-white
            transition-transform
            ${enabled ? "translate-x-7" : "translate-x-1"}
          `}
        />
      </button>
    </div>
  );
}
