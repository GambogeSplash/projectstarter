/**
 * Message List - Renders all message types
 * Supports: user messages, AI messages, system actions, contextual previews
 */

import { ChatMessage } from "@/types/chat";
import { ChatMessage as MessageBubble } from "./ChatMessage";
import { SystemActionCard } from "./SystemActionCard";
import { PreviewCard } from "./PreviewCard";

interface MessageListProps {
  messages: ChatMessage[];
  onAction?: (action: string) => void;
  onInlineAction?: (actionId: string) => void;
}

export function MessageList({
  messages,
  onAction,
  onInlineAction,
}: MessageListProps) {
  return (
    <div className="
      flex
      flex-col
      gap-[var(--space-md)]
      w-full
      max-w-2xl
      mx-auto
      py-[var(--space-2xl)]
    ">
      {messages.map((msg) => (
        <div key={msg.id} className="space-y-[var(--space-md)]">
          {/* System Action Card or Regular Message */}
          {msg.role === "system" ? (
            <SystemActionCard
              message={msg}
              onAction={onAction}
              onInlineAction={onInlineAction}
            />
          ) : (
            <MessageBubble
              text={msg.content}
              sender={msg.role}
              timestamp={msg.timestamp}
            />
          )}

          {/* Contextual Preview (if attached to message) */}
          {msg.preview && <PreviewCard preview={msg.preview} />}
        </div>
      ))}
    </div>
  );
}