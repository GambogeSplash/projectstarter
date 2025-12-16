/**
 * Mock Business State - A believable, evolving world
 * 
 * Rules:
 * - Fake data must obey cause → effect → time
 * - No randomness without reason
 * - Things change because of actions
 */

export type InventoryItem = {
  id: string;
  name: string;
  variant?: string;
  stock: number;
  restockThreshold: number;
  price?: string;
  category?: string;
  image?: string;
  sku?: string;
  connectedApps?: string[];
  lastUpdated?: string;
};

export type Order = {
  id: string;
  productName: string;
  customerName: string;
  quantity: number;
  amount: number;
  time: string;
  status: "delivered" | "pending" | "cancelled";
};

export type BusinessState = {
  day: number;
  inventory: InventoryItem[];
  orders: Order[];
};

// Initial believable state
export let businessState: BusinessState = {
  day: 1,
  inventory: [
    {
      id: "dress-black-m",
      name: "Black Dress",
      variant: "Size M",
      stock: 3,
      restockThreshold: 5,
      price: "$50",
      category: "Dresses",
      image: "https://images.unsplash.com/photo-1743079701830-c4a45ddc11a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGRyZXNzJTIwZmFzaGlvbnxlbnwxfHx8fDE3NjU4MTA4ODF8MA&ixlib=rb-4.1.0&q=80&w=400",
      sku: "DRES-BLACK-M",
      connectedApps: ["Shopify", "Etsy"],
      lastUpdated: "2023-10-01T10:00:00Z",
    },
    {
      id: "top-white-s",
      name: "White Top",
      variant: "Size S",
      stock: 8,
      restockThreshold: 5,
      price: "$20",
      category: "Tops",
      image: "https://images.unsplash.com/photo-1765560216839-a7d945dd6a4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHRvcCUyMGZhc2hpb258ZW58MXx8fHwxNzY1ODI4NDIwfDA&ixlib=rb-4.1.0&q=80&w=400",
      sku: "TOP-WHITE-S",
      connectedApps: ["Shopify"],
      lastUpdated: "2023-10-01T10:00:00Z",
    },
    {
      id: "jacket-denim-l",
      name: "Denim Jacket",
      variant: "Size L",
      stock: 1,
      restockThreshold: 4,
      price: "$40",
      category: "Jackets",
      image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW5pbSUyMGphY2tldHxlbnwxfHx8fDE3NjU3MTcxMDZ8MA&ixlib=rb-4.1.0&q=80&w=400",
      sku: "JACKET-DENIM-L",
      connectedApps: ["Etsy"],
      lastUpdated: "2023-10-01T10:00:00Z",
    },
    {
      id: "jeans-blue-32",
      name: "Blue Jeans",
      variant: "32x32",
      stock: 12,
      restockThreshold: 6,
      price: "$30",
      category: "Jeans",
      image: "https://images.unsplash.com/photo-1714143136372-ddaf8b606da7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwamVhbnN8ZW58MXx8fHwxNzY1NzYyMDg2fDA&ixlib=rb-4.1.0&q=80&w=400",
      sku: "JEANS-BLUE-32",
      connectedApps: ["Shopify", "Etsy"],
      lastUpdated: "2023-10-01T10:00:00Z",
    },
    {
      id: "shirt-white-l",
      name: "White Shirt",
      variant: "Large",
      stock: 7,
      restockThreshold: 5,
      price: "$25",
      category: "Shirts",
      image: "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHNoaXJ0fGVufDF8fHx8MTc2NTc3Njg3OXww&ixlib=rb-4.1.0&q=80&w=400",
      sku: "SHIRT-WHITE-L",
      connectedApps: ["Shopify"],
      lastUpdated: "2023-10-01T10:00:00Z",
    },
  ],
  orders: [],
};

/**
 * Get items that are below restock threshold
 */
export function getLowStockItems(): InventoryItem[] {
  return businessState.inventory.filter(
    (item) => item.stock <= item.restockThreshold
  );
}

/**
 * Restock an item (cause → effect)
 */
export function restockItem(id: string, amount = 10): void {
  businessState.inventory = businessState.inventory.map((item) =>
    item.id === id ? { ...item, stock: item.stock + amount } : item
  );
  
  // Resolve low stock notification for this product
  import("./notifications").then(({ resolveNotificationsByContext }) => {
    resolveNotificationsByContext("low_stock", { productId: id });
  });
  
  // Notify action completed
  const product = getProduct(id);
  if (product) {
    import("../services/notificationService").then(({ notifyActionCompleted }) => {
      notifyActionCompleted(
        "Restock completed",
        `Added ${amount} units of ${product.name}`
      );
    });
  }
}

/**
 * Add a new order and reduce stock
 */
export function addOrder(order: Order): void {
  businessState.orders.push(order);

  // Reduce stock when order comes in
  businessState.inventory = businessState.inventory.map((item) =>
    item.name === order.productName
      ? { ...item, stock: Math.max(0, item.stock - order.quantity) }
      : item
  );
}

/**
 * Advance time - simulates passage of day
 */
export function nextDay(): void {
  businessState.day += 1;

  // Simulate an order every other day
  if (businessState.day % 2 === 0) {
    const orderTime = new Date();
    orderTime.setHours(10, 24, 0);

    addOrder({
      id: crypto.randomUUID(),
      productName: "Black Dress",
      customerName: "John Doe",
      quantity: 1,
      amount: 50,
      time: orderTime.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      }),
      status: "pending",
    });
  }
}

/**
 * Get today's orders
 */
export function getTodaysOrders(): Order[] {
  return businessState.orders;
}

/**
 * Get a product by ID
 */
export function getProduct(productId: string): InventoryItem | undefined {
  return businessState.inventory.find((item) => item.id === productId);
}

/**
 * Check if there are any issues today
 */
export function hasIssuesToday(): boolean {
  return getLowStockItems().length > 0 || getTodaysOrders().length > 0;
}

/**
 * Get total sales for a time period (mock data)
 */
export function getSalesSummary() {
  return [
    { day: "Monday", amount: 1240 },
    { day: "Tuesday", amount: 980 },
    { day: "Wednesday", amount: 1560 },
    { day: "Thursday", amount: 1120 },
    { day: "Friday", amount: 2340 },
  ];
}

/**
 * Reset business state (for demos)
 */
export function resetBusinessState(): void {
  businessState = {
    day: 1,
    inventory: [
      {
        id: "dress-black-m",
        name: "Black Dress",
        variant: "Size M",
        stock: 3,
        restockThreshold: 5,
        price: "$50",
        category: "Dresses",
        image: "https://images.unsplash.com/photo-1743079701830-c4a45ddc11a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGRyZXNzJTIwZmFzaGlvbnxlbnwxfHx8fDE3NjU4MTA4ODF8MA&ixlib=rb-4.1.0&q=80&w=400",
        sku: "DRES-BLACK-M",
        connectedApps: ["Shopify", "Etsy"],
        lastUpdated: "2023-10-01T10:00:00Z",
      },
      {
        id: "top-white-s",
        name: "White Top",
        variant: "Size S",
        stock: 8,
        restockThreshold: 5,
        price: "$20",
        category: "Tops",
        image: "https://images.unsplash.com/photo-1765560216839-a7d945dd6a4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHRvcCUyMGZhc2hpb258ZW58MXx8fHwxNzY1ODI4NDIwfDA&ixlib=rb-4.1.0&q=80&w=400",
        sku: "TOP-WHITE-S",
        connectedApps: ["Shopify"],
        lastUpdated: "2023-10-01T10:00:00Z",
      },
      {
        id: "jacket-denim-l",
        name: "Denim Jacket",
        variant: "Size L",
        stock: 1,
        restockThreshold: 4,
        price: "$40",
        category: "Jackets",
        image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW5pbSUyMGphY2tldHxlbnwxfHx8fDE3NjU3MTcxMDZ8MA&ixlib=rb-4.1.0&q=80&w=400",
        sku: "JACKET-DENIM-L",
        connectedApps: ["Etsy"],
        lastUpdated: "2023-10-01T10:00:00Z",
      },
      {
        id: "jeans-blue-32",
        name: "Blue Jeans",
        variant: "32x32",
        stock: 12,
        restockThreshold: 6,
        price: "$30",
        category: "Jeans",
        image: "https://images.unsplash.com/photo-1714143136372-ddaf8b606da7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwamVhbnN8ZW58MXx8fHwxNzY1NzYyMDg2fDA&ixlib=rb-4.1.0&q=80&w=400",
        sku: "JEANS-BLUE-32",
        connectedApps: ["Shopify", "Etsy"],
        lastUpdated: "2023-10-01T10:00:00Z",
      },
      {
        id: "shirt-white-l",
        name: "White Shirt",
        variant: "Large",
        stock: 7,
        restockThreshold: 5,
        price: "$25",
        category: "Shirts",
        image: "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHNoaXJ0fGVufDF8fHx8MTc2NTc3Njg3OXww&ixlib=rb-4.1.0&q=80&w=400",
        sku: "SHIRT-WHITE-L",
        connectedApps: ["Shopify"],
        lastUpdated: "2023-10-01T10:00:00Z",
      },
    ],
    orders: [],
  };
}