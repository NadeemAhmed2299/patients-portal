'use client';

import React, { Fragment } from 'react';
import {
  Box
} from '@mui/material';
import PersonalInfornation from './components/PersonalInfornation';
import AccountPreferences from './components/AccountPreferences';
import PrivacyAndSecurity from './components/PrivacyAndSecurity';
import CaregiversAndFamilyAccess from './components/CaregiversAndFamilyAccess';
import SupportAndHelp from './components/SupportAndHelp';

// Types

const AccountManagementPage: React.FC = () => {

  return (
    <Fragment>
      {/* Header */}

      {/* Main Content */}
      <Box sx={{ p: 2.5, pb: 12.5 }}>
        {/* Personal Information */}
        <PersonalInfornation />

        {/* Account Preferences */}
        <AccountPreferences />

        {/* Privacy & Security */}
        <PrivacyAndSecurity />

        {/* Caregivers & Family Access */}
        <CaregiversAndFamilyAccess />

        {/* Support & Help */}
        <SupportAndHelp />
      </Box>
    </Fragment>
  );
};

export default AccountManagementPage;