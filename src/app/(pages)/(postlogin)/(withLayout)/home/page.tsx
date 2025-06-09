// app/home/page.tsx
'use client';

import { useHeader } from '@/app/contexts/headerContext';
import { Fragment, useEffect } from 'react';

export default function HomePage() {
    const { setHeaderContent } = useHeader();

    useEffect(() => {
        setHeaderContent({
            title: 'SmartSlot',
            userGreeting: 'Good evening,',
            appointmentInfo: {
                date: 'Thursday, April 24',
                time: '8:30 AM'
            }
        });
    }, [setHeaderContent]);

    return (
        <Fragment>
          Home Page
        </Fragment>
    );
}