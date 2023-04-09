import React from 'react';
import {IconButton, Tooltip} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
class TooltipComp extends React.Component {
    render() {
        return (
           <>
               {/* icon ekata yatin eka gana vistarayak danna ona unama meka use krnn puluwan*/}
               {/*table ekata meka use wenawa*/}
               <Tooltip title='delete'>
                   <IconButton><DeleteIcon/></IconButton>
               </Tooltip>

               <Tooltip title='delete' placement='right' arrow>
                   <IconButton><DeleteIcon/></IconButton>
               </Tooltip>

               <Tooltip title='delete' placement='right' arrow

               enterDelay={500}
               leaveDelay={200}
               >
                   <IconButton><DeleteIcon/></IconButton>
               </Tooltip>

           </>
        );
    }
}

export default TooltipComp;