"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { OnboardingLayout } from "@/components/onboarding/OnboardingLayout";
import { FeatureCard } from "@/components/onboarding/FeatureCard";
import { ProgressDots } from "@/components/onboarding/ProgressDots";
import { PrimaryCTA } from "@/components/onboarding/PrimaryCTA";

const slides = [
    {
        title: "Manage conversations",
        description: "Reply faster and stay organised across WhatsApp and Instagram.",
    },
    {
        title: "Track your inventory",
        description: "Know what's in stock and what's selling — automatically.",
    },
    {
        title: "Run your business calmly",
        description: "Chidi helps you focus on customers, not chaos.",
    },
];

export default function OnboardingPage() {
    const router = useRouter();
    const [index, setIndex] = useState(0);

    const isLast = index === slides.length - 1;

    return (
        <OnboardingLayout>
            <div className="w-full flex flex-col items-center">
                <AnimatePresence mode="wait">
                    <FeatureCard
                        key={index}
                        title={slides[index].title}
                        description={slides[index].description}
                    />
                </AnimatePresence>

                <ProgressDots total={slides.length} active={index} />

                <PrimaryCTA
                    label={isLast ? "Continue" : "Next"}
                    onClick={() => {
                        if (isLast) {
                            router.push("/onboarding/connect");
                        } else {
                            setIndex(index + 1);
                        }
                    }}
                />
            </div>
        </OnboardingLayout>
    );
}
