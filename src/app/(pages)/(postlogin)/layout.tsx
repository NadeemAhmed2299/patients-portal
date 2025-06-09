// app/layout.tsx
'use client';

import BottomNavigation from "@/app/components/BottomNavigation";
import UserHeader from "@/app/components/UserHeader";
import { HeaderProvider, useHeader } from "@/app/contexts/headerContext";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <HeaderProvider>
            <LayoutContent>{children}</LayoutContent>
        </HeaderProvider>
    );
}

function LayoutContent({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const { headerContent } = useHeader();

    const handleGoBack = () => {
        router.back();
    };

    return (
        <Box>
            <UserHeader 
                onBack={handleGoBack}
                {...headerContent}
            />
            {children}
            <BottomNavigation/>
        </Box>
    );
}