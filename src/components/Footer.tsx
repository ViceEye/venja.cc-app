import * as React from "react"

import { Box } from "@mui/material"
import { useLocation } from "react-router-dom"
import { footerNoShowList } from "../utils/constants"

import Beian from "./Beian"
import Copyright from "./Copyright"

const Footer: React.FC = () => {
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <>
      {!footerNoShowList.includes(currentPath) && (
        <Box textAlign={"center"} position={"absolute"} width={"100%"} bottom={0} p={2}>
          <Copyright />
          <Beian />
        </Box>
      )}
    </>
  )
}

export default Footer
