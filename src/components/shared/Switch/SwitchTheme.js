import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import {MaterialUISwitch} from "./SwitchTheme.styles"
// import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import  setThemeMode  from 'redux/theme.slice';
// import darkTheme from "../../../styles/theme/darkTheme"
// import lightTheme from "../../../styles/theme/lightTheme"
// import handleTheme from "../../../App"
import { toggleTheme } from "../../../redux/theme.slice";

export default function CustomizedSwitches() {
  const dispatch = useDispatch()
  const theme = useSelector((state) => state.theme);

  // const [mode , setMode] =useState(true)
  // const handleDarkMode =()=>{
  //   // setMode(!mode)
  //   dispatch(setThemeMode())
  // }
  return (
    <FormGroup>
      <FormControlLabel
        control={<MaterialUISwitch sx={{ m: 1 }}
        checked={theme.darkTheme}
        onChange={() => dispatch(toggleTheme())}
        
        />}
      />
    </FormGroup>
  );
}