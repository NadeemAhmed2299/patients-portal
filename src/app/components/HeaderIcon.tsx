import { Box } from '@mui/material';
import React from 'react'

function HeaderIcon({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
    return (
        <Box
            sx={{
                fontSize: '20px',
                cursor: 'pointer',
                opacity: 0.9,
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            onClick={onClick}
        >
            {children}
        </Box>
    );
}

export default HeaderIcon
