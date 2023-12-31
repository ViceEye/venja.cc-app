import * as React from "react"

import { Box, BoxProps, Paper, ThemeProvider } from "@mui/material"
import { useAccountTheme } from "../../styles/theme"

const AccountCard: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <>
      <ThemeProvider theme={useAccountTheme}>
        <Box mx={"auto"} maxWidth={"sm"} py={{ xs: 0, sm: 5 }} px={{ xs: 0, sm: 10 }} {...props}>
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
            {children}
          </Paper>
        </Box>
      </ThemeProvider>
    </>
  )
}

export default AccountCard
