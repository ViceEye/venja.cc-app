import { ThemeOptions, createTheme } from "@mui/material"

export const theme = createTheme({
  typography: {
    fontFamily: "Inter,Roboto,system-ui,Avenir,Helvetica,Arial,sans-serif",
  },
})

const accountTheme: ThemeOptions = {
  palette: {
    background: {
      default: "rgb(244, 250, 255)",
    },
  },
}
export const useAccountTheme = createTheme(theme, accountTheme)
