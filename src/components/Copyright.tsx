import * as React from "react"

import { Typography, Link, TypographyOwnProps } from "@mui/material"

export const Copyright: React.FC = (props: TypographyOwnProps) => {
  return (
    <Typography color='text.secondary' {...props}>
      {"Copyright © "}
      <Link color='inherit' href='/'>
        Venja.cc
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}
