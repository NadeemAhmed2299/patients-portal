// app/components/UserHeader.tsx
import { Avatar, Box, IconButton, Typography } from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import React from 'react';

interface UserHeaderProps {
  onBack: () => void;
  title: string;
  subtitle?: string;
  userGreeting?: string;
  appointmentInfo?: {
    date: string;
    time: string;
  };
  showAvatar?: boolean;
  showBackButton?: boolean;
}

const userDetails = {
  userName: "James Johnson",
  userId: "PT100456"
};

function UserHeader({
  onBack,
  title,
  subtitle,
  userGreeting,
  appointmentInfo,
  showAvatar = true,
  showBackButton = true,
}: UserHeaderProps) {
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
        {showBackButton && (
          <IconButton onClick={onBack} sx={{ color: '#fff', p: 1 }} aria-label="Go back">
            <ArrowBackIcon />
          </IconButton>
        )}
        <Typography variant="h6" sx={{ fontWeight: 'bold', flex: 1, textAlign: 'center' }}>
          {title}
        </Typography>
        <Box width={34} />
      </Box>

      {showAvatar && (
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
            {userGreeting && (
              <Typography variant="body1" sx={{ opacity: 0.8, mb: 0.5 }}>
                {userGreeting}
              </Typography>
            )}
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
              {userDetails.userName}
            </Typography>
            {subtitle && (
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                {subtitle}
              </Typography>
            )}
            {appointmentInfo && (
              <Box sx={{ mt: 1.5 }}>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  Next Appointment
                </Typography>
                <Typography variant="body2">
                  {appointmentInfo.date} at {appointmentInfo.time}
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default UserHeader;