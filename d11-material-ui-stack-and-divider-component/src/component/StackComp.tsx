import React from 'react';
import {Box, Divider, Stack} from "@mui/material";

class StackComp extends React.Component {
    render() {
        return (
            <Stack
                direction='row'
                spacing={2} sx={{
                border:'1px solid red'
            }}
            divider={<Divider orientation='vertical' flexItem/>}
            >
                <Box
                sx={{
                    display:'flex',
                    bgcolor:'green',
                    width:'200px',
                    height:'200px'
                }}
                >

                </Box>
                <Box
                    sx={{
                        display:'flex',
                        bgcolor:'yellow',
                        width:'200px',
                        height:'200px'
                    }}
                >

                </Box>
            </Stack>
        );
    }
}

export default StackComp;