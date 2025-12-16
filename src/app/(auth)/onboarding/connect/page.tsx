"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { OnboardingLayout } from "@/components/onboarding/OnboardingLayout";
import { IntegrationItem } from "@/components/onboarding/IntegrationItem";
import { IntegrationList } from "@/components/onboarding/IntegrationList";
import { PrimaryCTA } from "@/components/onboarding/PrimaryCTA";

const integrations = [
    {
        id: "whatsapp",
        name: "WhatsApp Business",
        description: "Sync customer messages automatically",
    },
    {
        id: "instagram",
        name: "Instagram",
        description: "Manage DMs and orders in one place",
    },
    {
        id: "shopify",
        name: "Shopify",
        description: "Track products and inventory",
    },
];

export default function ConnectStorefrontsPage() {
    const router = useRouter();
    const [selected, setSelected] = useState<string[]>([]);

    function toggle(id: string) {
        setSelected((prev) =>
            prev.includes(id)
                ? prev.filter((x) => x !== id)
                : [...prev, id]
        );
    }

    return (
        <OnboardingLayout>
            <div className="w-full flex flex-col items-center">
                <div className="max-w-[400px] w-full mb-8">
                    <h1 className="text-text-primary text-xl font-semibold mb-3">
                        Connect your storefronts
                    </h1>
                    <p className="text-text-secondary text-sm">
                        Chidi uses this to organise conversations and inventory.
                        You can disconnect anytime.
                    </p>
                </div>

                <IntegrationList>
                    {integrations.map((item) => (
                        <IntegrationItem
                            key={item.id}
                            name={item.name}
                            description={item.description}
                            selected={selected.includes(item.id)}
                            onToggle={() => toggle(item.id)}
                        />
                    ))}
                </IntegrationList>

                <PrimaryCTA
                    label="Continue"
                    onClick={() => {
                        if (selected.length > 0) {
                            router.push("/onboarding/success");
                        }
                    }}
                />
            </div>
        </OnboardingLayout>
    );
}
