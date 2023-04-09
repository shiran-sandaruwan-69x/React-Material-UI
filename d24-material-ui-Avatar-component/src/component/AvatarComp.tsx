import React from 'react';
import {Star} from "@mui/icons-material";
import {Avatar, AvatarGroup, Stack} from "@mui/material";

class AvatarComp extends React.Component {
    render() {
        return (
            <Stack spacing={4}>
                <Stack direction='row' spacing={1}>
                    <Avatar sx={{bgcolor: 'primary.light'}}>DD</Avatar>
                    <Avatar sx={{bgcolor: 'success.light'}}>CC</Avatar>
                </Stack>
                <Stack direction='row' spacing={1}>
                    <Avatar sx={{bgcolor: 'primary.light'}}>DD</Avatar>
                    <Avatar sx={{bgcolor: 'success.light'}}>CC</Avatar>
                    <Avatar
                        src='https://cdn4.sharechat.com/beautifulgirlprofilepicture_28b9873b_1598803439147_cmprsd_40.jpg'
                        alt='girl'/>
                </Stack>

                <Stack direction='row' spacing={1}>
                    <AvatarGroup>
                        <Avatar sx={{bgcolor: 'primary.light'}}>DD</Avatar>
                        <Avatar sx={{bgcolor: 'success.light'}}>CC</Avatar>
                        <Avatar
                            src='https://cdn4.sharechat.com/beautifulgirlprofilepicture_28b9873b_1598803439147_cmprsd_40.jpg'
                            alt='girl'/>
                        <Avatar
                            src='https://cdn4.sharechat.com/beautifulgirlprofilepicture_28b9873b_1598803439147_cmprsd_40.jpg'
                            alt='girl'/>
                    </AvatarGroup>
                </Stack>

                <Stack direction='row' spacing={1}>
                    <AvatarGroup max={3}>
                        <Avatar sx={{bgcolor: 'primary.light'}}>DD</Avatar>
                        <Avatar
                            src='https://cdn4.sharechat.com/beautifulgirlprofilepicture_28b9873b_1598803439147_cmprsd_40.jpg'
                            alt='girl'/>
                        <Avatar
                            src='https://cdn4.sharechat.com/beautifulgirlprofilepicture_28b9873b_1598803439147_cmprsd_40.jpg'
                            alt='girl'/>
                        <Avatar
                            src='https://cdn4.sharechat.com/beautifulgirlprofilepicture_28b9873b_1598803439147_cmprsd_40.jpg'
                            alt='girl'/>
                    </AvatarGroup>
                </Stack>

                <Stack direction='row' spacing={1}>
                    <Avatar sx={{bgcolor: 'primary.light'}}>DD</Avatar>
                    <Avatar
                        variant='square'
                        sx={{
                            width:'48px',
                            height:'48px'
                        }}
                        src='https://cdn4.sharechat.com/beautifulgirlprofilepicture_28b9873b_1598803439147_cmprsd_40.jpg'
                        alt='girl'/>
                    <Avatar
                        variant='rounded'
                        sx={{
                            width:'96px',
                            height:'96px'
                        }}
                        src='https://cdn4.sharechat.com/beautifulgirlprofilepicture_28b9873b_1598803439147_cmprsd_40.jpg'
                        alt='girl'/>
                    <Avatar
                        sx={{
                            width:'96px',
                            height:'96px'
                        }}
                        src='https://cdn4.sharechat.com/beautifulgirlprofilepicture_28b9873b_1598803439147_cmprsd_40.jpg'
                        alt='girl'/>
                </Stack>

            </Stack>
        );
    }
}

export default AvatarComp;