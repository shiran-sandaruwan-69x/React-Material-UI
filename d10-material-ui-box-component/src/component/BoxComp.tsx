import React from 'react';
import {Box} from "@mui/material";

class BoxComp extends React.Component {
    render() {
        return (
         <>
             <Box component='span'
                  sx={{
                      display:'flex',
                      backgroundColor:'primary.main',
                      color:'white',
                      width:'200px',
                      height:'200px',
                      padding:'16px',
                      '&:hover':{
                          backgroundColor:'black'
                      }
                  }}
             >
                 box
             </Box>

             <Box
                 display='flex'
                 height='200px'
                 width='200px'
                 bgcolor='greenyellow'
                 p={2}
             >
                 box
             </Box>
         </>
        );
    }
}

export default BoxComp;