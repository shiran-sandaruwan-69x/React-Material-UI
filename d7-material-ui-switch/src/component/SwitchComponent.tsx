import React from 'react';
import {Box, FormControlLabel, Switch} from "@mui/material";

interface MyProps{}
interface MyState{
    switchBtn:boolean
}
class SwitchComponent extends React.Component<MyProps,MyState> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
        this.state={
            switchBtn:false
        }
    }

    render() {
        return (
            <Box>
                <FormControlLabel
                    label='dark mode'
                    control={<Switch checked={this.state.switchBtn}
                    onChange={(_event:any)=>{
                        this.setState({
                            switchBtn:_event.target.checked
                        },()=>{
                            console.log(this.state.switchBtn)
                        })
                    }}
                />}
                />
            </Box>
        );
    }
}

export default SwitchComponent;