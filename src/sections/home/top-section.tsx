'use client'

import { useGSAP } from "@gsap/react"
import { Button, Stack, styled, Typography } from "@mui/material";
import gsap from 'gsap';
import Scene from "./scene";

const ContentStack = styled(Stack)(() => ({
    height: '100%',
    width: '100%',
    minHeight: '85vh'
}))

const TopSection = () => {

  useGSAP(() => {
    gsap.fromTo('#stagger-top', {
      y: 250,
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      yoyo: true,
      stagger: {
        amount: 0.5,
        ease: 'circ.inOut',
      }
    })
  }, []);

  return (
    <ContentStack gap={3} direction='row' alignItems='center'>

      <Stack sx={{ flex: 1 }} gap={3}>
        <Typography id='stagger-top' className="opacity-0" variant="h2" fontWeight={600} lineHeight={1}>
            Welcome to my
            <br />
            Portfolio
        </Typography>
        <Typography id='stagger-top' className="opacity-0" variant='h6'>Explore my latest projects and learn more about my skills</Typography>
        <Stack id='stagger-top' className="opacity-0" gap={2} direction='row' alignItems='center'>
            <Button sx={{ backgroundColor: 'white', color: 'background.default' }} variant="contained" color="inherit">View Projects</Button>
            <Button variant="outlined" color='inherit'>Contact Me</Button>
        </Stack>
      </Stack>

      <div className="flex-1 h-full min-h-fit">
        <Scene />
      </div>
    </ContentStack>
  )
}

export default TopSection