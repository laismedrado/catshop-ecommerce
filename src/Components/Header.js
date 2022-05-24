import React from "react";
import PropTypes from 'prop-types';


// import CssBaseline from '@mui/material/CssBaseline';
// import useScrollTrigger from '@mui/material/useScrollTrigger';
// import Box from '@mui/material/Box';

import { Container, CssBaseline, MuiThemeProvider, useScrollTrigger } from '@material-ui/core';
import {theme} from '../assets/theme';
import { AppBar,Toolbar, Typography, Box } from '@material-ui/core';
// import { Box } from '@material-ui/core';

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Header(props) {

  return (
    <MuiThemeProvider theme={theme}>
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div"  text-align ="center"    >
              Cat E-commerce
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container>
        <Box sx={{ my: 2 }}>
          {[...new Array(12)]
//             .map(
//               () => `Cras mattis consectetur purus sit amet fermentum.
// Cras justo odio, dapibus ac facilisis in, egestas eget quam.
// Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
// Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
//             )
            .join('\n')}
        </Box>
      </Container>
    </React.Fragment>
    </MuiThemeProvider>
  );
}




















// import * as react from 'react';
// import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
// import { Box }from '@material-ui/core';

// import  {theme} from '../assets/theme';
// import { ThemeProvider }  from '@material-ui/styles'
// import { Button } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';

// // import MenuIcon from '@mui/icons-material/Menu';


// export default function Header() {
// return (


//   <Box sx={{ flexGrow: 1 }}>
//   <AppBar position="static">
//     <Toolbar>
//       <IconButton
//         size="large"
//         edge="start"
//         color="inherit"
//         aria-label="menu"
//         sx={{ mr: 2 }}
//       >
//         <MenuIcon/>
//       </IconButton>
//       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//         News
//       </Typography>
//       <Button color="inherit">Login</Button>
//     </Toolbar>
//   </AppBar>
//  </Box>

// </ThemeProvider>
//   );
// }

