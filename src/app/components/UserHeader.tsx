// app/components/UserHeader.tsx
import { Box, IconButton, Typography, LinearProgress } from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import React from 'react';
import HeaderIcon from './HeaderIcon';

interface UserHeaderProps {
  onBack: () => void;
  title: string;
  userGreeting?: string;
  appointmentInfo?: {
    date: string;
    time: string;
  };
  treatmentProgress?: {
    protocol: string;
    totalCycles: number;
    completed: number;
    nextCycle?: string;
  };
  showBackButton?: boolean;
  showHeaderIcons?: boolean;
}

export function UserHeader({
  onBack,
  title,
  userGreeting,
  appointmentInfo,
  treatmentProgress,
  showBackButton = true,
  showHeaderIcons = true,
}: UserHeaderProps) {
  const progressPercentage = treatmentProgress 
    ? Math.round((treatmentProgress.completed / treatmentProgress.totalCycles) * 100)
    : 0;

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
        color: 'white',
        p: 2.5,
        borderRadius: '0 0 20px 20px'
      }}
    >
      {/* Header top row with title and icons */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2.5 }}>
        {showBackButton && (
          <IconButton onClick={onBack} sx={{ color: '#fff', p: 1 }} aria-label="Go back">
            <ArrowBackIcon />
          </IconButton>
        )}
        <Typography variant="h6" sx={{ fontWeight: 'bold', flex: 1, textAlign: 'left' }}>
          {title}
        </Typography>
        {showHeaderIcons && (
          <Box sx={{ display: 'flex', gap: '12px', flexShrink: 0 }}>
            <HeaderIcon onClick={() => alert('Search')}>🔍</HeaderIcon>
            <HeaderIcon onClick={() => alert('Notifications')}>🔔</HeaderIcon>
            <HeaderIcon onClick={() => alert('Account')}>👤</HeaderIcon>
          </Box>
        )}
      </Box>

      {/* Treatment progress section (only for home page) */}
      {treatmentProgress && (
        <Box sx={{ mb: 3 }}>
          <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>
            Treatment Progress
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            {treatmentProgress.protocol} • {treatmentProgress.totalCycles} Cycles Total
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
            <LinearProgress
              variant="determinate"
              value={progressPercentage}
              sx={{
                flexGrow: 1,
                height: 8,
                borderRadius: 4,
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                '& .MuiLinearProgress-bar': {
                  borderRadius: 4,
                  backgroundColor: '#fff',
                },
              }}
            />
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              {progressPercentage}% Complete
            </Typography>
          </Box>
          {treatmentProgress.nextCycle && (
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              Next Cycle {treatmentProgress.completed + 1} - {treatmentProgress.nextCycle}
            </Typography>
          )}
        </Box>
      )}

      {/* Appointment info section */}
      {appointmentInfo && (
        <Box sx={{
          background: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '12px',
          padding: '15px',
          backdropFilter: 'blur(10px)'
        }}>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            Next Appointment
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, fontWeight: 600 }}>
            {appointmentInfo.date} at {appointmentInfo.time}
          </Typography>
        </Box>
      )}
    </Box>
  );
}