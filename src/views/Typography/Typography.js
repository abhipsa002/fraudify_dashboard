import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography as MuiTypography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const variants = {
  h1:'OUR GOALS',
  h3: 'London Strategy & Consulting group partners with business, government, and society to help them overcome their challenges and capitalize on their strengths. LS & CG, a management consulting firm, founded in 2018, is committed to making use of human intelligence with a blend of the digital capability to address the clients pain points.   LS & CG is based out of the UK and offers its services all over the world. Our experts team are formed exclusively, keeping in mind the unique capability of each individual to make a perfect blend of diversity which helps us to bring a fresh perspective to your business.Our aim is to be a market leader in management consulting in the UK by ensuring a profitable road-map for our client while at the same time, be known as the great work with the excellent work culture.Our mission is to unlock valuable and actionable insights. We want to be known for working for great organisations by having smart, talented, and enthusiastic people at work. Our client growth is our success, and hence we are committed to providing sustainable techniques to achieve their target.'
    
};

const Typography = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        {Object.keys(variants).map((key, i) => (
          <Fragment key={i}>
            <Grid
              item
              sm={3}
              xs={12}
            >
              <MuiTypography variant="caption"></MuiTypography>
            </Grid>
            <Grid
              item
              sm={9}
              xs={12}
            >
              <MuiTypography variant={key}>{variants[key]}</MuiTypography>
            </Grid>
          </Fragment>
        ))}
      </Grid>
    </div>
  );
};

export default Typography;
