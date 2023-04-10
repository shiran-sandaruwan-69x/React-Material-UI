import React from 'react';
import {Stack} from "@mui/material";
import {LoadingButton} from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";
interface MyProps {

}
interface MyState {
    isLoading:boolean
}
class LoadingButtonComp extends React.Component<MyProps,MyState> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
        this.state={
            isLoading:true
        }
    }

    handleLoading=()=>{
        this.setState({
            isLoading:false
        })
    }

    render() {
        return (
            <Stack spacing={2} direction='row'>
                <LoadingButton color='success' variant='contained'>button 1</LoadingButton>
                <LoadingButton color='secondary' loading={true} variant='contained'>button 2</LoadingButton>
                <LoadingButton color='error' loading={true} variant='contained'>button 3</LoadingButton>


                <LoadingButton
                               loading={false}
                               variant='contained'
                               color='info'
                >Fetch Data
                </LoadingButton>
                <LoadingButton onClick={this.handleLoading}
                               loading={this.state.isLoading}
                               variant='contained'
                               loadingIndicator='loading......'
                               color='info'
                >Fetch Data
                </LoadingButton>

                <LoadingButton
                variant='contained'
                loadingPosition='start'
                startIcon={<SaveIcon/>}
                >save</LoadingButton>
                <LoadingButton
                    loading
                    variant='contained'
                    loadingPosition='start'
                    startIcon={<SaveIcon/>}
                >save</LoadingButton>

            </Stack>
        );
    }
}

export default LoadingButtonComp;