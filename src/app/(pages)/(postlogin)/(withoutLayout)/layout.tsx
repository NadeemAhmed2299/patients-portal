'use client';

import UserHeader from "@/app/components/UserHeader";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };

    return (
        <Box>
            <UserHeader onBack={handleGoBack} />
            {children}
        </Box>
    );
}
