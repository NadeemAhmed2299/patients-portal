import { Box, Paper, Typography } from "@mui/material";
import FeaturesLayout from "./featuresLayout";



export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <Box
            minHeight="100vh"
            justifyContent="center"
            alignItems="center"
            px={2}
        >
            <Paper
                elevation={3}                
                sx={{
                    padding: {
                        md: "100px",
                        xs: "20px"
                    },
                    maxWidth: '100%',
                    borderRadius: "24px",
                    mt: 2,
                    mb: 2
                }}
            >
                <Typography variant="h4" gutterBottom>
                    Welcome to your Care Journey
                </Typography>
                <Typography sx={{ mb: 3, opacity: "0.8", fontSize: '18px' }}>
                    We've received your oncology referral. Let's get you set up with the right care team and appointments.
                    Manage all your care in one place with Configural AI.
                </Typography>
            </Paper>
            <Paper
                elevation={3}
                sx={{
                    padding: {
                        md: "100px",
                        xs: "20px"
                    },
                    maxWidth: '100%',
                    borderRadius: "24px"
                }}
            >
                {children}
            </Paper>
            <FeaturesLayout />
        </Box>
    )
}
