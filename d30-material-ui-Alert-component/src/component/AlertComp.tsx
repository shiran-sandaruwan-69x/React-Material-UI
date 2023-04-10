import React from 'react';
import {Alert, AlertTitle, Button, Stack} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

class AlertComp extends React.Component {
    render() {
        return (
            <Stack spacing={2}>
                <Alert severity='error'>error</Alert>
                <Alert severity='success'>success</Alert>
                <Alert severity='warning'>waning</Alert>
                <Alert severity='info'>info</Alert>

                <Alert variant='outlined' severity='error' icon={<CheckIcon/>}
                onClose={()=>alert('alert closeted')}
                >
                    <AlertTitle>error</AlertTitle>
                    This is an error alert
                </Alert>
                <Alert variant='filled' severity='success' icon={<CheckIcon/>}
                action={
                    <Button
                    variant='contained'
                    color='inherit'
                    onClick={()=>alert('button undo')}
                    >
                        undo
                    </Button>
                }
                >
                    <AlertTitle>success</AlertTitle>
                    This is an success alert
                </Alert>
                <Alert variant='standard' severity='warning' icon={<CheckIcon/>}>
                    <AlertTitle>warning</AlertTitle>
                    This is an warning alert
                </Alert>


            </Stack>
        );
    }
}

export default AlertComp;
