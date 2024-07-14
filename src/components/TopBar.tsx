import { AppBar, Stack, Toolbar, Typography } from "@mui/material"
import Logo from "./logo"

const TopBar = () => {
  return (
    <AppBar color="transparent" elevation={0} position="static">
        <Toolbar>
            <Stack className="w-full" direction='row' alignItems='center' justifyContent='space-between' gap={3}>
                <Logo />
                <Typography>Content</Typography>
            </Stack>
        </Toolbar>
    </AppBar>
  )
}

export default TopBar