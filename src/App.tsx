import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Box, CssBaseline, ThemeProvider } from "@mui/material"

import Footer from "./components/Footer"
import Dashboard from "./pages/Dashboard"
import Grids from "./pages/Grids"
import SignIn from "./pages/Login"
import SignUp from "./pages/Register"
import WIP from "./pages/WIP"

import { theme } from "./styles/theme"

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CssBaseline />
          <Box position={"relative"} minHeight={"100vh"}>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/grids' element={<Grids />} />
              <Route path='/wip' element={<WIP />} />
              <Route path='/login' element={<SignIn />} />
              <Route path='/register' element={<SignUp />} />
            </Routes>
            <Footer />
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
