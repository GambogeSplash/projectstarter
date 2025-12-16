/**
 * Chat Input - Main input for conversing with CHIDI
 * Implements chat philosophy: primary conversation mode, Tools contextual
 */

import { useState } from "react";
import { motion } from "motion/react";
import { fastSpring } from "@/design-system/motion/transitions";
import { Send, Wand2, FileText } from "lucide-react";
import svgPaths from "../../imports/svg-f6oxiuj9uw";

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  disabled?: boolean;
  showTools?: boolean; // Optional: show tools when relevant
}

export function ChatInput({ value, onChange, onSend, disabled, showTools = false }: ChatInputProps) {
  const [showToolsMenu, setShowToolsMenu] = useState(false);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !disabled) {
      onSend();
    }
  };

  return (
    <div className="
      bg-[var(--color-bg-surface)]
      rounded-[var(--radius-card)]
      border
      border-[var(--color-border-default)]
      p-[var(--space-md)]
      relative
    ">
      {/* Input Container */}
      <div className="flex items-end gap-[var(--space-3)]">
        {/* Left Actions - AI Assist & Attach */}
        <div className="flex gap-[var(--space-2)] pb-2">
          <motion.button
            whileTap={{ scale: 0.95 }}
            transition={fastSpring}
            className="
              w-[34px] h-[34px]
              bg-[var(--color-accent-primary)]
              rounded-[var(--radius-button)]
              flex items-center justify-center
              hover:bg-[var(--color-accent-primary-hover)]
              transition-colors
            "
            title="AI Assist"
          >
            <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 20 20">
              <path d={svgPaths.p15616400} fill="white" />
            </svg>
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            transition={fastSpring}
            className="
              w-[34px] h-[34px]
              bg-[var(--color-bg-surface-raised)]
              rounded-[var(--radius-button)]
              border border-[var(--color-border-strong)]
              flex items-center justify-center
              hover:bg-[var(--color-bg-surface-hover)]
              transition-colors
            "
            title="Attach file"
          >
            <FileText className="w-4 h-4 text-[var(--color-text-primary)]" />
          </motion.button>
        </div>

        {/* Input Field */}
        <div className="flex-1">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask CHIDI anything"
            disabled={disabled}
            className="
              w-full
              bg-transparent
              border-none
              outline-none
              text-body
              text-[var(--color-text-primary)]
              placeholder:text-[var(--color-text-secondary)]
              disabled:opacity-50
            "
          />
        </div>

        {/* Right Actions - Tools (contextual) & Send */}
        <div className="flex gap-[var(--space-2)] pb-2">
          {/* Tools - Only show when contextually relevant */}
          {showTools && (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileTap={{ scale: 0.95 }}
              transition={fastSpring}
              onClick={() => setShowToolsMenu(!showToolsMenu)}
              className="
                w-[34px] h-[34px]
                bg-[var(--color-bg-surface-raised)]
                rounded-[var(--radius-button)]
                border border-[var(--color-border-strong)]
                flex items-center justify-center
                hover:bg-[var(--color-bg-surface-hover)]
                transition-colors
              "
              title="Tools"
            >
              <Wand2 className="w-4 h-4 text-[var(--color-text-secondary)]" />
            </motion.button>
          )}

          {/* Send Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            transition={fastSpring}
            onClick={onSend}
            disabled={disabled || !value.trim()}
            className="
              w-[34px] h-[34px]
              bg-white
              rounded-[var(--radius-button)]
              flex items-center justify-center
              hover:bg-gray-100
              transition-colors
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
          >
            <Send className="w-4 h-4 text-black" />
          </motion.button>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="text-caption text-[var(--color-text-secondary)] text-center mt-[var(--space-2)]">
        CHIDI can make mistakes. Check answers.{" "}
        <button className="underline hover:text-[var(--color-text-primary)] transition-colors">
          Learn more
        </button>
      </p>
    </div>
  );
}
