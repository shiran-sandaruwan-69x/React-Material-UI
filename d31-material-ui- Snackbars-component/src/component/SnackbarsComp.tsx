import React from 'react';
import {Alert, Button, Snackbar} from "@mui/material";


interface MyProps {

}
interface MyState {
    openSnackBar:boolean,
    openSnackBar2:boolean
}
class SnackbarsComp extends React.Component<MyProps,MyState> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
        this.state={
            openSnackBar:false,
            openSnackBar2:false
        }
    }

    HandleClose=(event:any,reason?:string)=>{
        console.log(reason)
        if(reason === "clickaway"){
            return
        }
        this.setState({
            openSnackBar:false,
            openSnackBar2:false
        })
    }

    customSnackBar=(props:any,ref:any)=>{
        return <Alert ref={ref} {...props}/>
    }


    render() {
        return (
            <>
                <Button variant='contained' onClick={()=>{this.setState({
                    openSnackBar:true
                })}}>submit</Button>
                <Snackbar message='form submitted success fully'
                autoHideDuration={1000}
                open={this.state.openSnackBar}
                onClose={this.HandleClose}
                anchorOrigin={{
                    vertical:'top',
                    horizontal:'right'
                }}
                />

                <Button variant='contained' onClick={()=>{this.setState({
                    openSnackBar2:true
                })}}>submit 2</Button>
                <Snackbar message='form submitted success fully'
                          autoHideDuration={1000}
                          open={this.state.openSnackBar2}
                          onClose={this.HandleClose}
                          anchorOrigin={{
                              vertical:'top',
                              horizontal:'right'
                          }}
                >
                    <Alert severity='success' onClose={this.HandleClose}>form submitted success fully</Alert>

                </Snackbar>

            </>
        );
    }
}

export default SnackbarsComp;