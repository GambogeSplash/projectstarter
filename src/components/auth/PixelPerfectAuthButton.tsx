/**
 * Pixel-Perfect Auth Button
 * Extracted from WelcomeScreenPixelPerfect.tsx
 * 
 * EXACT Figma specs:
 * - Height: 44px
 * - Radius: 9px (--radius-button)
 * - Background: Layered gradients (not solid color)
 * - Border: 1px solid #2f2f36
 * - Text: Inter Medium 14px
 */

import { ReactNode } from "react";

interface PixelPerfectAuthButtonProps {
  icon: ReactNode;
  label: string;
  onClick: () => void;
}

export function PixelPerfectAuthButton({ icon, label, onClick }: PixelPerfectAuthButtonProps) {
  return (
    <button
      onClick={onClick}
      className="h-[44px] w-full rounded-[var(--radius-button)] relative flex items-center justify-center transition-opacity hover:opacity-90 active:opacity-80"
      style={{
        background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(90deg, rgb(45, 45, 52) 0%, rgb(45, 45, 52) 100%)',
        border: '1px solid var(--color-button-border)'
      }}
    >
      <div className="flex items-center gap-2">
        {icon}
        <span 
          className="text-white whitespace-nowrap"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: 'normal'
          }}
        >
          {label}
        </span>
      </div>
    </button>
  );
}
