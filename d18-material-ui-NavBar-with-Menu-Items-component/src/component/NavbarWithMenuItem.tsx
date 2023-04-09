import React from 'react';
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import {AppBar, Button, IconButton,Menu, MenuItem, Stack, Toolbar, Typography} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


interface MyProps {

}

interface MyState {
    anchorEl:any
}

class NavbarWithMenuItem extends React.Component<MyProps, MyState> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
        this.state = {
            anchorEl:null
        }
    }

    handleClick=(event:any)=>{
        console.log(event.currentTarget)
        this.setState({
            anchorEl:event.currentTarget
        })
    }

    handleClose=(event:any)=>{
        this.setState({
            anchorEl:null
        })
    }

    render() {
        const open=Boolean(this.state.anchorEl)
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
                        <Button
                            sx={{color:'white'}}
                            id='resources-btn'
                            onClick={this.handleClick}
                            aria-controls={open ? 'resources-menu' : undefined}
                            aria-haspopup='true'
                            aria-expanded={open ? 'true' : undefined}
                            endIcon={<KeyboardArrowDownIcon/>}
                        >login</Button>
                    </Stack>
                    <Menu id='resources-menu' open={open} anchorEl={this.state.anchorEl}
                    MenuListProps={{
                        'aria-labelledby':'resources-btn'
                    }}
                    onClose={this.handleClose}
                    anchorOrigin={{
                        vertical:"bottom",
                        horizontal:'right'
                    }}
                    transformOrigin={{
                        vertical:'top',
                        horizontal:'right'
                    }}
                    >
                        <MenuItem onClick={this.handleClose}>blog</MenuItem>
                        <MenuItem onClick={this.handleClose}>podcast</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        );
    }
}

export default NavbarWithMenuItem;