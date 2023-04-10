import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

interface MyProps{}
interface MyState{
    isDialog:boolean
}
class DialogComp extends React.Component<MyProps,MyState> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
        this.state={
            isDialog:false
        }
    }

    handleClose=(event:any,reason:any)=>{
        console.log(reason)

        this.setState({
            isDialog:false
        })
    }

    render() {
        return (
            <>
             <Button variant='contained' onClick={()=>{this.setState({
                 isDialog:true
             })}}>open dialog</Button>
             <Dialog open={this.state.isDialog} onClose={this.handleClose} aria-labelledby='dialog-title' aria-describedby='dialog-description'>
                 <DialogTitle id='dialog-title'>submit the test ?</DialogTitle>
                 <DialogContent id='dialog-description'>
                     <DialogContentText>
                         are you sure you want to submit the test ? you will not be able to edit after submitting
                     </DialogContentText>
                 </DialogContent>
                 <DialogActions>
                     <Button onClick={()=>{this.setState({isDialog:false})}}>cancel</Button>
                     <Button autoFocus onClick={()=>{this.setState({isDialog:false})}}>submit</Button>
                 </DialogActions>
             </Dialog>
            </>
        );
    }
}

export default DialogComp;