/**
 * Order Row - Individual order in the list
 * 
 * Shows facts, not interpretation:
 * - Order ID
 * - Customer
 * - Status
 * - Amount
 * - Date
 */

"use client";

import { motion } from "motion/react";
import { softSpring } from "@/design-system/motion/transitions";

export type OrderStatus = "delivered" | "pending" | "cancelled";

interface OrderRowProps {
  id: string;
  customer: string;
  status: OrderStatus;
  amount: string;
  date: string;
  isNew?: boolean;
}

export function OrderRow({
  id,
  customer,
  status,
  amount,
  date,
  isNew = false,
}: OrderRowProps) {
  const statusColors = {
    delivered: "text-[var(--color-text-success)] bg-[var(--color-bg-success)]",
    pending: "text-[var(--color-text-warning)] bg-[var(--color-bg-warning)]",
    cancelled: "text-[var(--color-text-secondary)] bg-[var(--color-bg-surface)]",
  };

  return (
    <motion.div
      initial={isNew ? { backgroundColor: "var(--color-accent-primary-alpha)" } : false}
      animate={isNew ? { backgroundColor: "transparent" } : false}
      transition={{ duration: 2, ease: "easeOut" }}
      className="
        flex
        items-center
        justify-between
        p-[var(--space-lg)]
        border-b
        border-[var(--color-border-subtle)]
        last:border-b-0
        hover:bg-[var(--color-bg-hover)]
        transition-colors
        cursor-pointer
      "
    >
      {/* Left: Order info */}
      <div className="flex-1">
        <div className="text-body text-[var(--color-text-primary)] mb-[var(--space-1)]">
          #{id}
        </div>
        <div className="text-caption text-[var(--color-text-secondary)]">
          {customer} · {date}
        </div>
      </div>

      {/* Right: Status and amount */}
      <div className="flex items-center gap-[var(--space-lg)]">
        <span
          className={`
            px-[var(--space-3)]
            py-[var(--space-1)]
            rounded-[var(--radius-badge)]
            text-caption
            capitalize
            ${statusColors[status]}
          `}
        >
          {status}
        </span>
        <span className="text-body text-[var(--color-text-primary)] font-medium min-w-[80px] text-right">
          {amount}
        </span>
      </div>
    </motion.div>
  );
}
