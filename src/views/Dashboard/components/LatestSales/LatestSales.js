import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import MixExample from './mix';
import { makeStyles } from '@material-ui/styles';
//import Paper from '@material-ui/core/Paper';


import {
  Card,
  CardHeader,
  CardContent,
 // CardActions,
  Divider,
  Button,
  
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
//import ArrowRightIcon from '@material-ui/icons/ArrowRight';



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

const LatestSales = props => {
  const { className, ...rest } = props;

  const classes = useStyles();


  return (
    
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        action={
          <Button
            size="small"
            variant="text"
          >
            Last 7 days <ArrowDropDownIcon />
          </Button>
        }
        title="Total Frauds"
      />
      
      <CardContent>
      
        <MixExample/>
        <Divider/>
                                
      </CardContent>
      
      
    </Card>
   
  );
};

LatestSales.propTypes = {
  className: PropTypes.string
};

export default LatestSales;
