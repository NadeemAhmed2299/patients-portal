"use client";

import { default as TextBox } from '@/app/lib/TextBox';
import { Box, Button, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { Fragment, useState } from 'react';

const Page = () => {
    const [accountId, setAccountId] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!accountId) {
            setError('Please provide email or phone number');
            return;
        }


        alert('Logging in with:' + JSON.stringify({ accountId: accountId }));
    };

    return (
        <Fragment>
            <Typography variant="h4" gutterBottom textAlign="center">
                Signup to Account
            </Typography>
            <Typography sx={{ mb: 3, opacity: "0.8", fontSize: '18px' }} textAlign="center">
                Please enter your email or phone number to continue
            </Typography>

            <form onSubmit={handleLogin}>
                <Stack spacing={2} alignItems={"center"}>
                    <TextBox
                        label="Email ID/Phone Number"
                        name="accountId"
                        type="text"
                        value={accountId}
                        onChange={(e) => setAccountId(e.target.value)}
                        fullWidth
                        sx={{ maxWidth: "480px", width: "100%" }}
                        helperText={error}
                    />
                    <Button size='large' sx={{ maxWidth: "420px", fontSize: '20px', width: "100%" }} type="submit" variant="contained" disableElevation fullWidth>
                        Continue
                    </Button>
                </Stack>
            </form>
        </Fragment>
    );
};

export default Page;