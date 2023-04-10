import React from 'react';
import {Avatar, Box, Skeleton, Stack, Typography} from "@mui/material";

interface MyProps {

}
interface MyState {
    isLoading:boolean
}
class SkeletonComp extends React.Component<MyProps,MyState> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
        this.state={
            isLoading:true
        }
    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                isLoading:false
            })
        },3000)
    }

    render() {
        return (
            <>
                <Stack spacing={1} width='250px'>
                    <Skeleton variant='text'animation='wave'/>
                    <Skeleton variant='circular' width={40} height={40}/>
                    <Skeleton variant='rectangular' width={240} height={140} animation='wave'/>
                </Stack>

                <Box sx={{width:'250px',marginTop:'30px'}}>
                    {
                        this.state.isLoading ? (
                            <Skeleton variant='rectangular' width={256} height={144} animation='wave' />
                        ) : (
                            <img src='https://www.dbs.com.sg/iwov-resources/media/images/nav/prime-area-bto/prime-area-bto-1404x630.jpg' width={256} height={144}
                                 alt='unsplash img'/>
                                )
                    }
                    <Stack direction='row' spacing={1} sx={{width:'100%',marginTop:'12px'}}>
                        {
                            this.state.isLoading ? (
                                <Skeleton variant='circular' width={40} height={40} animation='wave' />
                            ) : (
                                <Avatar>V</Avatar>
                            )
                        }
                    </Stack>
                    <Stack sx={{width:'80%'}}>
                        {
                            this.state.isLoading ? (
                               <>
                                   <Typography variant='body1'>
                                       <Skeleton variant='text' width='100%' animation='wave' />
                                   </Typography>
                                   <Typography variant='body2'>
                                       <Skeleton variant='text' width='100%' animation='wave' />
                                   </Typography>
                               </>
                            ) : (
                                <>
                                <Typography variant='body1'> React MUI Tutorial</Typography>
                                </>
                            )
                        }
                    </Stack>
                </Box>
            </>

        );

    }
}

export default SkeletonComp;
