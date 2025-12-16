/**
 * Success Screen - "You're all set" confirmation
 * Handoff moment from onboarding to main app
 */

import { motion } from "motion/react";
import { fadeInUp, softSpring } from "@/design-system/motion/transitions";
import { AuthLayout } from "../auth/AuthLayout";
import { PrimaryCTA } from "./PrimaryCTA";
import { Stack } from "../ui/stack";
import { CheckCircle2 } from "lucide-react";

interface SuccessScreenProps {
  businessName?: string;
  onContinue: () => void;
}

export function SuccessScreen({ businessName, onContinue }: SuccessScreenProps) {
  return (
    <AuthLayout>
      <motion.div
        initial={fadeInUp.initial}
        animate={fadeInUp.animate}
        transition={softSpring}
        className="w-full max-w-md"
      >
        <Stack gap="lg" align="center">
          {/* Success Icon */}
          <div className="w-16 h-16 rounded-full bg-[var(--color-accent-secondary)]/10 flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8 text-[var(--color-accent-secondary)]" />
          </div>

          {/* Content */}
          <div className="bg-[var(--color-bg-surface)] rounded-[var(--radius-card)] p-[var(--space-card-padding-lg)] text-center w-full">
            <Stack gap="md" align="center">
              <h1 className="text-heading-2">
                You're all set{businessName ? `, ${businessName}` : ""}
              </h1>

              <p className="text-body text-[var(--color-text-secondary)]">
                CHIDI is now ready to help you manage conversations and inventory.
              </p>
            </Stack>
          </div>

          {/* CTA */}
          <PrimaryCTA
            label="Go to Dashboard"
            onClick={onContinue}
          />
        </Stack>
      </motion.div>
    </AuthLayout>
  );
}
