"use client"

import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';

interface QuickActionItem {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  path: string;
  color?: string;
  hasNotification?: boolean;
}

interface QuickActionsGridProps {
  appointments?: Array<{
    id: string;
    date: Date;
    status: string;
  }>;
}

const QuickActionsGrid: React.FC<QuickActionsGridProps> = ({ appointments = [] }) => {
  const router = useRouter();

  const quickActions: QuickActionItem[] = [
    {
      id: 'prep-checklist',
      icon: '📋',
      title: 'Prep Checklist',
      subtitle: '2 items pending',
      path: '/appointments',
      color: '#509cde',
      hasNotification: true
    },
    {
      id: 'bill-pay',
      icon: '💳',
      title: 'Bill Pay',
      subtitle: '$285.00 due',
      path: '/billing',
      color: '#f59e0b'
    },
    {
      id: 'symptoms',
      icon: '🩺',
      title: 'Symptoms',
      subtitle: 'Log how you feel',
      path: '/symptoms',
      color: '#509cde'
    },
    {
      id: 'message-team',
      icon: '💬',
      title: 'Message Team',
      subtitle: 'Ask questions',
      path: '/support',
      color: '#509cde'
    },
    {
      id: 'health-records',
      icon: '📄',
      title: 'Health Records',
      subtitle: 'View & download',
      path: '/health-records',
      color: '#509cde'
    },
    {
      id: 'community',
      icon: '🤝',
      title: 'Community Support',
      subtitle: 'Connect & share',
      path: '/community',
      color: '#509cde'
    }
  ];

  const handleActionClick = (action: QuickActionItem) => {
    if (action.id === 'prep-checklist') {
      const nextAppointment = appointments
        .filter(app => app.date >= new Date() && app.status !== 'Cancelled')
        .sort((a, b) => a.date.getTime() - b.date.getTime())[0];
      
      if (nextAppointment) {
        router.push(`/appointments/${nextAppointment.id}/prep`);
        return;
      }
    }
    router.push(action.path);
  };

  return (
    <Box sx={{ 
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '15px',
      marginBottom: '25px'
    }}>
      {quickActions.map((action) => (
        <Box 
          key={action.id}
          onClick={() => handleActionClick(action)}
          sx={{ 
            background: 'white',
            borderRadius: '12px',
            padding: '20px',
            textAlign: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            border: '1px solid #e5e7eb',
            cursor: 'pointer',
            transition: 'transform 0.2s',
            position: 'relative',
            '&:hover': {
              transform: 'translateY(-2px)'
            }
          }}
        >
          {action.hasNotification && (
            <Box 
              sx={{ 
                position: 'absolute',
                top: 10,
                right: 10,
                width: 12,
                height: 12,
                bgcolor: '#ef4444',
                borderRadius: '50%',
                border: '2px solid white'
              }}
            />
          )}
          <Box sx={{ 
            width: 40,
            height: 40,
            background: action.color || '#509cde',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 10px',
            color: 'white',
            fontSize: 18
          }}>
            {action.icon}
          </Box>
          <Typography sx={{ fontWeight: 600, marginBottom: '5px' }}>
            {action.title}
          </Typography>
          <Typography sx={{ fontSize: 12, color: '#666' }}>
            {action.subtitle}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default QuickActionsGrid;