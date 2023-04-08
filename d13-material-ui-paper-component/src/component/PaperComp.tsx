import React from 'react';
import {Box, Grid, Paper} from "@mui/material";


class PaperComp extends React.Component {
    render() {
        return (
            <Paper
                //elevation == shadow eka wadi kara gnn puluwan
                elevation={4}
                sx={{
                border:'20px',
                bgcolor:'greenyellow'
            }}>
              <Grid>
                  <Grid item><Box>ggg</Box></Grid>
                  <Grid item><Box>ggg</Box></Grid>
                  <Grid item><Box>ggg</Box></Grid>
                  <Grid item><Box>ggg</Box></Grid>
              </Grid>
            </Paper>
        );
    }
}

export default PaperComp;