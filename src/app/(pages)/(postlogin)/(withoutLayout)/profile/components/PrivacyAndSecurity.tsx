import { Box, Switch, Typography } from '@mui/material'
import React, { useState } from 'react'
import SettingItem from './SettingItem'

interface AuthenticationSettings {
    twoFactor: boolean;
}

interface SettingConfig {
    icon: string;
    title: string;
    subtitle: string;
    onClick?: () => void;
    rightElement?: React.ReactNode;
}

function PrivacyAndSecurity() {
    const [authentication, setAuthentication] = useState<AuthenticationSettings>({
        twoFactor: false
    });

    const handleChangePassword = () => alert('Opening Password Change...');
    const handleViewPrivacySettings = () => alert('Opening Privacy Settings...');

    const toggleNotification = () => {
        if (!authentication.twoFactor) {
            if (window.confirm('Enable Two-Factor Authentication?\n\nThis will require a verification code from your phone each time you log in. This significantly improves your account security.')) {
                setAuthentication(prev => ({ ...prev, twoFactor: true }));
                alert('Two-Factor Authentication enabled!\n\nYou\'ll receive a setup code via SMS shortly.');
            }
        } else {
            if (window.confirm('Disable Two-Factor Authentication?\n\nThis will reduce your account security. Are you sure?')) {
                setAuthentication(prev => ({ ...prev, twoFactor: false }));
                alert('Two-Factor Authentication disabled.');
            }
        }
    };

    const settings: SettingConfig[] = [
        {
            icon: "🔐",
            title: "Change Password",
            subtitle: "Last changed 3 months ago",
            onClick: handleChangePassword
        },
        {
            icon: "🔒",
            title: "Two-Factor Authentication",
            subtitle: "Extra security for your account",
            rightElement: (
                <Switch
                    checked={authentication.twoFactor}
                    onChange={toggleNotification}
                    aria-label="Two-factor authentication toggle"
                />
            )
        },
        {
            icon: "🛡️",
            title: "Privacy Settings",
            subtitle: "Data sharing & consent",
            onClick: handleViewPrivacySettings
        }
    ];

    return (
        <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#333' }}>
                Privacy & Security
            </Typography>
            {settings.map((setting, idx) => (
                <SettingItem
                    key={setting.title}
                    icon={setting.icon}
                    title={setting.title}
                    subtitle={setting.subtitle}
                    onClick={setting.onClick}
                    rightElement={setting.rightElement}
                />
            ))}
        </Box>
    )
}

export default PrivacyAndSecurity
