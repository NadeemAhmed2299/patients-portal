import React from 'react';
import { Card, CardContent, Box, Typography, IconButton } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

interface SettingItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  onClick?: () => void;
  rightElement?: React.ReactNode;
}

const SettingItem: React.FC<SettingItemProps> = ({
  icon,
  title,
  subtitle,
  onClick,
  rightElement
}) => (
  <Card
    sx={{
      mb: 1.5,
      cursor: onClick ? 'pointer' : 'default',
      '&:hover': onClick ? { transform: 'translateY(-1px)' } : {},
      transition: 'transform 0.2s'
    }}
    onClick={onClick}
    aria-label={title}
  >
    <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box
          sx={{
            width: 40,
            height: 40,
            bgcolor: '#f3f4f6',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px'
          }}
          aria-hidden="true"
        >
          {icon}
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="body1" sx={{ fontWeight: 600, color: '#333', mb: 0.5 }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: '#666' }}>
            {subtitle}
          </Typography>
        </Box>
        {rightElement || (onClick && <IconButton sx={{ color: '#8b5cf6' }}>
          <ArrowForward />
        </IconButton>)}
      </Box>
    </CardContent>
  </Card>
);

export default SettingItem;