import React from 'react';
import {CircularProgress, LinearProgress, Stack} from "@mui/material";

class ProgressComp extends React.Component {
    render() {
        return (
            <Stack spacing={2}>
                <CircularProgress/>
                <CircularProgress color='success'/>
                <CircularProgress color='secondary'/>
                <CircularProgress variant='determinate' value={60} color='error'/>

                <LinearProgress/>
                <LinearProgress color='success'/>
                <LinearProgress color='secondary'/>
                <LinearProgress color='error' variant='determinate' value={60}/>

            </Stack>
        );
    }
}

export default ProgressComp;