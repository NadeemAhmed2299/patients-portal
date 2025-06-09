// app/appointments/page.tsx
'use client';

import { useHeader } from '@/app/contexts/headerContext';
import { Fragment, useEffect } from 'react';

export default function AppointmentsPage() {
    const { setHeaderContent } = useHeader();

    useEffect(() => {
        setHeaderContent({
            title: 'Hope Cancer Center',
            subtitle: 'Manage your care schedule',
            showAvatar: false
        });
    }, [setHeaderContent]);

    return (
        <Fragment>
          Appointments Page
        </Fragment>
    );
}