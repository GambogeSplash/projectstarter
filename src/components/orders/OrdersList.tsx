/**
 * Orders List - Chronological list of orders
 * 
 * Simple list, no charts
 * Calm, scannable
 */

import { Order } from "@/state/mockBusiness";
import { OrderRow } from "./OrderRow";

interface OrdersListProps {
  orders: Order[];
}

export function OrdersList({ orders }: OrdersListProps) {
  if (orders.length === 0) {
    return (
      <div className="
        bg-[var(--color-bg-surface)]
        border
        border-[var(--color-border-subtle)]
        rounded-[var(--radius-card)]
        py-[var(--space-4xl)]
        text-center
        text-[var(--color-text-secondary)]
      ">
        No orders yet. I'll let you know when something comes in.
      </div>
    );
  }

  return (
    <div className="
      bg-[var(--color-bg-surface)]
      border
      border-[var(--color-border-subtle)]
      rounded-[var(--radius-card)]
      overflow-hidden
    ">
      {orders.map((order) => (
        <OrderRow
          key={order.id}
          id={order.id}
          customer={order.customerName}
          status={order.status}
          amount={`$${order.amount.toFixed(2)}`}
          date={order.time}
        />
      ))}
    </div>
  );
}
