import * as React from "react"

import { Typography, Link, TypographyOwnProps } from "@mui/material"

interface CopyrightProps {
  props?: TypographyOwnProps
}

const Copyright: React.FC<CopyrightProps> = ({ props }) => {
  return (
    <Typography variant='body2' color='text.secondary' {...props}>
      {"MIT Licensed | Copyright © "}
      <Link color='inherit' href='/'>
        Venja.cc
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

export default Copyright
