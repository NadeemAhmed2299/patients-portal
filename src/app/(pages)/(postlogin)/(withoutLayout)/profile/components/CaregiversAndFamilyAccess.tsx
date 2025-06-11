import { Box, Button, Grid, Typography } from '@mui/material'
import { Add as AddIcon } from '@mui/icons-material';
import React, { useState } from 'react'
import CaregiverCard from './CaregiverCard'
import { isValidEmail } from '@/app/utils/util';
import CaregiverModal from './CaregiverModal';

interface Permissions {
    appointments: boolean;
    schedule: boolean;
    results: boolean;
    billing: boolean;
    messages: boolean;
    emergency: boolean;
}

type CaregiverStatus = 'Verified' | 'Pending';

interface Caregiver {
    id: string;
    name: string;
    relationship: string;
    status: CaregiverStatus;
    email: string;
    phone: string;
    permissions: Permissions;
}

interface CaregiverFormData extends Omit<Caregiver, 'id' | 'status'> {
    id?: string;
    status?: CaregiverStatus;
}

function CaregiversAndFamilyAccess() {

    const getPermissionLabels = (permissions: Permissions): string[] => {
        return Object.entries(permissions)
            .filter(([_, value]) => value)
            .map(([key]) => {
                switch (key) {
                    case 'appointments': return 'View Appointments';
                    case 'schedule': return 'Schedule Changes';
                    case 'results': return 'Lab Results';
                    case 'billing': return 'Billing Access';
                    case 'messages': return 'Care Messages';
                    case 'emergency': return 'Emergency Contact';
                    default: return '';
                }
            });
    };

    const [caregivers, setCaregivers] = useState<Caregiver[]>([
        {
            id: 'sarah',
            name: 'Sarah Johnson',
            relationship: 'wife',
            status: 'Verified',
            email: 'sarah.johnson@email.com',
            phone: '(555) 123-4567',
            permissions: {
                appointments: true,
                schedule: true,
                results: true,
                billing: false,
                messages: false,
                emergency: false
            }
        },
        {
            id: 'michael',
            name: 'Michael Johnson',
            relationship: 'son',
            status: 'Pending',
            email: 'mike.johnson@email.com',
            phone: '(555) 765-4321',
            permissions: {
                appointments: true,
                schedule: false,
                results: false,
                billing: false,
                messages: false,
                emergency: false
            }
        }
    ]);

    const [caregiverModalOpen, setCaregiverModalOpen] = useState(false);
    const [editingCaregiver, setEditingCaregiver] = useState<string | null>(null);


    const handleAddCaregiver = () => {
        setEditingCaregiver(null);
        setCaregiverModalOpen(true);
    };

    const handleEditCaregiver = (id: string) => {
        setEditingCaregiver(id);
        setCaregiverModalOpen(true);
    };

    const handleSaveCaregiver = (data: CaregiverFormData) => {
        if (!data.name || !data.relationship || !data.email) {
            alert('Please fill in all required fields.');
            return;
        }

        if (!isValidEmail(data.email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (editingCaregiver) {
            setCaregivers(caregivers.map(c =>
                c.id === editingCaregiver ? { ...c, ...data } as Caregiver : c
            ));
            alert(`${data.name} updated successfully!`);
        } else {
            const newCaregiver: Caregiver = {
                id: Math.random().toString(36).substring(2, 9),
                ...data,
                status: 'Pending'
            };
            setCaregivers([...caregivers, newCaregiver]);
            alert(`Invitation sent to ${data.name}!`);
        }

        setCaregiverModalOpen(false);
    };

    const handleRemoveCaregiver = (id: string) => {
        const caregiver = caregivers.find(c => c.id === id);
        if (!caregiver) return;

        if (window.confirm(`Remove ${caregiver.name} as a caregiver?\n\nThey will no longer have access to your health information and appointments.`)) {
            setCaregivers(caregivers.filter(c => c.id !== id));
            alert(`${caregiver.name} has been removed as a caregiver.`);
        }
    };

    return (
        <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#333' }}>
                Caregivers & Family Access
            </Typography>

            <Grid container spacing={2}>
                {caregivers.map(caregiver => (
                    <Grid key={caregiver.id} size={{ xs: 12, md: 4 }} sx={{ mb: 1.5 }}>
                        <CaregiverCard
                            name={caregiver.name}
                            relationship={caregiver.relationship}
                            status={caregiver.status as 'Verified' | 'Pending'}
                            permissions={getPermissionLabels(caregiver.permissions)}
                            onEdit={() => handleEditCaregiver(caregiver.id)}
                            onRemove={() => handleRemoveCaregiver(caregiver.id)}
                        />
                    </Grid>
                ))}
                <Grid size={{ xs: 12, md: 4 }} sx={{ mb: 1.5, display: 'flex' }}>
                    <Button
                        variant="contained"
                        onClick={handleAddCaregiver}
                        startIcon={<AddIcon />}
                        sx={{
                            bgcolor: { xs: '#8b5cf6', md: 'rgba(139, 92, 246, 0.05)' },
                            color: { xs: '#fff', md: '#000' },
                            borderRadius: '12px',
                            p: 2,
                            width: '100%',
                            height: { md: '100%' },
                            textTransform: 'none',
                            fontWeight: 600,
                            mt: { xs: 2, md: 0 },
                            border: '2px dashed rgba(139, 92, 246, 0.3)',
                            '&:hover': {
                                bgcolor: { xs: '#6c5aae', md: 'rgba(139, 92, 246, 0.1)' }
                            }
                        }}
                        aria-label="Add new caregiver"
                    >
                        Add New Caregiver
                    </Button>
                </Grid>
            </Grid>
            <CaregiverModal
                open={caregiverModalOpen}
                onClose={() => setCaregiverModalOpen(false)}
                onSubmit={handleSaveCaregiver}
                initialData={editingCaregiver ? caregivers.find(c => c.id === editingCaregiver) : undefined}
            />
        </Box>
    )
}

export default CaregiversAndFamilyAccess
