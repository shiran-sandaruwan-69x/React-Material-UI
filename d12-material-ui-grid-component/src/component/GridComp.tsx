import React from 'react';
import {Box, Grid} from "@mui/material";

class GridComp extends React.Component {
    render() {
        return (
            <>
                <Grid container my={4}>
                    {/*Grid item uparima 12 hai hadanna puluwan*/}
                    {/*apita ona vidihata responsive kara gnn puluwan*/}
                    <Grid item xs={3}><Box bgcolor='greenyellow' p={2}>Item 1</Box></Grid>
                    <Grid item xs={9}><Box bgcolor='aliceblue' p={2}>Item 2</Box></Grid>
                    <Grid item xs={9}><Box bgcolor='yellow' p={2}>Item 3</Box></Grid>
                    <Grid item xs={3}><Box bgcolor='blue' p={2}>Item 4</Box></Grid>
                </Grid>
                <Grid container my={4}>
                    <Grid item xs={12} sm={6}>
                        <Box bgcolor='greenyellow' p={2}>Item 1</Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box bgcolor='aliceblue' p={2}>Item 2</Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box bgcolor='yellow' p={2}>Item 3</Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box bgcolor='blue' p={2}>Item 4</Box>
                    </Grid>
                </Grid>
                <Grid container my={4}>
                    <Grid item xs>
                        <Box bgcolor='greenyellow' p={2}>Item 1</Box>
                    </Grid>
                    <Grid item xs>
                        <Box bgcolor='aliceblue' p={2}>Item 2</Box>
                    </Grid>
                    <Grid item xs>
                        <Box bgcolor='yellow' p={2}>Item 3</Box>
                    </Grid>
                    <Grid item xs>
                        <Box bgcolor='blue' p={2}>Item 4</Box>
                    </Grid>
                </Grid>
                <Grid container my={4}>
                    <Grid item xs>
                        <Box bgcolor='greenyellow' p={2}>Item 1</Box>
                    </Grid>
                    <Grid item xs={5}>
                        <Box bgcolor='aliceblue' p={2}>Item 2</Box>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <Box bgcolor='yellow' p={2}>Item 3</Box>
                    </Grid>
                    <Grid item xs>
                        <Box bgcolor='blue' p={2}>Item 4</Box>
                    </Grid>
                </Grid>
                <Grid container my={4} spacing={2}>
                    <Grid item xs>
                        <Box bgcolor='greenyellow' p={2}>Item 1</Box>
                    </Grid>
                    <Grid item xs={5}>
                        <Box bgcolor='aliceblue' p={2}>Item 2</Box>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <Box bgcolor='yellow' p={2}>Item 3</Box>
                    </Grid>
                    <Grid item xs>
                        <Box bgcolor='blue' p={2}>Item 4</Box>
                    </Grid>
                </Grid>
                <Grid container my={4} rowSpacing={4} columnSpacing={1}>
                    <Grid item xs={6}>
                        <Box bgcolor='greenyellow' p={2}>Item 1</Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box bgcolor='aliceblue' p={2}>Item 2</Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box bgcolor='yellow' p={2}>Item 3</Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box bgcolor='blue' p={2}>Item 4</Box>
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default GridComp;