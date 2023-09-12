import * as React from "react"

import { Typography, Box, Container, Link } from "@mui/material"
import { useLocation } from "react-router-dom"
import { footerNoShowList } from "../utils/constants"
import { Copyright } from "./Copyright"

const Footer: React.FC = () => {
  const location = useLocation()
  const currentPath = location.pathname
  console.log(currentPath)

  return (
    <>
      {!footerNoShowList.includes(currentPath) && (
        <Box
          textAlign={"center"}
          alignContent={"center"}
          position={"absolute"}
          width={"100%"}
          bottom={0}
          p={2}
        >
          <Container maxWidth='sm'>
            <Typography>
              <Link href='https://beian.miit.gov.cn/' underline='none'>
                闽ICP备2021003209号-2
              </Link>
            </Typography>
            <Copyright />
          </Container>
        </Box>
      )}
    </>
  )
}

export default Footer
