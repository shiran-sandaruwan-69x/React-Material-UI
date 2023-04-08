import React from 'react';
import {Autocomplete, Stack, TextField} from "@mui/material";

interface MyProps{}
interface MyState{
    skills:string[]
    inputValue:string | null,
    newInputValue:any
}

interface Skill{
    id:number
    label: any
}

class AutoCompleteComp extends React.Component<MyProps,MyState> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
        this.state={
            skills:['html','css','javascript','php','java','c++'],
            inputValue:'',
            newInputValue:''
        }
    }

   // newArray = ['html','css','javascript','php','java','c++']
   //
   //  skillOptions = this.newArray.map((skill:any,index:number)=>({
   //      index:index+1,
   //      label:skill
   //  }))

    render() {

       const skillOptions = this.state.skills.map((skill:any,index:number)=>({
            index:index+1,
            label:skill
        }))


        return (
            <Stack spacing={2} width='200px'>
                <Autocomplete
                    options={this.state.skills}
                    // meka wada karanne na mekata
                    //value={this.state.inputValue}
                    isOptionEqualToValue={(option, value) => option=== value }
                    renderInput={(params:any)=> <TextField {...params} label='skills'/>}

                    onChange={(_event:any,newValue:string | null)=>{
                      //  console.log(newValue)
                        this.setState({
                            inputValue:newValue
                        },()=>{
                            console.log(this.state.inputValue)
                        })
                    }}
                    freeSolo
                />


                <Autocomplete
                    options={skillOptions}
                    // meka wada karanne na mekata
                    //value={this.state.inputValue}
                    isOptionEqualToValue={(option, value) => option.index === value.index }
                    renderInput={(params:any)=> <TextField {...params} label='skills'/>}
                    onChange={(_event:any,newValue: any)=>{
                        this.setState({
                            newInputValue:newValue
                        },()=>{
                            console.log(this.state.newInputValue)
                        })
                    }}

                />

            </Stack>
        );
    }
}

export default AutoCompleteComp;