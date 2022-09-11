import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom"
import SearchBar from "../shared/Search/SearchBar"
import SwitchTheme from "../shared/Switch/SwitchTheme"


export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
          <Link to="/" >Movie App</Link>
              
          </Typography>
          <Link to="/wishlist" >WishList</Link>
          <SwitchTheme/>
        <SearchBar/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}