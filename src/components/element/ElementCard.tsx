import * as React from "react"

import { Box, BoxProps, Paper } from "@mui/material"

interface CardProps extends BoxProps {
  posTop?: boolean
  fullBorder?: boolean
}

const ECard: React.FC<CardProps> = ({ children, posTop, fullBorder, ...props }) => {
  return (
    <>
      <Box mx={"auto"} {...props}>
        <Paper
          elevation={0}
          sx={{
            height: "100%",
            overflow: "hidden",
            borderTopLeftRadius: { xs: 0, sm: fullBorder ? 15 : posTop ? 15 : 0 },
            borderTopRightRadius: { xs: 0, sm: 15 },
            borderBottomLeftRadius: { xs: 0, sm: fullBorder ? 15 : posTop ? 0 : 15 },
            borderBottomRightRadius: { xs: 0, sm: 15 },
            textAlign: "center",
            boxShadow: "-3px 5px 8px rgba(0,0,0,0.3)",
          }}
        >
          {children}
        </Paper>
      </Box>
    </>
  )
}

export default ECard
