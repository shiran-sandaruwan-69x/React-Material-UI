import React from 'react';
import DateAndTimePickerComp from "./component/DateAndTimePickerComp";
import { LocalizationProvider } from '@mui/x-date-pickers';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";



function App() {
  return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div className="App">
              <DateAndTimePickerComp/>
          </div>
      </LocalizationProvider>
  );
}

export default App;
