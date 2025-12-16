/**
 * CHIDI App - Main Application
 * Refactored to use design tokens and new component structure
 * Now includes: system actions, inline actions, contextual previews
 */

import { useState } from "react";
import { WelcomeScreen } from "./components/auth/WelcomeScreen";
import { WelcomeScreenPixelPerfect } from "./components/auth/WelcomeScreenPixelPerfect";
import { OnboardingCarouselNew } from "./components/onboarding/OnboardingCarouselNew";
import { ConnectStorefrontsNew } from "./components/onboarding/ConnectStorefrontsNew";
import { SuccessScreen } from "./components/onboarding/SuccessScreen";
import { DashboardComplete } from "./components/chat/DashboardComplete";
import { InventoryPageView } from "./components/pages/InventoryPageView";
import { OrdersPageView } from "./components/pages/OrdersPageView";
import { SettingsPageView } from "./components/pages/SettingsPageView";

type Screen = 'welcome' | 'welcome-pixel-perfect' | 'onboarding' | 'connect' | 'success' | 'dashboard' | 'inventory' | 'orders' | 'settings';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome-pixel-perfect');
  
  // Toggle between generic and pixel-perfect Welcome screen
  const [usePixelPerfect, setUsePixelPerfect] = useState(true);

  const handleNavigate = (screen: Screen | 'chat') => {
    // Map 'chat' to 'dashboard' for compatibility
    if (screen === 'chat') {
      setCurrentScreen('dashboard');
    } else {
      setCurrentScreen(screen as Screen);
    }
  };

  const handleSignOut = () => {
    setCurrentScreen('welcome');
  };

  // Render current screen
  switch (currentScreen) {
    case 'welcome':
      return <WelcomeScreen onContinue={() => setCurrentScreen('onboarding')} />;
    
    case 'welcome-pixel-perfect':
      return <WelcomeScreenPixelPerfect onContinue={() => setCurrentScreen('onboarding')} />;
    
    case 'onboarding':
      return <OnboardingCarouselNew onComplete={() => setCurrentScreen('connect')} />;
    
    case 'connect':
      return <ConnectStorefrontsNew onComplete={() => setCurrentScreen('success')} />;
    
    case 'success':
      return <SuccessScreen onContinue={() => setCurrentScreen('dashboard')} />;
    
    case 'dashboard':
      return (
        <DashboardComplete 
          onNavigate={(page) => handleNavigate(page)}
          onSignOut={handleSignOut}
        />
      );
    
    case 'inventory':
      return (
        <InventoryPageView
          onNavigate={(page) => handleNavigate(page)}
          onSignOut={handleSignOut}
        />
      );
    
    case 'orders':
      return (
        <OrdersPageView
          onNavigate={(page) => handleNavigate(page)}
          onSignOut={handleSignOut}
        />
      );
    
    case 'settings':
      return (
        <SettingsPageView
          onNavigate={(page) => handleNavigate(page)}
          onSignOut={handleSignOut}
        />
      );
    
    default:
      return <WelcomeScreen onContinue={() => setCurrentScreen('onboarding')} />;
  }
}