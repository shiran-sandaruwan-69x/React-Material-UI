import React from 'react';
import {Stack, ToggleButton, ToggleButtonGroup} from "@mui/material";
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

interface MyProps{}
interface MyState {
    formats:string [] | null,
    setFormats:string[]
}
class ToggleButtonComp extends React.Component<MyProps,MyState> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
        this.state={
            formats:[],
            setFormats:[]
        }
    }

    handleFormatChange=(_event:any,value:string[])=>{
        console.log(value)
        if(value !== undefined){
            this.setState({
                formats:value
            })
        }
    }

    render() {
        const {formats} = this.state
        return (
            <div>
                <Stack direction='row'>
                    <ToggleButtonGroup
                        aria-label='formatting'
                        onChange={
                        this.handleFormatChange
                        // (event:any,value:any)=>{
                        //     console.log(value)
                        // this.setState({
                        //     formats:value
                        // })
                        // }
                        }
                        value={formats}
                        color='success'
                        size='large'
                        // orientation='vertical'
                        exclusive

                    >
                        <ToggleButton value='bold' aria-label='bold'><FormatBoldIcon/></ToggleButton>
                        <ToggleButton value='italic' aria-label='italic'><FormatItalicIcon/></ToggleButton>
                        <ToggleButton value='underlined' aria-label='underlined'><FormatUnderlinedIcon/></ToggleButton>
                    </ToggleButtonGroup>
                </Stack>
            </div>
        );
    }
}

export default ToggleButtonComp;