import React from 'react';
import './css/buttonStyle.css'
import {Button, ButtonGroup, Stack} from '@mui/material'
class ButtonGroupComp extends React.Component {
    render() {
        return (
            <div>
                <Stack direction='row'>
                    <ButtonGroup variant='contained' aria-label="outlined success button group">
                        <Button>button 1</Button>
                        <Button>button 2</Button>
                        <Button>button 3</Button>
                    </ButtonGroup>
                </Stack>
                <Stack direction='row'>
                    <ButtonGroup orientation='vertical' variant='text' aria-label='aliment button group'>
                        <Button>button 1</Button>
                        <Button>button 2</Button>
                        <Button>button 3</Button>
                    </ButtonGroup>
                </Stack>
            </div>
        );
    }
}

export default ButtonGroupComp;