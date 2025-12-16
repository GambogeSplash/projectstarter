"use client";

import { motion } from "framer-motion";
import { softSpring } from "@/design-system/motion/transitions";

type Props = {
    businessName?: string;
};

export function SuccessCard({ businessName }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={softSpring}
            className="
        bg-bg-elevated
        rounded-2xl
        p-10
        text-center
        w-full
        max-w-[400px]
      "
        >
            <h1 className="text-text-primary text-xl font-semibold mb-3">
                You're all set{businessName ? `, ${businessName}` : ""}
            </h1>

            <p className="text-text-secondary text-base mb-8">
                Chidi is now ready to help you manage conversations and inventory.
            </p>
        </motion.div>
    );
}
