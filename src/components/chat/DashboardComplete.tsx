/**
 * Dashboard Complete - Full implementation with Golden Flow
 * Shows: system actions, inline actions, contextual previews, empty states, believable data
 */

import { useState, useEffect } from "react";
import { AppShell } from "../app/AppShell";
import { SidebarNew } from "../app/SidebarNew";
import { ChatCanvas } from "./ChatCanvas";
import { ChatEmpty } from "./ChatEmpty";
import { MessageList } from "./MessageList";
import { ChatInput } from "./ChatInput";
import { ChatMessage } from "@/types/chat";
import {
  getLowStockItems,
  restockItem,
  hasIssuesToday,
  getSalesSummary,
  getTodaysOrders,
  businessState,
  getProduct,
} from "@/state/mockBusiness";
import { generateSummary, generateExplanation, isAIAvailable, generateFallbackSummary } from "@/services/ai";
import { getActiveContext } from "@/state/activeContext";
import { getNotifications } from "@/state/notifications";
import { checkLowStockNotifications } from "@/services/notificationService";

interface DashboardCompleteProps {
  onNavigate?: (page: 'chat' | 'inventory' | 'orders' | 'settings') => void;
  onSignOut?: () => void;
}

export function DashboardComplete({ onNavigate, onSignOut }: DashboardCompleteProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [hasShownGreeting, setHasShownGreeting] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);

  // Check for low stock notifications on mount
  useEffect(() => {
    checkLowStockNotifications();
    setNotificationCount(getNotifications().length);
  }, []);

  // Show greeting on mount (Golden Flow Step 1)
  useEffect(() => {
    if (!hasShownGreeting) {
      const hour = new Date().getHours();
      const greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
      
      const initialMessages: ChatMessage[] = [
        {
          id: "sys-greeting",
          role: "system",
          content: `${greeting}. I'm keeping an eye on your business.`,
        },
      ];

      // Context awareness: If user just viewed a product, acknowledge it
      const context = getActiveContext();
      if (context?.type === "product") {
        const product = getProduct(context.productId);
        if (product) {
          initialMessages.push({
            id: "sys-context",
            role: "system",
            content: `You're looking at ${product.name}. I can help if you need anything.`,
          });
        }
      }
      
      setMessages(initialMessages);
      setHasShownGreeting(true);
    }
  }, [hasShownGreeting]);

  // Handle sending messages
  const handleSendMessage = () => {
    if (!inputValue.trim() || isTyping) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue("");
    setIsTyping(true);

    // THE GOLDEN FLOW: "Anything I should know today?"
    if (currentInput.toLowerCase().includes("anything")) {
      handleGoldenFlow();
      return;
    }

    // Other interactions
    setTimeout(() => {
      const input = currentInput.toLowerCase();
      let responses: ChatMessage[] = [];

      // CONTEXTUAL QUESTIONS: If user is viewing a product
      const context = getActiveContext();
      if (context?.type === "product") {
        const product = getProduct(context.productId);
        
        if (product) {
          // "Why is this low?"
          if (input.includes("why") && (input.includes("low") || input.includes("stock"))) {
            responses.push({
              id: `asst-${Date.now()}`,
              role: "assistant",
              content: `${product.name} is running low because it has been selling steadily and hasn't been restocked yet. You currently have ${product.stock} units, and you usually keep at least ${product.restockThreshold}.`,
            });
            setMessages((prev) => [...prev, ...responses]);
            setIsTyping(false);
            return;
          }

          // "Should I restock?"
          if (input.includes("restock") || input.includes("should i")) {
            const isLow = product.stock <= product.restockThreshold;
            
            if (isLow) {
              responses.push(
                {
                  id: `asst-${Date.now()}`,
                  role: "assistant",
                  content: `Yes, ${product.name} is below your usual threshold. I'd recommend restocking soon.`,
                },
                {
                  id: `sys-${Date.now()}`,
                  role: "system",
                  content: `Want me to restock ${product.name}?`,
                  inlineActions: [
                    { id: "confirm_restock_product", label: "Restock" },
                    { id: "cancel", label: "Not now" },
                  ],
                }
              );
            } else {
              responses.push({
                id: `asst-${Date.now()}`,
                role: "assistant",
                content: `${product.name} looks good right now. You have ${product.stock} units in stock.`,
              });
            }
            
            setMessages((prev) => [...prev, ...responses]);
            setIsTyping(false);
            return;
          }

          // "How has this been selling?"
          if (input.includes("selling") || input.includes("sales") || input.includes("performance")) {
            responses.push({
              id: `asst-${Date.now()}`,
              role: "assistant",
              content: `${product.name} has been selling consistently. It's one of your steady performers.`,
            });
            setMessages((prev) => [...prev, ...responses]);
            setIsTyping(false);
            return;
          }
        }
      }

      // Inventory request
      if (input.includes("inventory") || input.includes("stock")) {
        const lowStock = getLowStockItems();
        
        if (lowStock.length === 0) {
          // Empty state variant 1
          responses.push({
            id: `sys-${Date.now()}`,
            role: "system",
            content: "No inventory issues today. All products are sufficiently stocked.",
          });
        } else {
          responses.push({
            id: `asst-${Date.now()}`,
            role: "assistant",
            content: "Here are the products that are running low right now:",
            preview: {
              type: "inventory",
              items: lowStock.map(item => ({
                title: item.name,
                subtitle: item.variant,
                meta: `${item.stock} left`,
              })),
            },
          });
        }
      }
      // Orders request
      else if (input.includes("orders")) {
        const orders = getTodaysOrders();
        
        if (orders.length === 0) {
          // Empty state variant 2
          responses.push({
            id: `sys-${Date.now()}`,
            role: "system",
            content: "No new orders yet. I'll let you know when something comes in.",
          });
        } else {
          responses.push({
            id: `asst-${Date.now()}`,
            role: "assistant",
            content: "Here are today's orders:",
            preview: {
              type: "orders",
              items: orders.map(order => ({
                title: order.productName,
                subtitle: order.time,
                meta: `${order.quantity} unit${order.quantity > 1 ? 's' : ''}`,
              })),
            },
          });
        }
      }
      // Sales request
      else if (input.includes("sales") || input.includes("revenue")) {
        const sales = getSalesSummary();
        responses.push({
          id: `asst-${Date.now()}`,
          role: "assistant",
          content: "Here's your sales summary for this week:",
          preview: {
            type: "sales",
            items: sales.map(day => ({
              title: day.day,
              meta: `$${day.amount.toLocaleString()}`,
            })),
          },
        });
      }
      // Restock shortcut (old demo)
      else if (input.includes("restock")) {
        responses.push({
          id: `sys-${Date.now()}`,
          role: "system",
          content: "Black dresses are running low (3 left).",
          inlineActions: [
            { id: "confirm_restock", label: "Restock" },
            { id: "edit_quantity", label: "Edit quantity" },
            { id: "cancel", label: "Ignore" },
          ],
        });
      }
      // Default response
      else {
        responses.push({
          id: `asst-${Date.now()}`,
          role: "assistant",
          content: "I'm here to help. You can ask me about inventory, orders, or sales.",
        });
      }

      setMessages((prev) => [...prev, ...responses]);
      setIsTyping(false);
    }, 800);
  };

  // THE GOLDEN FLOW - Signature interaction (with AI)
  const handleGoldenFlow = async () => {
    const lowStock = getLowStockItems();
    const hasIssues = lowStock.length > 0;

    if (!hasIssues) {
      // Empty state variant 3: Global calm
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: `sys-${Date.now()}`,
            role: "system",
            content: "You're all caught up. Everything looks good today.",
          },
        ]);
        setIsTyping(false);
      }, 800);
      return;
    }

    // Golden Flow Step 3: AI-generated summary first
    setTimeout(async () => {
      let summaryText: string;

      try {
        // AI narrates what's happening
        if (isAIAvailable()) {
          summaryText = await generateSummary({
            lowStockItems: lowStock.map(item => ({
              name: item.name,
              stock: item.stock,
              threshold: item.restockThreshold,
            })),
            ordersToday: businessState.orders.length,
            day: businessState.day,
          });
        } else {
          // Fallback if AI is unavailable
          summaryText = generateFallbackSummary({
            lowStockItems: lowStock.map(item => ({
              name: item.name,
              stock: item.stock,
              threshold: item.restockThreshold,
            })),
            ordersToday: businessState.orders.length,
            day: businessState.day,
          });
        }
      } catch (error) {
        // Graceful degradation
        summaryText = lowStock.length === 1 
          ? "One item is running low."
          : "A couple of items are running low.";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `asst-${Date.now()}`,
          role: "assistant",
          content: summaryText,
        },
      ]);
    }, 500);

    // Golden Flow Step 4: Evidence (preview) - System provides facts
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: `asst-preview-${Date.now()}`,
          role: "assistant",
          content: "",
          preview: {
            type: "inventory",
            items: lowStock.map(item => ({
              title: item.name,
              subtitle: item.variant,
              meta: `${item.stock} left`,
            })),
          },
        },
      ]);
    }, 800);

    // Golden Flow Step 5: System action (calm offer) - System controls actions
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: `sys-action-${Date.now()}`,
          role: "system",
          content: "Want me to restock these?",
          inlineActions: [
            { id: "confirm_restock_all", label: "Restock" },
            { id: "ignore_for_now", label: "Ignore for now" },
          ],
        },
      ]);
      setIsTyping(false);
    }, 1100);
  };

  // Handle inline actions
  const handleInlineAction = (actionId: string) => {
    // Handle Undo
    if (actionId === "undo") {
      setMessages((prev) => {
        const undoableIndex = prev.findIndex(m => m.undoable);
        if (undoableIndex === -1) return prev;
        
        return [
          ...prev.slice(0, undoableIndex),
          ...prev.slice(undoableIndex + 1),
          {
            id: `sys-${Date.now()}`,
            role: "system",
            content: "No changes were made.",
          },
        ];
      });
      return;
    }

    let response: ChatMessage | null = null;

    // Golden Flow Step 6: Restock with undo
    if (actionId === "confirm_restock" || actionId === "confirm_restock_all") {
      const undoMessageId = `undo-${Date.now()}`;
      
      // Actually update the business state
      const lowStock = getLowStockItems();
      lowStock.forEach(item => restockItem(item.id, 10));

      response = {
        id: undoMessageId,
        role: "system",
        content: "Restock started.",
        undoable: {
          undoLabel: "Undo",
          expiresInMs: 7000,
        },
      };

      setMessages((prev) => [...prev, response!]);

      // Golden Flow Step 7: Resolution (after undo window)
      setTimeout(() => {
        setMessages((prev) => {
          const stillExists = prev.some(m => m.id === undoMessageId);
          if (!stillExists) return prev;

          return prev
            .filter((m) => m.id !== undoMessageId)
            .concat({
              id: `asst-${Date.now()}`,
              role: "assistant",
              content: "Restock completed. I'll let you know if anything else needs attention.",
            });
        });
      }, 7000);

      return;
    } 
    // Ignore action
    else if (actionId === "cancel" || actionId === "ignore_for_now") {
      response = {
        id: `sys-${Date.now()}`,
        role: "system",
        content: "No changes were made.",
      };
    } 
    // Edit quantity
    else if (actionId === "edit_quantity") {
      response = {
        id: `asst-${Date.now()}`,
        role: "assistant",
        content: "How many units would you like to restock?",
      };
    }
    // Restock specific product
    else if (actionId === "confirm_restock_product") {
      const context = getActiveContext();
      if (context?.type === "product") {
        const product = getProduct(context.productId);
        if (product) {
          restockItem(product.id, 10);
          response = {
            id: `sys-${Date.now()}`,
            role: "system",
            content: `${product.name} restocked.`,
          };
        }
      }
    }

    if (response) {
      setMessages((prev) => [...prev, response!]);
    }
  };

  // Handle primary actions
  const handleAction = (action: string) => {
    if (action === "view_inventory") {
      onNavigate?.('inventory');
    } else {
      setMessages((prev) => [
        ...prev,
        {
          id: `asst-${Date.now()}`,
          role: "assistant",
          content: "I'll help you with that.",
        },
      ]);
    }
  };

  const hasMessages = messages.length > 0;

  return (
    <AppShell
      sidebar={
        <SidebarNew
          activeTab="chat"
          onTabChange={(tab) => onNavigate?.(tab)}
          onSignOut={onSignOut}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
      }
    >
      <div className="h-full flex flex-col">
        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto">
          {!hasMessages ? (
            <ChatCanvas>
              <ChatEmpty />
            </ChatCanvas>
          ) : (
            <MessageList
              messages={messages}
              onAction={handleAction}
              onInlineAction={handleInlineAction}
            />
          )}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="max-w-2xl mx-auto px-[var(--space-md)] mb-[var(--space-md)]">
              <div className="flex gap-[var(--space-3)]">
                <div className="shrink-0 w-[27px] h-[27px] bg-[var(--color-accent-primary)] rounded-[7px]" />
                <div className="flex gap-1 py-2">
                  <div className="w-2 h-2 bg-[var(--color-text-secondary)] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 bg-[var(--color-text-secondary)] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 bg-[var(--color-text-secondary)] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Chat Input */}
        <div className="shrink-0 p-[var(--space-md)] lg:px-[var(--space-2xl)] lg:py-[var(--space-lg)]">
          <div className="max-w-2xl mx-auto">
            <ChatInput
              value={inputValue}
              onChange={setInputValue}
              onSend={handleSendMessage}
              disabled={isTyping}
              showTools={hasMessages}
            />
          </div>
        </div>
      </div>
    </AppShell>
  );
}