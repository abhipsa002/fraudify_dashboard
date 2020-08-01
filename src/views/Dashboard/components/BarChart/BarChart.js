import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import BarExample from './bar';
import { makeStyles } from '@material-ui/styles';


import {
  Card,
  CardHeader,
  CardContent,
 
  Divider,
  
  
} from '@material-ui/core';



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

const BarChart = props => {
  const { className, ...rest } = props;

  const classes = useStyles();


  return (
    
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        
        title="Countrywise fraud analysis"
      />
      <Divider/>
      <CardContent>
      
        <BarExample/>
        
                                
      </CardContent>
      
      
    </Card>
   
  );
};

BarChart.propTypes = {
  className: PropTypes.string
};

export default BarChart;
