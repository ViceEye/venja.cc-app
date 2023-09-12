import * as React from "react"

import { Box, Container, Link, Typography } from "@mui/material"

import "../styles/WIP.scss"
import logo from "/logo.svg"

const WIP: React.FC = () => {
  return (
    <>
      <Container className='wip-container'>
        <Box sx={{ width: "25%", margin: "0 auto" }}>
          <Link href='' underline='none'>
            <img src={logo} alt='logo' style={{ maxWidth: "100%" }} />
          </Link>
        </Box>
        <Typography variant='h2'>Work In Progress</Typography>
      </Container>
    </>
  )
}

export default WIP
