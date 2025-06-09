import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

interface DangerZoneCardProps {
  onDelete: () => void;
}

const DangerZoneCard: React.FC<DangerZoneCardProps> = ({ onDelete }) => (
  <Card sx={{ bgcolor: '#fef2f2', border: '1px solid #fca5a5', mt: 4 }}>
    <CardContent>
      <Typography variant="h6" sx={{ color: '#dc2626', fontWeight: 600, mb: 1 }}>
        Danger Zone
      </Typography>
      <Typography variant="body2" sx={{ color: '#dc2626', mb: 2 }}>
        Permanently delete your account and all associated data. This action cannot be undone.
      </Typography>
      <Button
        variant="contained"
        onClick={onDelete}
        sx={{
          bgcolor: '#dc2626',
          color: 'white',
          textTransform: 'none',
          fontWeight: 600,
          '&:hover': { bgcolor: '#b91c1c' }
        }}
        aria-label="Delete account"
      >
        Delete Account
      </Button>
    </CardContent>
  </Card>
);

export default DangerZoneCard;