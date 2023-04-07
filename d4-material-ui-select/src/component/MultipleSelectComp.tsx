import React from 'react';
import {Box, MenuItem, TextField} from "@mui/material";

interface MyProps{}
interface MyState{
    muiSelect:[]
}
class MultipleSelectComp extends React.Component<MyProps,MyState> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
        this.state={
            muiSelect:[]
        }
    }

    render() {
        let {muiSelect} = this.state
        return (
            <Box width='500px'>
                <TextField
                select
                fullWidth
                label='select multiple counties'
                SelectProps={{
                    multiple:true
                }}
                value={muiSelect}
                onChange={(event:any)=>{
                    console.log(event.target.value)
                    this.setState({
                        muiSelect:event.target.value
                    })
                }}
                >
                    <MenuItem value='SL'>sri lanka</MenuItem>
                    <MenuItem value='US'>usa</MenuItem>
                    <MenuItem value='CN'>canada</MenuItem>
                </TextField>
            </Box>
        );
    }
}

export default MultipleSelectComp;