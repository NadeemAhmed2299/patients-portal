import React from 'react';
import { Card, CardContent, Box, Typography, Avatar, Chip, Button } from '@mui/material';

interface CaregiverCardProps {
  name: string;
  relationship: string;
  status: 'Verified' | 'Pending';
  permissions: string[];
  onEdit: () => void;
  onRemove: () => void;
}

const CaregiverCard = ({
  name,
  relationship,
  status,
  permissions,
  onEdit,
  onRemove
}: CaregiverCardProps) => {
  const statusStyles = {
    Verified: { bgcolor: '#dcfce7', color: '#166534' },
    Pending: { bgcolor: '#fef3c7', color: '#92400e' }
  };

  return (
    <Card sx={{ mb: 1.5 }}>
      <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
          <Avatar sx={{ bgcolor: '#8b5cf6', fontWeight: 600 }}>
            {name.split(' ').map(n => n[0]).join('')}
          </Avatar>
          <Box sx={{ flex: 1 }}>
            <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5 }}>
              {name}
            </Typography>
            <Typography variant="body2" component="div" sx={{ color: '#666' }}>
              {relationship} • <Chip 
                label={status} 
                size="small" 
                sx={{ 
                  ...statusStyles[status],
                  fontSize: '11px', 
                  height: 20 
                }} 
              />
            </Typography>
          </Box>
        </Box>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 1.5 }}>
          {permissions.map(permission => (
            <Chip 
              key={permission}
              label={permission} 
              size="small" 
              sx={{ 
                bgcolor: '#8b5cf6',
                color: '#fff',
                pointerEvents: 'none'
              }} 
            />
          ))}
        </Box>
        
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            size="small"
            variant="outlined"
            onClick={onEdit}
            sx={{ textTransform: 'none', bgcolor: '#f3f4f6', color: '#374151', border: 'none' }}
          >
            Edit
          </Button>
          <Button
            size="small"
            variant="outlined"
            onClick={onRemove}
            sx={{ textTransform: 'none', bgcolor: '#fef2f2', color: '#dc2626', border: 'none' }}
          >
            Remove
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CaregiverCard;