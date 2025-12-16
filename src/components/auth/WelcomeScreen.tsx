/**
 * Welcome Screen - First screen users see
 * Refactored to use design tokens
 */

import { useState } from "react";
import { motion } from "motion/react";
import { fadeInUp, softSpring } from "@/design-system/motion/transitions";
import { AuthLayout } from "./AuthLayout";
import { AuthButton } from "./AuthButton";
import { Input } from "../ui/input";
import { Stack } from "../ui/stack";
import svgPaths from "../../imports/svg-amotgg95xn";
import imgShopify from "figma:asset/2667586cd38c65745259f9696dd541557e483dbe.png";

interface WelcomeScreenProps {
  onContinue: () => void;
}

export function WelcomeScreen({ onContinue }: WelcomeScreenProps) {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && email.trim()) {
      onContinue();
    }
  };

  return (
    <AuthLayout>
      <motion.div
        initial={fadeInUp.initial}
        animate={fadeInUp.animate}
        transition={softSpring}
        className="w-full max-w-[488px]"
      >
        <Stack gap="lg" align="center">
          {/* Logo */}
          <div className="bg-[var(--color-accent-primary)] h-[66px] w-[68px] rounded-[22px] relative flex items-center justify-center">
            <svg className="w-[49px] h-[49px]" fill="none" viewBox="0 0 50 50">
              <path d={svgPaths.pa7eb480} fill="white" />
            </svg>
          </div>

          {/* Heading */}
          <Stack gap="sm" align="center">
            <h1 className="text-heading-1 text-center">Welcome to CHIDI</h1>
            <p className="text-body text-[var(--color-text-secondary)] text-center">
              Your AI business assistant for WhatsApp & Instagram
            </p>
          </Stack>

          {/* Auth Options */}
          <Stack gap="md" className="w-full">
            {/* OAuth Buttons */}
            <Stack gap="xs" className="w-full">
              <AuthButton
                icon={
                  <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 14 14">
                    <g clipPath="url(#clip0_google)">
                      <path d={svgPaths.p5a9cc0} fill="#4285F4" />
                      <path d={svgPaths.p1c81fc80} fill="#34A853" />
                      <path d={svgPaths.pe7a1400} fill="#FBBC05" />
                      <path d={svgPaths.p29b60600} fill="#EB4335" />
                    </g>
                    <defs>
                      <clipPath id="clip0_google">
                        <rect fill="white" height="13.98" width="13.98" />
                      </clipPath>
                    </defs>
                  </svg>
                }
                label="Continue with Google"
                onClick={onContinue}
              />

              <AuthButton
                icon={<img src={imgShopify} alt="" className="w-[15px] h-[17px]" />}
                label="Continue with Shopify"
                onClick={onContinue}
              />
            </Stack>

            {/* Divider */}
            <div className="flex items-center gap-[var(--space-2)] w-full">
              <div className="h-px bg-[var(--color-border-subtle)] flex-1" />
              <span className="text-caption text-[var(--color-text-muted)]">OR</span>
              <div className="h-px bg-[var(--color-border-subtle)] flex-1" />
            </div>

            {/* Email Input */}
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleEmailSubmit}
              placeholder="Enter email for magic link"
            />

            {/* Terms */}
            <p className="text-caption text-[var(--color-text-secondary)] text-center">
              By continuing, you agree to CHIDI's Terms & Privacy Policy
            </p>
          </Stack>
        </Stack>
      </motion.div>
    </AuthLayout>
  );
}
