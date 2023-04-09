import React from 'react';
import {Avatar, Chip, Stack} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import FaceIcon from "@mui/icons-material/Face";

interface MyProps {

}

interface MyState {
    chipArray: string[]
}

class ChipComp extends React.Component<MyProps, MyState> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
        this.state = {
            chipArray: ['chip 1', 'chip 2', 'chip 3', 'chip 4']
        }
    }

    deleteChip=(chip:string)=>{
        const newArray = this.state.chipArray.filter((chipFil: string) => chipFil !== chip)
        console.log(newArray)
        this.setState({
            chipArray:newArray
        })
    }

    render() {
        return (
            <Stack spacing={1} direction='row'>
                <Chip label='chip' color='primary' size='medium'/>
                <Chip label='chip outlined' color='secondary' size='medium' variant='outlined'/>
                <Chip label='chip outlined' color='secondary' size='medium' variant='outlined'
                      avatar={<Avatar>V</Avatar>}/>
                <Chip label='chip outlined' color='secondary' size='medium' variant='outlined' icon={<FaceIcon/>}/>
                <Chip label='chip outlined' color='success' size='medium' variant='outlined' icon={<MailIcon/>}
                      onClick={() => alert('hello there')}
                />
                <Chip label='chip outlined' color='error' variant='outlined' icon={<MailIcon/>}
                      onClick={() => alert('hello there')}
                      onDelete={() => alert('delete handle called')}
                />
                {
                    this.state.chipArray.map((chip: string) => {
                        return (
                            <Chip label={chip} color='secondary' key={chip}
                                  onDelete={() => {this.deleteChip(chip)}}></Chip>
                        )
                    })
                }
            </Stack>
        );
    }
}

export default ChipComp;