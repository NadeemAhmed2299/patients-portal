"use client"

import React, { useState } from 'react'
import { Box, Switch, Typography } from '@mui/material'
import InformationCard from '@/app/components/InformationCard';

// Notification states
interface NotificationSettings {
    push: boolean;
    email: boolean;
    sms: boolean;
}

interface NotificationOption {
    key: keyof NotificationSettings;
    icon: string;
    title: string;
    subtitle: string;
    ariaLabel: string;
}

interface NotificationPreferences {
    icon: string,
    title: string,
    subtitle: string,
    onClick: () => void

}

const notificationOptions: NotificationOption[] = [
    {
        key: 'push',
        icon: '🔔',
        title: 'Push Notifications',
        subtitle: 'Appointment reminders & updates',
        ariaLabel: 'Push notifications toggle'
    },
    {
        key: 'email',
        icon: '📧',
        title: 'Email Notifications',
        subtitle: 'Lab results & care updates',
        ariaLabel: 'Email notifications toggle'
    },
    {
        key: 'sms',
        icon: '📲',
        title: 'SMS Notifications',
        subtitle: 'Appointment confirmations',
        ariaLabel: 'SMS notifications toggle'
    }
];

function AccountPreferences() {
    const [notifications, setNotifications] = useState<NotificationSettings>({
        push: true,
        email: true,
        sms: false
    });

    const toggleNotification = (type: keyof NotificationSettings) => {
        setNotifications(prev => ({ ...prev, [type]: !prev[type] }));
    };

    const handleEditNotificationPreferences = () => alert('Opening Notification Preferences...');

    const handleEditLanguagePreferences = () => alert('Opening Language & Accessibility...');

    const notificationPreferences: NotificationPreferences[] = [
        {
            icon: "⚙️",
            title: "Notification Settings",
            subtitle: "Customize timing & types",
            onClick: handleEditNotificationPreferences
        },
        {
            icon: "🌐",
            title: "Language & Accessibility",
            subtitle: "English • Large text enabled",
            onClick: handleEditLanguagePreferences
        }
    ]

    return (
        <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#333' }}>
                Account Preferences
            </Typography>

            {notificationOptions.map(option => (
                <InformationCard
                    key={option.key}
                    icon={option.icon}
                    title={option.title}
                    subtitle={option.subtitle}
                    rightElement={
                        <Switch
                            checked={notifications[option.key]}
                            onChange={() => toggleNotification(option.key)}
                            inputProps={{ 'aria-label': option.ariaLabel }}
                        />
                    }
                />
            ))}

            {notificationPreferences.map((item, index) => (
                <InformationCard
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    subtitle={item.subtitle}
                    onClick={item.onClick}
                />
            ))}
        </Box>
    )
}

export default AccountPreferences
