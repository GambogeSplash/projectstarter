/**
 * Chat Message - User and AI message bubbles
 * Uses design tokens for consistent styling
 */

import { motion } from "motion/react";
import { fadeInUp, softSpring } from "@/design-system/motion/transitions";
import svgPaths from "../../imports/svg-f6oxiuj9uw";

interface ChatMessageProps {
  text: string;
  sender: 'user' | 'ai';
  timestamp?: Date;
}

export function ChatMessage({ text, sender }: ChatMessageProps) {
  if (sender === 'user') {
    return (
      <motion.div
        initial={fadeInUp.initial}
        animate={fadeInUp.animate}
        transition={softSpring}
        className="flex justify-end mb-[var(--space-md)]"
      >
        <div className="
          bg-[var(--color-bg-surface)]
          rounded-[var(--radius-pill)]
          px-[var(--space-lg)]
          py-[var(--space-3)]
          max-w-[80%]
        ">
          <p className="text-body text-[var(--color-text-primary)]">
            {text}
          </p>
        </div>
      </motion.div>
    );
  }

  // AI message
  return (
    <motion.div
      initial={fadeInUp.initial}
      animate={fadeInUp.animate}
      transition={softSpring}
      className="flex gap-[var(--space-3)] mb-[var(--space-md)]"
    >
      {/* AI Avatar */}
      <div className="shrink-0 w-[27px] h-[27px] bg-[var(--color-accent-primary)] rounded-[7px] flex items-center justify-center">
        <svg className="w-[16px] h-[16px]" fill="none" viewBox="0 0 16 16">
          <path d={svgPaths.pc797300} fill="white" />
        </svg>
      </div>

      {/* AI Message Content */}
      <div className="flex-1">
        <div className="text-body text-[var(--color-text-tertiary)] leading-relaxed">
          {text.split('\n').map((line, index) => (
            <p key={index} className="mb-[var(--space-md)] last:mb-0">{line}</p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
