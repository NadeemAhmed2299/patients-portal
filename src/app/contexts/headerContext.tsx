// app/context/HeaderContext.tsx
'use client';

import { createContext, useContext, useState } from 'react';

interface HeaderContent {
  title: string;
  subtitle?: string;
  userGreeting?: string;
  appointmentInfo?: {
    date: string;
    time: string;
  };
  showAvatar?: boolean;
  showBackButton?: boolean;
}

interface HeaderContextType {
  headerContent: HeaderContent;
  setHeaderContent: (content: HeaderContent) => void;
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export function HeaderProvider({ children }: { children: React.ReactNode }) {
  const [headerContent, setHeaderContent] = useState<HeaderContent>({
    title: '',
    showAvatar: true,
    showBackButton: true,
  });

  return (
    <HeaderContext.Provider value={{ headerContent, setHeaderContent }}>
      {children}
    </HeaderContext.Provider>
  );
}

export function useHeader() {
  const context = useContext(HeaderContext);
  if (context === undefined) {
    throw new Error('useHeader must be used within a HeaderProvider');
  }
  return context;
}