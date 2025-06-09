import { Box, Typography } from '@mui/material'
import React from 'react'
import DangerZoneCard from './DangerZoneCard'
import InformationCard from '@/app/components/InformationCard';

interface settingItemsType {
    icon: string,
    title: string,
    subtitle: string,
    onClick: () => void,
}

const handleContactSupport = () => alert('Contact Support');
const handleExportData = () => {
    if (window.confirm('Export Your Health Data?')) {
        alert('Data export requested!');
    }
};
const handleDeleteAccount = () => {
    if (window.confirm('⚠️ DELETE ACCOUNT?')) {
        const confirmation = prompt('To confirm deletion, please type "DELETE" (all caps):');
        if (confirmation === 'DELETE') {
            alert('Account deletion initiated.');
        } else {
            alert('Account deletion cancelled.');
        }
    }
};

const settingItems: settingItemsType[] = [
    {
        icon: "💬",
        title: "Contact Support",
        subtitle: "Get help with your account",
        onClick: handleContactSupport,
    },
    {
        icon: "📥",
        title: "Export My Data",
        subtitle: "Download your health records",
        onClick: handleExportData,
    },
];

function SupportAndHelp() {
    return (
        <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#333' }}>
                Support & Help
            </Typography>

            {settingItems.map((item) => (
                <InformationCard
                    key={item.title}
                    icon={item.icon}
                    title={item.title}
                    subtitle={item.subtitle}
                    onClick={item.onClick}
                />
            ))}

            <DangerZoneCard onDelete={handleDeleteAccount} />
        </Box>
    )
}

export default SupportAndHelp
