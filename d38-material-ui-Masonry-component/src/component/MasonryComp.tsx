import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Box, Paper, Typography} from "@mui/material";
import {Masonry} from "@mui/lab";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
interface MyProps {

}
interface MyState {
    heightArr:number[]
}
class MasonryComp extends React.Component<MyProps,MyState> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
        this.state={
            heightArr:[150,30,90,70,110,150,139,80,50,90,100,30,50,80]
        }
    }

    render() {
        return (
            <Box sx={{width:'700px',height:'600px'}}>
                <Masonry columns={4} spacing={1}>
                    {
                        this.state.heightArr.map((height:number,index:number)=>(
                            <Paper key={index}
                                   sx={{display:'flex',
                                       justifyContent:'center',
                                       alignItems:'center',
                                       height:height,
                                       border:'1px solid'
                            }}>
                                {index + 1}
                            </Paper>
                        ))
                    }
                </Masonry>
                <Masonry columns={4} spacing={1}>
                    {
                        this.state.heightArr.map((height:number,index:number)=>(
                            <Paper key={index}
                                   sx={{
                                       border:'1px solid'
                                   }}>
                                <Accordion sx={{
                                    minHeight:height
                                }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                                        <Typography>Accordion {index + 1}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>content</AccordionDetails>
                                </Accordion>
                            </Paper>
                        ))
                    }
                </Masonry>
            </Box>
        );
    }
}

export default MasonryComp;