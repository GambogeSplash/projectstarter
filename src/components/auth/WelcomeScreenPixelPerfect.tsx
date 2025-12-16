/**
 * Welcome Screen - Pixel-Perfect Figma Implementation
 * Based on IPhone131425.tsx specifications
 * 
 * FIGMA SPECS:
 * - Container: 350px width, centered
 * - Content: 326px width (for text)
 * - Logo: 40px × 39.344px, radius 13.096px
 * - Title: Inter Semi Bold 24px, tracking -0.12px
 * - Subtitle: Inter Regular 14px, tracking 0.14px
 * - Buttons: 44px height, 9px radius
 * - Spacing: 20px, 16px, 10px, 8px, 4px
 */

import { useState } from "react";
import { motion } from "motion/react";
import { fadeInUp, softSpring } from "@/design-system/motion/transitions";
import svgPaths from "../../imports/svg-u78v9s7nvf";
import imgShopify from "figma:asset/2667586cd38c65745259f9696dd541557e483dbe.png";

interface WelcomeScreenPixelPerfectProps {
  onContinue: () => void;
}

export function WelcomeScreenPixelPerfect({ onContinue }: WelcomeScreenPixelPerfectProps) {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && email.trim()) {
      onContinue();
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg-app)] flex items-center justify-center px-5">
      <motion.div
        initial={fadeInUp.initial}
        animate={fadeInUp.animate}
        transition={softSpring}
        className="w-full max-w-[350px] flex flex-col items-center gap-5"
      >
        {/* Logo + Text Section */}
        <div className="flex flex-col items-center gap-[10px] w-full max-w-[326px]">
          {/* Brand Logo - Exact Figma specs */}
          <div className="w-[40px] h-[39.344px] bg-[var(--color-accent-primary)] rounded-[var(--radius-brand-logo)] relative flex items-center justify-center border border-[var(--color-brand-glow)] border-[0.935px]">
            <div className="w-[29.338px] h-[29.338px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
                <path d={svgPaths.p36ca0500} fill="white" />
              </svg>
            </div>
          </div>

          {/* Title + Subtitle */}
          <div className="flex flex-col items-center gap-1 w-full">
            <h1 
              className="w-full text-center text-white"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '24px',
                fontWeight: 600,
                lineHeight: 'normal',
                letterSpacing: '-0.12px'
              }}
            >
              Welcome to CHIDI
            </h1>
            <p 
              className="text-center text-[var(--color-text-secondary)] whitespace-nowrap"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: 'normal',
                letterSpacing: '0.14px'
              }}
            >
              Your AI business assistant for WhatsApp & Instagram
            </p>
          </div>
        </div>

        {/* Auth Buttons + Email Section */}
        <div className="flex flex-col gap-4 w-full">
          {/* OAuth Buttons */}
          <div className="flex flex-col gap-2 w-full">
            {/* Google Button */}
            <button
              onClick={onContinue}
              className="h-[44px] w-full rounded-[var(--radius-button)] relative flex items-center justify-center"
              style={{
                background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(90deg, rgb(45, 45, 52) 0%, rgb(45, 45, 52) 100%)',
                border: '1px solid var(--color-button-border)'
              }}
            >
              <div className="flex items-center gap-2">
                <svg className="w-[13.9824px] h-[13.9824px]" fill="none" viewBox="0 0 14 14">
                  <g clipPath="url(#clip0_google)">
                    <path d={svgPaths.p5a9cc0} fill="#4285F4" />
                    <path d={svgPaths.p1c81fc80} fill="#34A853" />
                    <path d={svgPaths.pe7a1400} fill="#FBBC05" />
                    <path d={svgPaths.p29b60600} fill="#EB4335" />
                  </g>
                  <defs>
                    <clipPath id="clip0_google">
                      <rect fill="white" height="13.9824" width="13.9824" />
                    </clipPath>
                  </defs>
                </svg>
                <span 
                  className="text-white whitespace-nowrap"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    fontWeight: 500,
                    lineHeight: 'normal'
                  }}
                >
                  Continue with Google
                </span>
              </div>
            </button>

            {/* Shopify Button */}
            <button
              onClick={onContinue}
              className="h-[44px] w-full rounded-[var(--radius-button)] relative flex items-center justify-center"
              style={{
                background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(90deg, rgb(45, 45, 52) 0%, rgb(45, 45, 52) 100%)',
                border: '1px solid var(--color-button-border)'
              }}
            >
              <div className="flex items-center gap-2">
                <img 
                  src={imgShopify} 
                  alt="" 
                  className="w-[14.508px] h-[16.546px]"
                />
                <span 
                  className="text-white whitespace-nowrap"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    fontWeight: 500,
                    lineHeight: 'normal'
                  }}
                >
                  Continue with Shopify
                </span>
              </div>
            </button>
          </div>

          {/* Divider with OR */}
          <div className="flex items-center gap-2 w-full">
            <div className="h-px bg-[var(--color-divider)] w-[157px] flex-shrink-0" />
            <span 
              className="text-[var(--color-divider-text)] whitespace-nowrap"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '11px',
                fontWeight: 400,
                lineHeight: 'normal'
              }}
            >
              OR
            </span>
            <div className="h-px bg-[var(--color-divider)] w-[157px] flex-shrink-0" />
          </div>

          {/* Email Input */}
          <div className="flex flex-col gap-[10.211px] w-full">
            <div className="h-[44px] w-full rounded-[var(--radius-input)] relative overflow-hidden border border-[var(--color-accent-primary)] border-[1.021px]">
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(39, 39, 45) 0%, rgb(39, 39, 45) 100%)'
                }}
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={handleEmailSubmit}
                placeholder="Enter email for magic link"
                className="absolute inset-0 bg-transparent text-white px-[14px] placeholder:text-[var(--color-text-secondary)] border-none outline-none"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13.228px',
                  fontWeight: 500
                }}
              />
            </div>

            {/* Terms Text */}
            <p 
              className="text-[var(--color-text-secondary)] text-center w-full max-w-[360.727px]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '12.253px',
                fontWeight: 400,
                lineHeight: '1.6',
                letterSpacing: '0.1225px'
              }}
            >
              By continuing, you agree to CHIDI's Terms & Privacy Policy
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
