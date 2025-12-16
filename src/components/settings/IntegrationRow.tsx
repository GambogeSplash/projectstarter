/**
 * Integration Row - Reference, not management
 * 
 * Shows what's connected, gives confidence, offers disconnect.
 * No sync buttons. No advanced mapping.
 */

"use client";

interface IntegrationRowProps {
  name: string;
  connected: boolean;
  onDisconnect?: () => void;
}

export function IntegrationRow({
  name,
  connected,
  onDisconnect,
}: IntegrationRowProps) {
  return (
    <div className="flex items-center justify-between p-[var(--space-lg)]">
      <div className="text-body text-[var(--color-text-primary)]">{name}</div>
      
      <div className="flex items-center gap-[var(--space-lg)]">
        <span
          className={`
            text-caption
            ${
              connected
                ? "text-[var(--color-text-success)]"
                : "text-[var(--color-text-secondary)]"
            }
          `}
        >
          {connected ? "Connected" : "Not connected"}
        </span>
        
        {connected && onDisconnect && (
          <button
            onClick={onDisconnect}
            className="
              text-caption
              text-[var(--color-text-secondary)]
              hover:text-[var(--color-text-primary)]
              transition-colors
            "
          >
            Disconnect
          </button>
        )}
      </div>
    </div>
  );
}
