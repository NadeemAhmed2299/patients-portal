"use client"

import React, { useEffect } from 'react';
import {
  Modal,
  Fade,
  Box,
  Typography,
  IconButton,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Grid,
  Button
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

interface Permissions {
    appointments: boolean;
    schedule: boolean;
    results: boolean;
    billing: boolean;
    messages: boolean;
    emergency: boolean;
}

interface CaregiverFormData {
  name: string;
  relationship: string;
  email: string;
  phone: string;
  permissions: Permissions;
}

interface CaregiverModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: CaregiverFormData) => void;
  initialData?: CaregiverFormData;
}

const defaultFormData: CaregiverFormData = {
  name: '',
  relationship: '',
  email: '',
  phone: '',
  permissions: {
    appointments: true,
    schedule: false,
    results: false,
    billing: false,
    messages: false,
    emergency: false
  }
};

const CaregiverModal: React.FC<CaregiverModalProps> = ({ 
  open, 
  onClose, 
  onSubmit,
  initialData = defaultFormData
}) => {
  const [formData, setFormData] = React.useState<CaregiverFormData>(initialData);

  // Update form data when initialData changes
  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  const handleChange = (field: keyof Omit<CaregiverFormData, 'permissions'>, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePermissionChange = (permission: keyof Permissions) => {
    setFormData(prev => ({
      ...prev,
      permissions: {
        ...prev.permissions,
        [permission]: !prev.permissions[permission]
      }
    }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      aria-labelledby="add-caregiver-modal-title"
      aria-describedby="add-caregiver-modal-description"
    >
      <Fade in={open}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'white',
            borderRadius: 2,
            p: 3,
            width: '90%',
            maxWidth: 800,
            maxHeight: '80vh',
            overflow: 'auto',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            outline: 'none'
          }}
          role="dialog"
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, pb: 2, borderBottom: '1px solid #e5e7eb' }}>
            <Typography id="add-caregiver-modal-title" variant="h6" component="h2">
              {initialData.name ? 'Edit Caregiver' : 'Add New Caregiver'}
            </Typography>
            <IconButton onClick={onClose} size="small" aria-label="Close modal">
              <CloseIcon />
            </IconButton>
          </Box>
          
          <Box sx={{ mt: 2 }} id="add-caregiver-modal-description">
            <TextField
              fullWidth
              label="Full Name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="Enter full name"
              sx={{ mb: 2 }}
              required
              inputProps={{ 'aria-label': 'Caregiver full name' }}
            />
            
            <FormControl fullWidth sx={{ mb: 2 }} required>
              <InputLabel id="relationship-label">Relationship</InputLabel>
              <Select
                value={formData.relationship}
                onChange={(e) => handleChange('relationship', e.target.value)}
                label="Relationship"
                labelId="relationship-label"
                inputProps={{ 'aria-label': 'Caregiver relationship' }}
              >
                <MenuItem value="">Select relationship</MenuItem>
                <MenuItem value="spouse">Spouse</MenuItem>
                <MenuItem value="parent">Parent</MenuItem>
                <MenuItem value="child">Child</MenuItem>
                <MenuItem value="wife">Wife</MenuItem>
                <MenuItem value="son">Son</MenuItem>
                <MenuItem value="sibling">Sibling</MenuItem>
                <MenuItem value="friend">Friend</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
            
            <TextField
              fullWidth
              type="email"
              label="Email Address"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="Enter email address"
              sx={{ mb: 2 }}
              required
              inputProps={{ 'aria-label': 'Caregiver email' }}
            />
            
            <TextField
              fullWidth
              label="Phone Number"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              placeholder="Enter phone number"
              sx={{ mb: 2 }}
              inputProps={{ 'aria-label': 'Caregiver phone number' }}
            />
            
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                Permissions
              </Typography>
              <FormGroup>
                <Grid container spacing={1}>
                  <Grid size= {{ xs: 6 }}>
                    <FormControlLabel
                      control={
                        <Checkbox 
                          checked={formData.permissions.appointments}
                          onChange={() => handlePermissionChange('appointments')}
                          size="small"
                          inputProps={{ 'aria-label': 'View appointments permission' }}
                        />
                      }
                      label="View Appointments"
                    />
                  </Grid>
                  <Grid size= {{ xs: 6 }}>
                    <FormControlLabel
                      control={
                        <Checkbox 
                          checked={formData.permissions.schedule}
                          onChange={() => handlePermissionChange('schedule')}
                          size="small"
                          inputProps={{ 'aria-label': 'Schedule changes permission' }}
                        />
                      }
                      label="Schedule Changes"
                    />
                  </Grid>
                  <Grid size= {{ xs: 6 }}>
                    <FormControlLabel
                      control={
                        <Checkbox 
                          checked={formData.permissions.results}
                          onChange={() => handlePermissionChange('results')}
                          size="small"
                          inputProps={{ 'aria-label': 'Lab results permission' }}
                        />
                      }
                      label="Lab Results"
                    />
                  </Grid>
                  <Grid size= {{ xs: 6 }}>
                    <FormControlLabel
                      control={
                        <Checkbox 
                          checked={formData.permissions.billing}
                          onChange={() => handlePermissionChange('billing')}
                          size="small"
                          inputProps={{ 'aria-label': 'Billing access permission' }}
                        />
                      }
                      label="Billing Access"
                    />
                  </Grid>
                  <Grid size= {{ xs: 6 }}>
                    <FormControlLabel
                      control={
                        <Checkbox 
                          checked={formData.permissions.messages}
                          onChange={() => handlePermissionChange('messages')}
                          size="small"
                          inputProps={{ 'aria-label': 'Care messages permission' }}
                        />
                      }
                      label="Care Messages"
                    />
                  </Grid>
                  <Grid size= {{ xs: 6 }}>
                    <FormControlLabel
                      control={
                        <Checkbox 
                          checked={formData.permissions.emergency}
                          onChange={() => handlePermissionChange('emergency')}
                          size="small"
                          inputProps={{ 'aria-label': 'Emergency contact permission' }}
                        />
                      }
                      label="Emergency Contact"
                    />
                  </Grid>
                </Grid>
              </FormGroup>
            </Box>
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, mt: 3 }}>
              <Button 
                variant="outlined" 
                onClick={onClose}
                sx={{ flex: 1, textTransform: 'none' }}
                aria-label="Cancel"
              >
                Cancel
              </Button>
              <Button 
                variant="contained" 
                onClick={handleSubmit}
                sx={{ 
                  flex: 1, 
                  bgcolor: '#8b5cf6', 
                  '&:hover': { bgcolor: '#6c5aae' },
                  textTransform: 'none'
                }}
                aria-label="Submit"
              >
                {initialData.name ? 'Update' : 'Send Invitation'}
              </Button>
            </Box>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default CaregiverModal;