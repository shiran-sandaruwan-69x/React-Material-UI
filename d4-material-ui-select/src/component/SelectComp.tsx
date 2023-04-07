import React from 'react';
import {Box, MenuItem, TextField} from "@mui/material";

interface MyProps{}
interface MyState{
    muiSelect:string
    counties:string[]
}
class SelectComp extends React.Component<MyProps,MyState> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
        this.state={
            muiSelect:'',
            counties:['sri lanka','usa','canada']
        }
    }

    render() {
        let {muiSelect,counties} = this.state

        return (
                <Box width='500px'>
                    <TextField label='select county ' select
                    value={muiSelect}
                    fullWidth
                    onChange={(event:any)=>{
                        this.setState({
                            muiSelect:event.target.value
                        },():any => {
                            console.log(this.state.muiSelect)
                        })

                    }}
                    size='small'
                    color='secondary'
                    helperText='please select your county'
                    error
                    >
                        {/*<MenuItem value='SL'>sri lanka</MenuItem>*/}
                        {/*<MenuItem value='US'>usa</MenuItem>*/}
                        {/*<MenuItem value='CN'>canada</MenuItem>*/}
                        {
                          counties.length === 0 ? <p>counties not found</p> :
                          counties.map((country:string,index:number)=>{
                              return(
                                  <MenuItem key={index} value={country}>{country}</MenuItem>
                              )
                          })
                        }
                    </TextField>
                </Box>
        );
    }
}

export default SelectComp;