/**
 * Chat Types - Complete type system for CHIDI conversations
 * Supports: messages, system actions, inline actions, contextual previews, undo
 */

export type ChatAction =
  | "review_reply"
  | "view_inventory"
  | "confirm_update"
  | "view_orders"
  | "view_sales";

export type InlineAction = {
  id: string;
  label: string;
};

export type PreviewType =
  | "inventory"
  | "orders"
  | "sales";

export type PreviewData = {
  type: PreviewType;
  items: {
    title: string;
    subtitle?: string;
    meta?: string;
  }[];
};

export type ChatMessage = {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  action?: ChatAction;
  inlineActions?: InlineAction[];
  preview?: PreviewData;
  timestamp?: Date;
  undoable?: {
    undoLabel: string;
    expiresInMs: number;
  };
};