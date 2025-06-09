import { Box, Typography } from '@mui/material'
import React from 'react'
import SettingItem from './SettingItem'

interface PersonalInfoItem {
    icon: string;
    title: string;
    subtitle: string;
    onClick: () => void;
}

const personalInfoItems: PersonalInfoItem[] = [
    {
        icon: "👤",
        title: "Basic Information",
        subtitle: "Name, DOB, Contact details",
        onClick: () => alert('Opening Personal Information editor...')
    },
    {
        icon: "🏠",
        title: "Address",
        subtitle: "Home, Billing & Mailing address",
        onClick: () => alert('Opening Address editor...')
    },
    {
        icon: "🚨",
        title: "Emergency Contact",
        subtitle: "Sarah Johnson (Wife)",
        onClick: () => alert('Opening Emergency Contact editor...')
    }
];

function PersonalInfornation() {
    return (
        <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#333' }}>
                Personal Information
            </Typography>
            {personalInfoItems.map((item, idx) => (
                <SettingItem
                    key={item.title}
                    icon={item.icon}
                    title={item.title}
                    subtitle={item.subtitle}
                    onClick={item.onClick}
                />
            ))}
        </Box>
    )
}

export default PersonalInfornation
