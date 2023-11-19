import * as React from "react"

import { Box, Link, Typography } from "@mui/material"
import { useLocation } from "react-router-dom"
import { footerNoShowList } from "../utils/constants"

const Copyright: React.FC = () => {
  return (
    <Typography variant='body2' color='text.secondary'>
      {"MIT Licensed | Copyright © "}
      <Link color='inherit' href='/'>
        Venja.cc
      </Link>
      {" 2022-"}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

const Beian: React.FC = () => {
  return (
    <Typography variant='body2'>
      <Link href='https://beian.miit.gov.cn/' underline='none'>
        闽ICP备2021003209号-2
      </Link>
    </Typography>
  )
}

const Footer: React.FC = () => {
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <>
      {!footerNoShowList.includes(currentPath) && (
        <Box textAlign={"center"} width={"100%"} bottom={0} p={2}>
          <Copyright />
          <Beian />
        </Box>
      )}
    </>
  )
}

export default Footer
