import * as React from "react"

import { Box, Button, Checkbox, FormControlLabel, Link, Paper } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"

import Copyright from "../components/Copyright"
import NoStarTextField from "../components/NoStarTextField"

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
      <Grid container component='main' sx={{ height: "100vh" }}>
        <Grid
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box p={3} mx={"auto"} my={16} maxWidth={"sm"}>
            <Box component='form' noValidate onSubmit={handleSubmit}>
              <NoStarTextField
                id='username'
                props={{ autoComplete: "username", autoFocus: true, label: "Username" }}
              />
              <Box>
                <Link href='/register' variant='body2'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Box>
              <NoStarTextField
                id='password'
                props={{ type: "password", autoComplete: "current-password", label: "Password" }}
              />
              <Box>
                <Link href='#' variant='body2'>
                  Forgot password?
                </Link>
              </Box>
              <Box mt={2}>
                <FormControlLabel
                  control={<Checkbox value='remember' color='primary' />}
                  label='Remember me'
                />
              </Box>
              <Button type='submit' fullWidth variant='contained' sx={{ my: 1 }}>
                Sign In
              </Button>
              <Copyright props={{ align: "center", sx: { mt: 5 } }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default SignIn
