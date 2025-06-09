"use client"

import { Box, Grid, Typography, Paper, Stack, useTheme } from '@mui/material';
import { FC } from 'react';
import Image from 'next/image';
import { LoginCalendar, LoginCare, LoginChat, LoginCheckin, LoginTreatment } from '@/app/svg';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: LoginCalendar,
    title: 'Self Scheduling',
    description: 'Choose appointment times that work with your personal schedule',
  },
  {
    icon: LoginTreatment,
    title: 'Treatment Plan',
    description: 'See your complete care journey and upcoming treatment schedule',
  },
  {
    icon: LoginCheckin,
    title: 'Virtual Check-in',
    description: 'Save time by checking in from your phone before arriving at your visit',
  },
  {
    icon: LoginCare,
    title: 'Care Coordination',
    description: 'We\'ll coordinate lab work, imaging, and therapy all in one seamless system',
  }
];

const FeaturesLayout: FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ px: { xs: 2, md: 4 }, py: 4}}>
      <Typography
        variant="h2"
        sx={{
          fontWeight: 600,
          mb: 4,
          textAlign: 'center',
          display: 'inline-block',
        }}
      >
        How Configural AI Works For You
      </Typography>

      <Grid container spacing={3}>
        {features.map((feature, idx) => (
          <Grid
            key={idx}
            size={{xs: 12, sm: 6,}}
            
          >
            <Paper
              elevation={1}
              sx={{
                p: 3,
                borderRadius: 3,
                height: '100%',
              }}
            >
              <Stack direction="row" spacing={2} alignItems="flex-start">
                <Image src={feature.icon} alt={feature.title} width={32} height={32} />
                <Box>
                  <Typography variant="subtitle1" fontWeight={600}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" mt={0.5}>
                    {feature.description}
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3} mt={4}>
        <Paper
              elevation={1}
              sx={{
                p: 3,
                borderRadius: 3,
                height: '100%',
                width: "100%"
              }}
            >
              <Stack direction="row" spacing={2} alignItems="flex-start">
                <Image src={LoginChat} alt="Direct Communication Channel" width={32} height={32} />
                <Box>
                  <Typography variant="subtitle1" fontWeight={600}>
                    Direct Communication Channel
                  </Typography>
                  <Typography variant="body2" mt={0.5}>
                    Message your care team and get timely updates about your treatment
                  </Typography>
                </Box>
              </Stack>
            </Paper>
      </Grid>
    </Box>
  );
};

export default FeaturesLayout;
