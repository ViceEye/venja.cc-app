import * as React from "react"

import styled from "@emotion/styled"
import { Box, Button, Checkbox, FormControlLabel, Link, Typography } from "@mui/material"

import AccountCard from "../components/account/AccountCard"
import NoStarTextField from "../components/account/NoStarTextField"
import { useAccountTheme } from "../styles/theme"

const SizedFormContrlLabel = styled(FormControlLabel)({
  "& .MuiTypography-root": {
    fontSize: 15,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
})

const SignIn: React.FC = () => {
  // Background Color
  React.useEffect(() => {
    document.body.style.backgroundColor = useAccountTheme.palette.background.default
    return () => {
      document.body.style.backgroundColor = ""
    }
  }, [])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      username: data.get("username"),
      password: data.get("password"),
    })
  }

  return (
    <AccountCard>
      <Box component='form' noValidate onSubmit={handleSubmit}>
        <Typography px={5} py={1} fontSize={28} fontWeight={800}>
          Login
        </Typography>
        <Typography px={5} pb={2}>
          Hey, Enter your details to get sign in to your account
        </Typography>
        <NoStarTextField
          id='username'
          props={{ autoComplete: "username", autoFocus: true, label: "Username" }}
        />
        <Box textAlign={"left"} mb={1}>
          <Link href='/register' variant='body2'>
            {"Don't have an account? Sign Up"}
          </Link>
        </Box>
        <NoStarTextField
          id='password'
          props={{ type: "password", autoComplete: "current-password", label: "Password" }}
        />
        <Box textAlign={"left"}>
          <Link href='#' variant='body2'>
            Forgot password?
          </Link>
        </Box>
        <Box textAlign={"left"}>
          <SizedFormContrlLabel control={<Checkbox value='remember' />} label='Remember me' />
        </Box>
        <Button type='submit' fullWidth variant='contained' sx={{ mt: 1, mb: 3 }}>
          Sign In
        </Button>
      </Box>
    </AccountCard>
  )
}

export default SignIn
