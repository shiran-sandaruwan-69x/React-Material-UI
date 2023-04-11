import React from 'react';
import {Box} from "@mui/material";

class ResponsivenessComp extends React.Component {
    render() {
        return (
            <Box sx={{
                width:{
                    xs:100, // view port with = 0px
                    sm:200, // view port with = 600px
                    md:300, // view port with = 900px
                    lg:400, // view port with = 1200px
                    xl:500 // view port with = 1536px
                },
                height:'300px',
                bgcolor:'primary.main'
            }}>

            </Box>
        );
    }
}

export default ResponsivenessComp;