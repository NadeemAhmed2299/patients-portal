import { Avatar, Box, IconButton, Typography } from '@mui/material'
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { useRouter } from 'next/router';
import React from 'react'

interface UserDetailsTypes {
  userName: string;
  userId: string;
}

interface UserHeaderProps {
    onBack: () => void;
}

const userDetails: UserDetailsTypes = {
    userName: "James Smith",
    userId: "PT100456"
}

function UserHeader({onBack}: UserHeaderProps) {
    return (
        <Box
            sx={{
                background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                color: 'white',
                p: 2.5,
                borderRadius: '0 0 20px 20px'
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2.5 }}>
                <IconButton onClick={onBack} sx={{ color: '#fff', p: 1 }} aria-label="Go back">
                    <ArrowBackIcon />
                </IconButton>
                <Typography variant="h6" sx={{ fontWeight: 'bold', flex: 1, textAlign: 'center' }}>
                    Account Management
                </Typography>
                <Box width={34} />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar
                    sx={{
                        width: 60,
                        height: 60,
                        bgcolor: 'rgba(255, 255, 255, 0.2)',
                        fontSize: '24px',
                        fontWeight: 'bold'
                    }}
                    aria-label="User avatar"
                >
                    {userDetails.userName.split(' ').map(n => n[0]).join('')}
                </Avatar>
                <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                        {userDetails.userName}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        Patient ID: {userDetails.userId}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default UserHeader
