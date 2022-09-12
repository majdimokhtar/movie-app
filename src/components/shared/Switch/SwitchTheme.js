import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import {MaterialUISwitch} from "./SwitchTheme.styles"
import { useDispatch,useSelector } from 'react-redux';
import { toggleTheme } from "../../../redux/theme.slice";

export default function CustomizedSwitches() {
  const dispatch = useDispatch()
  const theme = useSelector((state) => state.theme);

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