import { Box, Button, Link, Paper, Typography } from "@mui/material"

import NoStarTextField from "../components/NoStarTextField"

const SignUp: React.FC = () => {
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
                Register
              </Typography>
              <Typography px={5} pb={2}>
                Hey, Enter your details to sign up an account
              </Typography>
              <NoStarTextField id='username' props={{ autoFocus: true, label: "Username" }} />
              <Box textAlign={"left"} mb={2}>
                <Link href='/login' variant='body2'>
                  {"Already have an account? Sign in"}
                </Link>
              </Box>
              <NoStarTextField id='password' props={{ type: "password", label: "Password" }} />
              <NoStarTextField
                id='repeated'
                props={{ type: "repeated", label: "Repeat Password" }}
              />
              <Button type='submit' fullWidth variant='contained' sx={{ my: 2 }}>
                Sign Up
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  )
}

export default SignUp
