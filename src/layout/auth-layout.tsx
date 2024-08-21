import { Stack, Box, styled } from "@mui/material";
import { ReactNode } from "react";
import Logo from "../components/Logo";

const OverallContainer = styled('div')(() => ({
  width: '100%',
  minHeight: '100vh',
  height: '100%',
  display: 'flex',
  padding: '20px 0px'
}))

const ContentBox = styled(Box)(() => ({
  padding: '20px',
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const InformationContainer = styled('div')(({ theme }) => ({
  padding: 32,
  border: `1px solid ${theme.palette.secondary.main}`,
  borderRadius: 24,
}));

interface AL {
    children: ReactNode
}

const AuthLayout = ({ children }: AL) => {

  return (
    <OverallContainer>
        <ContentBox>
            <InformationContainer>
                <Stack gap={2} alignItems='center'>
                    <Logo />
                    {children}
                </Stack>
            </InformationContainer>
        </ContentBox>
    </OverallContainer>
  )
}

export default AuthLayout