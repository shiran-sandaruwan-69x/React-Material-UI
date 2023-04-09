import React from 'react';
import {Badge, Stack} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
class BadgeComp extends React.Component {
    render() {
        const dataBaseMailData=[];
        return (
            <Stack spacing={2} direction='row'>
                <Badge badgeContent={5} color='primary'>
                    <MailIcon/>
                </Badge>
                <Badge badgeContent={0} showZero color='primary'>
                    <MailIcon/>
                </Badge>
                <Badge badgeContent={100} color='primary'>
                    <MailIcon/>
                </Badge>
                <Badge badgeContent={100} max={999} color='primary'>
                    <MailIcon/>
                </Badge>
                <Badge variant='dot' color='primary'>
                    <MailIcon/>
                </Badge>
                <Badge variant='dot' invisible={true} color='primary'>
                    <MailIcon/>
                </Badge>
                <Badge variant='dot' invisible={dataBaseMailData.length==0} color='primary'>
                    <MailIcon/>
                </Badge>
            </Stack>
        );
    }
}

export default BadgeComp;