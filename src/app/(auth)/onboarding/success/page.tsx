"use client";

import { OnboardingLayout } from "@/components/onboarding/OnboardingLayout";
import { SuccessCard } from "@/components/onboarding/SuccessCard";
import { PrimaryCTA } from "@/components/onboarding/PrimaryCTA";

export default function OnboardingSuccessPage() {
    return (
        <OnboardingLayout>
            <div className="w-full flex flex-col items-center">
                <SuccessCard businessName="Your Store" />

                <PrimaryCTA
                    label="Go to Inbox"
                    onClick={() => {
                        // route to main app later
                    }}
                />
            </div>
        </OnboardingLayout>
    );
}
