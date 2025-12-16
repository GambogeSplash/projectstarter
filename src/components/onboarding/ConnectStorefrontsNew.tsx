/**
 * Connect Storefronts - Integration selection screen
 * Refactored to use design tokens and new component structure
 */

import { useState } from "react";
import { AuthLayout } from "../auth/AuthLayout";
import { IntegrationItem } from "./IntegrationItem";
import { PrimaryCTA } from "./PrimaryCTA";
import { Stack } from "../ui/stack";
import { MessageCircle, Instagram, ShoppingBag } from "lucide-react";

interface ConnectStorefrontsProps {
  onComplete: () => void;
}

const integrations = [
  {
    id: "whatsapp",
    name: "WhatsApp Business",
    description: "Sync customer messages automatically",
    icon: <MessageCircle className="w-6 h-6 text-[var(--color-whatsapp)]" />,
  },
  {
    id: "instagram",
    name: "Instagram",
    description: "Manage DMs and orders in one place",
    icon: <Instagram className="w-6 h-6 text-[#E4405F]" />,
  },
  {
    id: "shopify",
    name: "Shopify",
    description: "Track products and inventory",
    icon: <ShoppingBag className="w-6 h-6 text-[var(--color-shopify)]" />,
  },
];

export function ConnectStorefrontsNew({ onComplete }: ConnectStorefrontsProps) {
  const [selected, setSelected] = useState<string[]>([]);

  function toggle(id: string) {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id]
    );
  }

  return (
    <AuthLayout>
      <div className="w-full max-w-md">
        <Stack gap="lg" align="center">
          {/* Header */}
          <Stack gap="sm" className="w-full">
            <h1 className="text-heading-2">Connect your storefronts</h1>
            <p className="text-body text-[var(--color-text-secondary)]">
              CHIDI uses this to organize conversations and inventory.
              You can disconnect anytime.
            </p>
          </Stack>

          {/* Integration List */}
          <Stack gap="sm" className="w-full">
            {integrations.map((item) => (
              <IntegrationItem
                key={item.id}
                name={item.name}
                description={item.description}
                icon={item.icon}
                selected={selected.includes(item.id)}
                onToggle={() => toggle(item.id)}
              />
            ))}
          </Stack>

          {/* CTA */}
          <PrimaryCTA
            label="Continue"
            onClick={onComplete}
            disabled={selected.length === 0}
          />
        </Stack>
      </div>
    </AuthLayout>
  );
}
