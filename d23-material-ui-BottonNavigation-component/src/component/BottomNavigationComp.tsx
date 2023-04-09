import React from 'react';
import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";

interface MyProps {

}
interface MyState {
    value:boolean
}
class BottomNavigationComp extends React.Component<MyProps,MyState> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
        this.state={
            value:false
        }
    }

    render() {
        return (
            <BottomNavigation sx={{width:'100%', position:'absolute',bottom:0}}
            value={this.state.value}
            onChange={(_event:any,newValue:boolean)=>{
                console.log(newValue)
                this.setState({
                    value:newValue
                })
            }}
            showLabels
            >
                <BottomNavigationAction label='home' icon={<HomeIcon color='success'/>}/>
                <BottomNavigationAction label='favorite' icon={<FavoriteIcon color='secondary'/>}/>
                <BottomNavigationAction label='person' icon={<PersonIcon color='warning'/>}/>
            </BottomNavigation>
        );
    }
}

export default BottomNavigationComp;