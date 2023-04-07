import React from 'react';
import {Box, FormControlLabel,Checkbox} from "@mui/material";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
interface MyProps{}
interface MyState{
    checkedImc:boolean
}
class CheckBoxComp extends React.Component<MyProps,MyState> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
        this.state={
            checkedImc:false
        }
    }
    render() {
        return (
            <Box>
                <Box>
                    <FormControlLabel label='I accept terms and condition'
                                      control={<Checkbox
                                          checked={this.state.checkedImc}
                                          onChange={(_event:any)=>{
                                              console.log(_event.target.checked)
                                              this.setState({
                                                  checkedImc:_event.target.checked
                                              },()=>{
                                                  console.log(this.state.checkedImc)
                                              })
                                          }}
                                      />}
                    />
                </Box>
                <Box>
                    <Checkbox
                        icon={<BookmarkBorderIcon/>}
                        checkedIcon={<BookmarkIcon/>}
                        checked={this.state.checkedImc}
                        onChange={(_event:any)=>{
                            this.setState({
                                checkedImc:_event.target.checked
                            },()=>{
                                console.log(this.state.checkedImc)
                            })
                        }}
                    />
                </Box>
            </Box>
        );
    }
}

export default CheckBoxComp;