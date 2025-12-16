/**
 * Settings Section - Container for grouped settings
 */

interface SettingsSectionProps {
  title: string;
  children: React.ReactNode;
}

export function SettingsSection({ title, children }: SettingsSectionProps) {
  return (
    <div className="mb-[var(--space-2xl)]">
      <h2 className="text-[var(--color-text-primary)] mb-[var(--space-lg)]">
        {title}
      </h2>
      <div className="
        bg-[var(--color-bg-surface)]
        border
        border-[var(--color-border-subtle)]
        rounded-[var(--radius-card)]
        divide-y
        divide-[var(--color-border-subtle)]
      ">
        {children}
      </div>
    </div>
  );
}
