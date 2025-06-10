'use client';

import React, { Fragment, useEffect } from 'react';
import {
  Grid
} from '@mui/material';
import PersonalInfornation from './components/PersonalInfornation';
import AccountPreferences from './components/AccountPreferences';
import PrivacyAndSecurity from './components/PrivacyAndSecurity';
import CaregiversAndFamilyAccess from './components/CaregiversAndFamilyAccess';
import SupportAndHelp from './components/SupportAndHelp';
import { useHeader } from '@/app/contexts/headerContext';

// Types

const AccountManagementPage: React.FC = () => {

  const { setHeaderContent } = useHeader();

  useEffect(() => {
    setHeaderContent({
      variant: 'patient-profile',
      title: 'Account Management',
      patientDetails: {
        name: 'Sarah Johnson',
        mrn: 'MRN78945',
        age: '58'
      }
    });
  }, [setHeaderContent]);

  return (
    <Fragment>
      <Grid container spacing={2} sx={{ p: 2.5, pb: 0 }}>
        {/* First Column */}
        <Grid size={{ xs: 12, md: 6 }}>
          {/* Personal Information - Row 1 Column 1 */}
          <PersonalInfornation />

          {/* Privacy & Security - Row 2 Column 1 */}
          <PrivacyAndSecurity />
        </Grid>

        {/* Second Column */}
        <Grid size={{ xs: 12, md: 6 }}>
          {/* Account Preferences - Row 1 Column 2 */}
          <AccountPreferences />
        </Grid>
      </Grid>

      <Grid sx={{ p: 2.5, pt: 0, pb: 10 }}>
        {/* Caregivers & Family Access */}
        <CaregiversAndFamilyAccess />

        {/* Support & Help */}
        <SupportAndHelp />
      </Grid>
    </Fragment>
  );
};

export default AccountManagementPage;