import styled from "@emotion/styled"
import { Box, Button, Checkbox, FormControlLabel, Link, Paper, Typography } from "@mui/material"

import NoStarTextField from "../components/NoStarTextField"

const SizedFormContrlLabel = styled(FormControlLabel)({
  "& .MuiTypography-root": {
    fontSize: 15,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
})

const SignIn: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      username: data.get("username"),
      password: data.get("password"),
    })
  }

  return (
    <>
      <Box
        className='background'
        width={"100%"}
        height={"100vh"}
        sx={{ backgroundColor: "rgb(246,242,235)" }}
      >
        <Box
          className='container'
          mx={"auto"}
          maxWidth={"sm"}
          py={{ xs: 0, sm: 5 }}
          px={{ xs: 0, sm: 10 }}
        >
          <Paper
            elevation={1}
            sx={{
              height: { xs: "100vh", sm: "100%" },
              my: { xs: 0, sm: 10 },
              borderRadius: { xs: 0, sm: 8 },
              px: 5,
              py: { xs: 15, sm: 5 },
              textAlign: "center",
            }}
          >
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
          </Paper>
        </Box>
      </Box>
    </>
  )
}

export default SignIn
