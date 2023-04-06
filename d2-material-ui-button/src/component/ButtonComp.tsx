import React from 'react';
import {Button, IconButton, Stack} from "@mui/material";
import './css/buttonStyle.css'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AddAlertIcon from '@mui/icons-material/AddAlert';
class ButtonComp extends React.Component {
    render() {
        return (
            <div>
                <Stack direction='row' spacing={2}>
                    <Button variant='text' href='https://youtube.com'>youtube</Button>
                    <Button variant='contained'>contained</Button>
                    <Button variant='outlined'>outlined</Button>
                    <Button variant='contained' disabled>disabled</Button>
                </Stack>
                <Stack direction='row' spacing={2}>
                    <Button variant='contained' color='primary'>primary</Button>
                    <Button variant='contained' color='error'>error</Button>
                </Stack>
                <Stack direction='row' spacing={2} display='block'>
                    <Button variant='contained' size='small'>small</Button>
                    <Button variant='contained' size='medium'>medium</Button>
                    <Button variant='contained' size='large'>large</Button>
                </Stack>
                <Stack spacing={2} direction='row'>
                    <Button variant='contained' startIcon={<AddAPhotoIcon/>} disableRipple>start</Button>
                    <Button variant='contained' endIcon={<AddAPhotoIcon/>} disableElevation >end</Button>

                    <IconButton color='error'>
                        <AddAlertIcon/>
                    </IconButton>

                </Stack>
            </div>
        );
    }
}

export default ButtonComp;