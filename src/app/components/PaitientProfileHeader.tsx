// app/components/PatientProfileHeader.tsx
import { Avatar, Box, IconButton, Typography } from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import React from 'react';

interface PatientProfileHeaderProps {
  onBack: () => void;
  title: string;
  patientDetails: {
    name: string;
    mrn: string;
    age: string;
    diagnosisDate?: string;
    stage?: string;
  };
  showBackButton?: boolean;
}

export function PatientProfileHeader({
  onBack,
  title,
  patientDetails,
  showBackButton = true,
}: PatientProfileHeaderProps) {
  return (
    <Box
      sx={{
        background: 'linear-gradient(90deg, #2B61EB -21.25%, #8645E1 47.12%, #1F4ED8 116.67%)',
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

      <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
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
          {patientDetails.name.split(' ').map(n => n[0]).join('')}
        </Avatar>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 600, mx: 1 }}>
            {patientDetails.name}
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.9, mb: 0.5, mx: 1  }}>
            MRN: {patientDetails.mrn} • Age: {patientDetails.age}
          </Typography>
          {patientDetails.diagnosisDate && patientDetails.stage && (
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              Diagnosed: {patientDetails.diagnosisDate} • {patientDetails.stage}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}