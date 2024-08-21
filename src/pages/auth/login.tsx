import { Stack, Typography } from "@mui/material";
import { LoadingButton } from '@mui/lab';
import GuestGuard from "../../auth/GuestGuard"
import AuthLayout from "../../layout/auth-layout"
import { Google } from '@mui/icons-material';
import { useAuthContext } from "../../auth/auth-context";
import { useState } from "react";
import { useSnackbar } from "notistack";


const LoginPage = () => {

    const { login } = useAuthContext();
    const { enqueueSnackbar } = useSnackbar();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const loginHandler = async () => {
        try {
            setIsLoading(true);
            await login();
        } catch (err: any) {
            const errorMessage = err?.message || err || 'An error occured';
            enqueueSnackbar(errorMessage, { variant: 'error' });
        } finally {
            setIsLoading(false);
        }
    }

    const renderHead = (
        <Stack spacing={1} sx={{ mb: 1 }} alignItems='center'>
          <Typography variant="h6">Welcome Back!</Typography>
        </Stack>
    );

    const renderForm = (
        <LoadingButton loading={isLoading} onClick={loginHandler} startIcon={<Google />} variant='contained'>Login With Google</LoadingButton>
    )

  return (
    <GuestGuard>
        <AuthLayout>
            {renderHead}
            {renderForm}
        </AuthLayout>
    </GuestGuard>
  )
}

export default LoginPage