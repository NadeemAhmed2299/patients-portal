// app/context/HeaderContext.tsx
'use client';

import { createContext, useContext, useState } from 'react';

type HeaderVariant = 'default' | 'patient-profile';

interface BaseHeaderContent {
  title: string;
  showBackButton?: boolean;
}

interface DefaultHeaderContent extends BaseHeaderContent {
  variant: 'default';
  userGreeting?: string;
  appointmentInfo?: {
    date: string;
    time: string;
  };
  treatmentProgress?: {
    protocol: string;
    totalCycles: number;
    completed: number;
    nextCycle?: string;
  };
  showHeaderIcons?: boolean;
}

interface PatientProfileHeaderContent extends BaseHeaderContent {
  variant: 'patient-profile';
  patientDetails: {
    name: string;
    mrn: string;
    age: string;
    diagnosisDate?: string;
    stage?: string;
  };
}

type HeaderContent = DefaultHeaderContent | PatientProfileHeaderContent;

interface HeaderContextType {
  headerContent: HeaderContent;
  setHeaderContent: (content: HeaderContent) => void;
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export function HeaderProvider({ children }: { children: React.ReactNode }) {
  const [headerContent, setHeaderContent] = useState<HeaderContent>({
    variant: 'default',
    title: '',
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