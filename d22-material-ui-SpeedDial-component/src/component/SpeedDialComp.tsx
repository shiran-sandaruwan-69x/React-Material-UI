import React from 'react';
import {SpeedDial, SpeedDialAction, SpeedDialIcon} from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import CopyIcon from "@mui/icons-material/FileCopyOutlined";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";

class SpeedDialComp extends React.Component {
    render() {
        return (

                <SpeedDial ariaLabel='speed dial comp'
                sx={{
                    position:'absolute',
                    bottom:16,
                    right:16
                }}
                icon={<SpeedDialIcon openIcon={<EditIcon/>}/>}
                >
                    {/*tooltipOpen danmam tooltipTitle eka hama wela wema visible wela thiyanne*/}
                    <SpeedDialAction icon={<CopyIcon/>} tooltipTitle='Copy' tooltipOpen/>
                    <SpeedDialAction icon={<ShareIcon/>} tooltipTitle='Share'/>
                    <SpeedDialAction icon={<PrintIcon/>} tooltipTitle='Print'/>
                </SpeedDial>

        );
    }
}

export default SpeedDialComp;