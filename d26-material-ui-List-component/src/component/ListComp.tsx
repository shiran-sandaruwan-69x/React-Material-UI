import React from 'react';
import {
    Avatar,
    Box,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
class ListComp extends React.Component {
    render() {
        return (
            <Box sx={{width:'400px',bgcolor:'#efefef'}}>
                <List disablePadding>
                    <ListItem>
                        <ListItemIcon><MailIcon/></ListItemIcon>
                        <ListItemText primary='List Item 1'/>
                    </ListItem>

                    <Divider/>

                    <ListItem>

                        <ListItemAvatar><Avatar>
                            <MailIcon/>
                        </Avatar></ListItemAvatar>

                        <ListItemText primary='List Item 2'/>
                    </ListItem>

                    <Divider/>

                    <ListItem>
                        <ListItemIcon><MailIcon/></ListItemIcon>
                        <ListItemText primary='List Item 3' secondary='secondary text'/>
                    </ListItem>

                    <ListItemButton>
                        <ListItem>
                            <ListItemIcon><MailIcon/></ListItemIcon>
                            <ListItemText primary='List Item 3' secondary='secondary text'/>
                        </ListItem>
                    </ListItemButton>

                </List>
            </Box>
        );
    }
}

export default ListComp;