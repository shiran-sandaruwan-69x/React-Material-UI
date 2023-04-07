import React from 'react';
import {Box, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup} from "@mui/material";

interface MyProps{}
interface MyState{
    radioSelect:string
}
class RadioButtonComponent extends React.Component<MyProps,MyState> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
        this.state={
            radioSelect:''
        }
    }

    render() {
        return (
            <Box>
                <FormControl error>
                    <FormLabel id='job-experience-group-label'>
                        years of experience
                    </FormLabel>
                    <RadioGroup
                        name='job-experience-group'
                        aria-label='job-experience-group-label'
                        row
                        value={this.state.radioSelect}
                        onChange={(_event:any)=>{
                            this.setState({
                                radioSelect:_event.target.value
                            },()=>{
                                console.log(this.state.radioSelect)
                            })
                        }}
                    >
                        <FormControlLabel control={<Radio size='small'/>} label='0-2' value='0-2'/>
                        <FormControlLabel control={<Radio color='success'/>} label='3-5' value='3-5'/>
                        <FormControlLabel control={<Radio/>} label='6-10' value='6-10'/>
                    </RadioGroup>
                    <FormHelperText>invalid selection</FormHelperText>
                </FormControl>
            </Box>
        );
    }
}

export default RadioButtonComponent;