import React from 'react';
import  DoughnutExample  from './doughnut';

import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/styles';

import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Divider,
  Typography
} from '@material-ui/core';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import RefreshIcon from '@material-ui/icons/Refresh';
import TabletMacIcon from '@material-ui/icons/TabletMac';



const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    height:'100%'
    
  },
  
  
  chartContainer: {
    height: '100%',
    width:'100%',
    position: 'relative'
  },
  stats: {
    marginTop: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center'
  },
  device: {
    textAlign: 'center',
    padding: theme.spacing(1),
   
  },
  deviceIcon: {
    color: theme.palette.icon,
  
  }
}));

const UsersByDevice = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const theme = useTheme();



  const devices = [
    {
      title: 'Desktop',
      value: '63',
      icon: <LaptopMacIcon />,
      color: theme.palette.primary.main
    },
    {
      title: 'Tablet',
      value: '15',
      icon: <TabletMacIcon />,
      color: theme.palette.error.main
    },
    {
      title: 'Mobile',
      value: '23',
      icon: <PhoneIphoneIcon />,
      color: theme.palette.warning.main
    }
  ];

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
        title="Users By Device"
      />
      <Divider />
      <CardContent>
        
        <div className={classes.chartContainer}>
        <DoughnutExample/>
        </div>
        <div className={classes.stats}>
          {devices.map(device => (
            <div
              className={classes.device}
              key={device.title}
            >
              <span className={classes.deviceIcon}>{device.icon}</span>
              <Typography variant="body1">{device.title}</Typography>
              <Typography
                style={{ color: device.color }}
                variant="h2"
              >
                {device.value}%
              </Typography>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

UsersByDevice.propTypes = {
  className: PropTypes.string
};

export default UsersByDevice;

