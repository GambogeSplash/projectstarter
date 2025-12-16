/**
 * Account Row - Bare minimum account info
 * 
 * This is not a profile page.
 * Shows only: Business name, Email, Plan, Log out
 */

interface AccountRowProps {
  label: string;
  value: string;
}

export function AccountRow({ label, value }: AccountRowProps) {
  return (
    <div className="flex items-center justify-between p-[var(--space-lg)]">
      <div className="text-caption text-[var(--color-text-secondary)]">
        {label}
      </div>
      <div className="text-body text-[var(--color-text-primary)]">{value}</div>
    </div>
  );
}
