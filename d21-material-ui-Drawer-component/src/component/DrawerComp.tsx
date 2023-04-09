import React from 'react';
import {Box, Drawer, IconButton, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface MyProps {

}

interface MyState {
    isDrawer: boolean
}

class DrawerComp extends React.Component<MyProps, MyState> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
        this.state = {
            isDrawer: false
        }
    }


    render() {
        return (
            <>
                <IconButton size='large' aria-label='logo' edge='start' color='success'
                onClick={()=>this.setState({
                    isDrawer:true
                })}
                >
                    <MenuIcon/>
                </IconButton>
                <Drawer anchor='left' open={this.state.isDrawer} onClose={() => this.setState({
                    isDrawer: false
                })}>
                    <Box p={2} width='250px' textAlign='center' role='presentation'>
                        <Typography variant='h6' component='div'>
                            side panel
                        </Typography>
                    </Box>
                </Drawer>
            </>
        );
    }
}

export default DrawerComp;