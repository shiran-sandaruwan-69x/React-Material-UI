import React from 'react';
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import {AppBar, Button, IconButton, Stack, Toolbar, Typography} from "@mui/material";


interface MyProps {

}

interface MyState {

}

class Navbar extends React.Component<MyProps, MyState> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <AppBar position='static' >
                <Toolbar>
                    <IconButton sx={{color:'white'}} size='large' edge='start' aria-label='logo'>
                        <CatchingPokemonIcon/>
                    </IconButton>
                    <Typography variant='h6' component='div' sx={{flexGrow:1}}>
                        CLICK ME APP
                    </Typography>

                    <Stack direction='row' spacing={2}>
                        <Button sx={{color:'white'}}>home</Button>
                        <Button sx={{color:'white'}}>about</Button>
                        <Button sx={{color:'white'}}>address</Button>
                        <Button sx={{color:'white'}}>phone</Button>
                    </Stack>

                </Toolbar>
            </AppBar>
        );
    }
}

export default Navbar;