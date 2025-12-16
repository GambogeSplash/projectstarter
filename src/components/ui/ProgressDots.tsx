/**
 * Progress Dots - Carousel/stepper indicator
 * Uses design tokens for consistent styling
 */

interface ProgressDotsProps {
  total: number;
  active: number;
}

export function ProgressDots({ total, active }: ProgressDotsProps) {
  return (
    <div className="flex justify-center gap-[var(--space-2)]">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`
            h-2 w-2 rounded-full transition-colors
            ${i === active ? "bg-[var(--color-accent-primary)]" : "bg-[var(--color-border-subtle)]"}
          `}
        />
      ))}
    </div>
  );
}