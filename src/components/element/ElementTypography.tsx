import * as React from "react"

import { Box, Typography } from "@mui/material"

interface TypographyProps {
  title?: string
  content?: string
}

const ETypography: React.FC<TypographyProps> = ({ title, content }) => {
  return (
    <>
      <Box p={2} textAlign={"left"}>
        <Typography variant='h6'>{title}</Typography>
        {content?.split("\\n")?.map((line) => <Typography variant='body2'>{line}</Typography>)}
      </Box>
    </>
  )
}

export default ETypography
