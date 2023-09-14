import { Box, Button, Link, Typography } from "@mui/material"

import FormCard from "../components/FormCard"
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
    <FormCard>
      <Box component='form' noValidate onSubmit={handleSubmit}>
        <Typography px={5} py={1} fontSize={28} fontWeight={800}>
          Register
        </Typography>
        <Typography px={5} pb={2}>
          Welcome, Enter your details to sign up an account
        </Typography>
        <NoStarTextField id='username' props={{ autoFocus: true, label: "Username" }} />
        <Box textAlign={"left"} mb={2}>
          <Link href='/login' variant='body2'>
            {"Already have an account? Sign in"}
          </Link>
        </Box>
        <NoStarTextField id='password' props={{ type: "password", label: "Password" }} />
        <NoStarTextField id='repeated' props={{ type: "repeated", label: "Repeat Password" }} />
        <Button type='submit' fullWidth variant='contained' sx={{ my: 2 }}>
          Sign Up
        </Button>
      </Box>
    </FormCard>
  )
}

export default SignUp
