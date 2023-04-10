import React from 'react';
import {Stack, TextField} from "@mui/material";
import {DatePicker, DesktopTimePicker, StaticTimePicker, TimeClock, TimePicker} from "@mui/x-date-pickers";
import dayjs from "dayjs";


interface MyProps {

}
interface MyState{
    selectDate:string,
    selectTime:any
}
class DateAndTimePickerComp extends React.Component<MyProps,MyState> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
        this.state={
            selectDate:'',
            selectTime:''
        }
    }


    render() {

        return (
            <Stack spacing={2} sx={{width:'250px'}}>
                <DatePicker label='date piker'
                            value={this.state.selectDate}
                            onChange={(newValue:any)=>{
                                console.log(newValue)
                                this.setState({selectDate:newValue})
                            }}
                />
                <TimePicker  label='time piker'
                             value={this.state.selectTime}
                             onChange={(newValue:any)=>{
                                 console.log(newValue)
                                 this.setState({selectTime:newValue
                                 })
                             }}
                />
                <DesktopTimePicker defaultValue={dayjs('2022-04-17T15:30')}/>
                <StaticTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
                <TimeClock value={this.state.selectTime} onChange={(newValue) => {
                    this.setState({selectTime:newValue})
                    console.log(this.state.selectTime.toLocaleString())
                }
                } />
            </Stack>
        );
    }
}

export default DateAndTimePickerComp;