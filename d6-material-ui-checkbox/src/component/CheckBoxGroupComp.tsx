import React from 'react';
import {Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel} from "@mui/material";

interface MyProps {
}

interface MyState {
    skillCheckBox: string[],
    skills: any,
    setSkills: any
}

class CheckBoxGroupComp extends React.Component<MyProps, MyState> {
    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
        this.state = {
            skillCheckBox: [],
            setSkills: [],
            skills: []
        }
    }

    // checkBoxGroupChandlerChange = (_event: any) => {
    //    // console.log(_event.target.value)
    //    //  this.setState({
    //    //      setSkills:[...this.state.skills,_event.target.value]
    //    //  },()=>{
    //
    //     })
    //     // let index=this.state.skills.indexOf(_event.target.value)
    //     // console.log(index)
    //     // if(index === -1){
    //     //     this.setState({setSkills:[...this.state.skills,_event.target.value]})
    //     // }else {
    //     //     this.setState({
    //     //         setSkills:[this.state.skills.filter((skills:any)=> skills !== _event.target.value
    //     //         )]
    //     //     })
    //     // }
    //     // console.log(this.state.setSkills)
    // }

    render() {
        const {skills} = this.state
        return (
            <Box>
                <FormControl>
                    <FormLabel>skills</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            label='RUN'
                            control={<Checkbox
                                value='run'
                                checked={this.state.skills.includes('run') as any}
                                onChange={(_event:any)=>{
                                    let index=this.state.skills.indexOf(_event.target.value)
                                    if(index === -1){
                                        this.setState({
                                            setSkills:[...this.state.skills,_event.target.value]
                                        })
                                    }else{
                                        this.setState({
                                            setSkills:[this.state.skills.filter((skills:any)=> skills !== _event.target.value)]
                                        })
                                    }

                                }}
                            />}
                        />
                        {/*<FormControlLabel label='swimming'*/}
                        {/*                  control={<Checkbox*/}
                        {/*                     // value='swimming'*/}
                        {/*                      checked={this.state.skills.includes('swimming')}*/}
                        {/*                      onChange={this.checkBoxGroupChandlerChange}*/}
                        {/*                  />*/}
                        {/*                  }/>*/}
                        {/*<FormControlLabel label='cricket'*/}
                        {/*                  control={<Checkbox*/}
                        {/*                     // value='cricket'*/}
                        {/*                      checked={this.state.skills.includes('swimming')}*/}
                        {/*                      onChange={this.checkBoxGroupChandlerChange}*/}
                        {/*                  />*/}
                        {/*                  }/>*/}
                        {/*<FormControlLabel label='foot boll'*/}
                        {/*                  control={<Checkbox*/}
                        {/*                     // value='foot boll'*/}
                        {/*                      checked={this.state.skills.includes('foot boll')}*/}
                        {/*                      onChange={this.checkBoxGroupChandlerChange}*/}
                        {/*                  />*/}
                        {/*                  }/>*/}
                    </FormGroup>
                </FormControl>
            </Box>
        );
    }
}

export default CheckBoxGroupComp;