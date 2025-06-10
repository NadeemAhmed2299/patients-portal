'use client';

import { useEffect, Fragment } from 'react';
import { useHeader } from '@/app/contexts/headerContext';
import BalanceCard from './components/BalanceCard';
import { useRouter } from 'next/navigation';
import { Box } from '@mui/material';
import { mockAppointments } from '@/app/data/mockData';
import QuickActionsGrid from './components/QuickAction';

export default function HomePage() {
    const router = useRouter();
    const { setHeaderContent } = useHeader();

    useEffect(() => {
        setHeaderContent({
            variant: 'default',
            title: 'SmartSlot',
            treatmentProgress: {
                protocol: 'ACT Protocol',
                totalCycles: 6,
                completed: 2,
                nextCycle: 'June 12, 2025'
            },
            appointmentInfo: {
                date: 'Thursday, April 24',
                time: '8:30 AM'
            },
            showHeaderIcons: true
        });
    }, [setHeaderContent]);
    
    return (
        <Fragment>
            <Box sx={{ p: 2.5, pb: 12.5 }}>
                <BalanceCard
                    amount="$350.00"
                    dueDate="May 15, 2025"
                    onPayNow={() => router.push('/payment')}
                    onViewBill={() => router.push('/billing')}
                />
                <QuickActionsGrid appointments={mockAppointments} />
            </Box>
        </Fragment>
    );
}
