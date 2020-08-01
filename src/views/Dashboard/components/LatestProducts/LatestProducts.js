import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
//import  from 'react-addons-css-transition-group';
import Example from './data';
import BarChart from '../BarChart';

import {
  
  Card,
  CardHeader,
 
  CardActions,
  Button,
  Divider,
  IconButton

} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import RefreshIcon from '@material-ui/icons/Refresh';


const useStyles = makeStyles(() => ({
  
  
  root: {
    
    width:'100%',
    height:'100%'
    
    
  },
  chartContainer: {
    height: '100%',
    width:'100%',
    position: 'relative'
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const LatestProducts = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        action={
          <IconButton size="small">
            <RefreshIcon />
          </IconButton>
        }
        title="Countries Most Affected"
      />
      <Divider/>
      <Example/>
      
      

                      
      
      <CardActions className={classes.actions}>
        <Button
          color="primary"
          size="small"
          variant="text"
        >
          View all <ArrowRightIcon />
        </Button>
      </CardActions>
      
      <BarChart/>
    </Card>




  );
};

LatestProducts.propTypes = {
  className: PropTypes.string
};

export default LatestProducts;
