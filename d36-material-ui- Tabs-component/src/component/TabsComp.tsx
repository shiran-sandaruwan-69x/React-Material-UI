import React from 'react';
import {Box, Tab} from "@mui/material";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import FavoriteIcon from "@mui/icons-material/Favorite";
interface MyProps {
    children?:any
}
interface MyState {
    value:any,
    value2:any
}
class TabsComp extends React.Component<MyProps,MyState> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
        this.state={
            value:'tab1',
            value2:'tab1'
        }
    }

    handleChange=(_event:any,newValue:any)=>{
        console.log(newValue)
        console.log(typeof newValue)
        if (newValue !== null && ''){
            this.setState({
                value:newValue
            })
        }
    }

    render() {
        return (
            <Box>
                <TabContext value={this.state.value}>
                    <Box sx={{borderBottom:1,borderColor:'divider'}}>
                        <TabList aria-label='tabs example'
                                 onChange={(event:any,newValue:any)=>this.setState({value:newValue})}
                                 centered
                                 textColor='secondary'
                                 indicatorColor='secondary'
                        >
                            <Tab label='tab one' value='tab1' icon={<FavoriteIcon/>} iconPosition='start'/>
                            <Tab label='tab two' value='tab2' icon={<FavoriteIcon/>} iconPosition='start' disabled/>
                            <Tab label='tab three' value='tab3' icon={<FavoriteIcon/>} iconPosition='start'/>
                        </TabList>
                    </Box>
                    <TabPanel value='tab1' tabIndex={0}>panel 1</TabPanel>
                    <TabPanel value='tab2' tabIndex={1}>panel 2</TabPanel>
                    <TabPanel value='tab3' tabIndex={3}>panel 3</TabPanel>
                </TabContext>

                <TabContext value={this.state.value2}>
                    <Box sx={{borderBottom:1,borderColor:'divider'}} width='300px'>
                        <TabList aria-label='tabs example'
                                 onChange={(event:any,newValue:any)=>this.setState({value2:newValue})}
                                 textColor='secondary'
                                 indicatorColor='secondary'
                                 variant='scrollable'
                                 scrollButtons='auto'
                        >
                            <Tab label='tab 1' value='tab1' icon={<FavoriteIcon/>} iconPosition='start'/>
                            <Tab label='tab 2' value='tab2' icon={<FavoriteIcon/>} iconPosition='start'/>
                            <Tab label='tab 3' value='tab3' icon={<FavoriteIcon/>} iconPosition='start'/>
                            <Tab label='tab 4' value='tab4' icon={<FavoriteIcon/>} iconPosition='start'/>
                            <Tab label='tab 5' value='tab5' icon={<FavoriteIcon/>} iconPosition='start'/>
                            <Tab label='tab 6' value='tab6' icon={<FavoriteIcon/>} iconPosition='start'/>
                        </TabList>
                    </Box>
                    <TabPanel value='tab1' tabIndex={0}>panel 1</TabPanel>
                    <TabPanel value='tab2' tabIndex={1}>panel 2</TabPanel>
                    <TabPanel value='tab3' tabIndex={2}>panel 3</TabPanel>
                    <TabPanel value='tab4' tabIndex={3}>panel 4</TabPanel>
                    <TabPanel value='tab5' tabIndex={4}>panel 5</TabPanel>
                    <TabPanel value='tab6' tabIndex={5}>panel 6</TabPanel>
                </TabContext>

            </Box>
        );
    }
}

export default TabsComp;