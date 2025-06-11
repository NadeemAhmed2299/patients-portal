"use client"

import { Avatar, Box, Button, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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
        {!isMobile && (
          <React.Fragment>
            <Button variant="contained" sx={{
              color: '#fff',
              fontWeight: 400,
              marginLeft: "10px",
              bgcolor: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              bordeRadius: '8px',
              backdropFilter: 'blur(10px)',
              transition: 'background-color 0.2s'
            }}>
              Export Data
            </Button>
            <Button variant="contained" sx={{
              color: '#fff',
              marginLeft: "10px",
              fontWeight: 400,
              bgcolor: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              bordeRadius: '8px',
              backdropFilter: 'blur(10px)',
              transition: 'background-color 0.2s'
            }}>
              Support
            </Button>
          </React.Fragment>
        )}
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
          <Typography variant="body2" sx={{ opacity: 0.9, mb: 0.5, mx: 1 }}>
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