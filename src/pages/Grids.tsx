import * as React from "react"

import Grid from "@mui/material/Unstable_Grid2/Grid2"
import { Box, Paper } from "@mui/material"

const Grids: React.FC = () => {
  return (
    <>
      <Box width={"100%"} p={2}>
        <Grid container columns={{ xs: 1, sm: 2, md: 4 }} spacing={2}>
          <Grid xs={1}>
            <Paper sx={{ padding: 2, backgroundColor: "rgb(209 213 219)" }}>
              <h2 className='text-xl font-bold mb-2'>Card 1</h2>
              <p className='text-gray-700'>Details for Card 1</p>
            </Paper>
          </Grid>
          <Grid xs={1} md={2}>
            <Paper sx={{ padding: 2, backgroundColor: "rgb(209 213 219)" }}>
              <h2 className='text-xl font-bold mb-2'>Card 2</h2>
              <p className='text-gray-700'>Details for Card 2</p>
            </Paper>
          </Grid>
          <Grid xs={1} sm={2} md={4}>
            <Paper sx={{ padding: 2, backgroundColor: "rgb(209 213 219)" }}>
              <h2 className='text-xl font-bold mb-2'>Card 3</h2>
              <p className='text-gray-700'>Details for Card 3</p>
            </Paper>
          </Grid>
          <Grid xs={1} sm={2} md={4}>
            <Paper sx={{ padding: 2, backgroundColor: "rgb(209 213 219)" }}>
              <h2 className='text-xl font-bold mb-2'>Card 4</h2>
              <p className='text-gray-700'>Details for Card 4</p>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Grids
