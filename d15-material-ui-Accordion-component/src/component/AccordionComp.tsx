import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Box, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


interface MyProps {}
interface MyState {
    expanded:string | boolean
}

class AccordionComp extends React.Component<MyProps,MyState> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
        this.state={
            expanded:false
        }
    }

    setExpanded=(isExpanded:boolean,panel:string)=>{
        return isExpanded ? this.setState({expanded:panel}) : this.setState({expanded:false})
    }

    render() {
        return (
            <div>
                <Accordion expanded={this.state.expanded === 'panel1'}
                           onChange={(_event:any,isExpanded:boolean)=> {this.setExpanded(isExpanded,'panel1')}}>
                    <AccordionSummary
                        id='panel1-header'
                        aria-controls='panel1-content'
                        expandIcon={<ExpandMoreIcon/>}
                    >
                        <Typography>Accordion 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error et illum ipsam itaque totam
                            veritatis voluptate voluptatibus! Blanditiis dolorum laboriosam natus quisquam tempore?
                            Asperiores, dolorem laboriosam nihil quis temporibus veritatis.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={this.state.expanded === 'panel2'}
                               onChange={(_event:any,isExpanded:boolean)=>{
                                  this.setExpanded(isExpanded,'panel2')
                               }}>
                    <AccordionSummary
                        id='panel2-header'
                        aria-controls='panel2-content'
                        expandIcon={<ExpandMoreIcon/>}
                    >
                        <Typography>Accordion 2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error et illum ipsam itaque totam
                            veritatis voluptate voluptatibus! Blanditiis dolorum laboriosam natus quisquam tempore?
                            Asperiores, dolorem laboriosam nihil quis temporibus veritatis.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={this.state.expanded === 'panel3'}
                               onChange={(_event:any,isExpanded:boolean)=>{
                                   this.setExpanded(isExpanded,'panel3')
                               }}>
                    <AccordionSummary
                        id='panel3-header'
                        aria-controls='panel3-content'
                        expandIcon={<ExpandMoreIcon/>}
                    >
                        <Typography>Accordion 3</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error et illum ipsam itaque totam
                            veritatis voluptate voluptatibus! Blanditiis dolorum laboriosam natus quisquam tempore?
                            Asperiores, dolorem laboriosam nihil quis temporibus veritatis.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        );
    }
}

export default AccordionComp;