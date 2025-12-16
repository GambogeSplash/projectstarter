/**
 * Language System - Centralized Copy Management
 * 
 * HOW TO USE:
 * import { copy } from "@/content"
 * copy.chat.greeting.morning
 * 
 * HOW TO INTERPOLATE:
 * import { copy, t } from "@/content"
 * t(copy.notifications.lowStock, { productName: "Black Dress" })
 * // Result: "Black Dress is running low"
 * 
 * FUTURE: When adding language switching
 * 1. Add language preference to state
 * 2. Update getCurrentLanguage() to read from state
 * 3. Add language selector in Settings → Account
 * 4. No other changes needed - everything just works
 */

import { en, interpolate, type Copy } from "./en";
import { fr } from "./fr";
import { pt } from "./pt";

type Language = "en" | "fr" | "pt";

/**
 * Available languages
 * Only include languages that are fully translated
 */
const languages = {
  en,
  // fr, // Uncomment when translated
  // pt, // Uncomment when translated
};

/**
 * Get current language from user preferences
 * For now, always returns English
 * Later: read from user state/localStorage
 */
function getCurrentLanguage(): Language {
  return "en";
}

/**
 * Get copy in current language
 */
export const copy: Copy = languages[getCurrentLanguage()];

/**
 * Interpolate strings with variables
 * 
 * Example:
 * t(copy.notifications.lowStock, { productName: "Black Dress" })
 * // "Black Dress is running low"
 */
export function t(
  template: string,
  values?: Record<string, string | number>
): string {
  if (!values) return template;
  return interpolate(template, values);
}

/**
 * Future: Set user language preference
 * This will be wired to Settings page later
 */
export function setLanguage(lang: Language): void {
  // Store in localStorage or user preferences
  // Then reload or force re-render
  console.log(`Language switching not yet implemented. Attempted to switch to: ${lang}`);
}

/**
 * Get all available languages for language selector
 */
export function getAvailableLanguages(): Array<{
  code: Language;
  name: string;
  nativeName: string;
}> {
  return [
    { code: "en", name: "English", nativeName: "English" },
    { code: "fr", name: "French", nativeName: "Français" },
    { code: "pt", name: "Portuguese", nativeName: "Português" },
  ];
}
