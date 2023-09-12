import * as React from "react"

import { Typography, Link, TypographyOwnProps } from "@mui/material"

interface CopyrightProps {
  props?: TypographyOwnProps
}

const Beian: React.FC<CopyrightProps> = ({ props }) => {
  return (
    <Typography variant='body2' {...props}>
      <Link href='https://beian.miit.gov.cn/' underline='none'>
        闽ICP备2021003209号-2
      </Link>
    </Typography>
  )
}

export default Beian
