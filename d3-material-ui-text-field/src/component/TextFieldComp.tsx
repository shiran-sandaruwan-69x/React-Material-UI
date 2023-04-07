import React from 'react';
import {InputAdornment, Stack, TextField} from "@mui/material";
import './css/buttonStyle.css'

interface MyProps{}
interface MyState{
    inputPassword:string
}

class TextFieldComp extends React.Component<MyProps,MyState> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
        this.state={
            inputPassword:''
        }
    }

    render() {
        let {inputPassword} = this.state
        return (
            <div>
                <Stack spacing={4}>
                    <Stack spacing={2} direction='row'>
                        <TextField label='input name' variant='outlined'/>
                        <TextField label='input name' variant='filled'/>
                        <TextField label='input name' variant='standard'/>
                    </Stack>
                    <Stack spacing={2} direction='row'>
                        <TextField label='small secondary' color='secondary' size='small'/>
                        <TextField label='input name' variant='filled'/>
                        <TextField label='input name' variant='standard'/>
                    </Stack>
                    <Stack spacing={2} direction='row'>
                        <TextField label='form input' required/>
                        <TextField label='helper text input' helperText='do not share password with anyone'/>
                        <TextField
                            label='input password'
                            type='password'
                            helperText='do not share password with anyone'/>
                        <TextField
                            label='read only'
                            value='read only'
                            InputProps={{readOnly:true}}
                            />
                    </Stack>
                    <Stack spacing={2} direction='row'>
                        <TextField
                            label='Amount'
                            InputProps={{startAdornment:<InputAdornment position='start'>$</InputAdornment>}}
                            />
                        <TextField
                            label='weight'
                            InputProps={{endAdornment:<InputAdornment position='end'>kg</InputAdornment>}}
                        />
                        <TextField
                            label='input password'
                            required
                            type='password'
                            value={this.state.inputPassword}
                            onChange={(event:any)=>{
                                this.setState({
                                    inputPassword:event.target.value
                                })
                            }}
                            error={!this.state.inputPassword}
                            helperText={!this.state.inputPassword ? 'required' : 'do not share password with anyone'}
                        />
                    </Stack>
                </Stack>
            </div>
        );
    }
}

export default TextFieldComp;