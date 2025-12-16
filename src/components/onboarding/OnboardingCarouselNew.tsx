/**
 * Onboarding Carousel - Feature showcase
 * Refactored to use design tokens and new component structure
 */

import { useState } from "react";
import { AuthLayout } from "../auth/AuthLayout";
import { FeatureCard } from "./FeatureCard";
import { ProgressDots } from "../ui/ProgressDots";
import { PrimaryCTA } from "./PrimaryCTA";
import { Stack } from "../ui/stack";

interface OnboardingCarouselProps {
  onComplete: () => void;
}

const slides = [
  {
    title: "Manage conversations",
    description: "Reply faster and stay organized across WhatsApp and Instagram.",
  },
  {
    title: "Track your inventory",
    description: "Know what's in stock and what's selling — automatically.",
  },
  {
    title: "Run your business calmly",
    description: "CHIDI helps you focus on customers, not chaos.",
  },
];

export function OnboardingCarouselNew({ onComplete }: OnboardingCarouselProps) {
  const [index, setIndex] = useState(0);

  const isLast = index === slides.length - 1;

  const handleNext = () => {
    if (isLast) {
      onComplete();
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <AuthLayout>
      <Stack gap="md" align="center" className="w-full">
        <FeatureCard
          title={slides[index].title}
          description={slides[index].description}
        />

        <ProgressDots total={slides.length} active={index} />

        <PrimaryCTA
          label={isLast ? "Continue" : "Next"}
          onClick={handleNext}
        />
      </Stack>
    </AuthLayout>
  );
}
