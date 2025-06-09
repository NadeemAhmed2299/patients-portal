"use client"

import { Box, Typography, Badge } from '@mui/material';
import { useRouter } from 'next/navigation';

interface BottomNavigationProps {
  activeTab?: 'home' | 'appointments' | 'education' | 'support' | 'notifications' | 'medications';
}

const commonStyles = {
  bottomNav: {
    position: 'fixed' as const,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.1)',
    padding: '8px 0',
    zIndex: 1000,
  },
};

const colors = {
  primary: {
    main: '#1976d2',
  },
  text: {
    secondary: '#757575',
  },
};

const BottomNavigation = ({ activeTab }: BottomNavigationProps) => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const navItemStyle = {
    textAlign: 'center' as const,
    cursor: 'pointer',
    fontSize: '12px',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '4px',
    padding: '4px 8px',
  };

  return (
    <Box sx={commonStyles.bottomNav}>
      <Box
        onClick={() => handleNavigation('/home')}
        sx={{
          ...navItemStyle,
          color: activeTab === 'home' ? colors.primary.main : colors.text.secondary,
        }}
      >
        <Typography sx={{ fontSize: '20px', marginBottom: '2px' }}>🏠</Typography>
        <Typography>Home</Typography>
      </Box>
      
      <Box
        onClick={() => handleNavigation('/appointments')}
        sx={{
          ...navItemStyle,
          color: activeTab === 'appointments' ? colors.primary.main : colors.text.secondary,
        }}
      >
        <Typography sx={{ fontSize: '20px', marginBottom: '2px' }}>📅</Typography>
        <Typography>Appointments</Typography>
      </Box>
      
      <Box
        onClick={() => handleNavigation('/education')}
        sx={{
          ...navItemStyle,
          color: activeTab === 'education' ? colors.primary.main : colors.text.secondary,
        }}
      >
        <Typography sx={{ fontSize: '20px', marginBottom: '2px' }}>📚</Typography>
        <Typography>Education</Typography>
      </Box>
      
      <Box
        onClick={() => handleNavigation('/support')}
        sx={{
          ...navItemStyle,
          color: activeTab === 'support' ? colors.primary.main : colors.text.secondary,
        }}
      >
        <Typography sx={{ fontSize: '20px', marginBottom: '2px' }}>🤝</Typography>
        <Typography>Support</Typography>
      </Box>
    </Box>
  );
};

export default BottomNavigation;