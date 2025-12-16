/**
 * Primary CTA - Main action button for onboarding
 * Reusable pattern across all onboarding screens
 */

import { Button } from "../ui/button";

interface PrimaryCTAProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export function PrimaryCTA({ label, onClick, disabled }: PrimaryCTAProps) {
  return (
    <div className="w-full max-w-md mt-[var(--space-md)]">
      <Button
        variant="primary"
        size="lg"
        onClick={onClick}
        disabled={disabled}
        className="w-full"
      >
        {label}
      </Button>
    </div>
  );
}
