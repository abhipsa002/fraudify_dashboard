import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
//import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar } from '@material-ui/core';




const style = {
  position: 'absolute',
  width: '1600px',
  height: '100px',
  left: '322px',
  top: '-1px',
  
  
  /* BG */
  
 
  
  right: '0%',
  
  down: '0%',
  
  background: '#438AFE',
  
};
const Topbar = props => {
  const { className, ...rest } = props;


  return (
    <AppBar
      {...rest}
      className={style}
      color="primary"
      position="fixed"
    >
      <Toolbar>
        <RouterLink to="/">
          <img
            alt="LSCG LOGO"
            src="/images/logos/logo--white.svg"
          />
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string
};

export default Topbar;
