"use client"

import { Box, Typography, Button } from '@mui/material';

interface BalanceCardProps {
  amount?: string;
  dueDate?: string;
  onPayNow?: () => void;
  onViewBill?: () => void;
}

const BalanceCard = ({
  amount = '$285.00',
  dueDate = 'April 30, 2025',
  onPayNow = () => console.log('Pay Now clicked'),
  onViewBill = () => console.log('View Bill clicked'),
}: BalanceCardProps) => {
  return (
    <Box 
    
      sx={{
        backgroundColor: '#fffbeb',
        borderRadius: '12px',
        border: '1px solid #f59e0b',
        mb: 3,  
        p: 3 
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, mb: 1.5 }}>
        <Typography fontSize={24}>💳</Typography>
        <Typography fontWeight={600} color="#92400e">
          Outstanding Balance
        </Typography>
      </Box>
      <Typography sx={{ fontSize: 24, fontWeight: 700, color: '#92400e', mb: 0.5 }}>
        {amount}
      </Typography>
      <Typography sx={{ fontSize: 14, color: '#92400e', mb: 1.5 }}>
        Due: {dueDate}
      </Typography>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Button
          variant="contained"
          onClick={onPayNow}
          sx={{
            flex: 1,
            bgcolor: '#f59e0b',
            color: 'white',
            '&:hover': { bgcolor: '#d97706' },
            borderRadius: 2,
            textTransform: 'none',
            fontWeight: 600
          }}
          startIcon={<Box>💳</Box>}
        >
          Pay Now
        </Button>
        <Button
          variant="outlined"
          onClick={onViewBill}
          sx={{
            bgcolor: 'transparent',
            color: '#92400e',
            border: '1px solid #92400e',
            borderRadius: 2,
            textTransform: 'none',
            fontWeight: 600
          }}
        >
          View Bill
        </Button>
      </Box>
    </Box>
  );
};

export default BalanceCard;