import * as React from "react"

import { Box, Button, Link, Paper } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"

import Copyright from "../components/Copyright"
import NoStarTextField from "../components/NoStarTextField"

const SignUp: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      username: data.get("username"),
      password: data.get("password"),
      repeated: data.get("repeated"),
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
              <NoStarTextField id='username' props={{ autoFocus: true, label: "Username" }} />
              <Box>
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
              <Copyright props={{ align: "center", sx: { mt: 5 } }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default SignUp
