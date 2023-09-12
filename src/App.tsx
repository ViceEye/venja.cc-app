import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Box, CssBaseline, ThemeProvider } from "@mui/material"

import Footer from "./components/Footer"
import Dashboard from "./pages/Dashboard"
import Grids from "./pages/Grids"
import SignInSide from "./pages/Login"
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
              <Route path='/login' element={<SignInSide />} />
            </Routes>
            <Footer />
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
