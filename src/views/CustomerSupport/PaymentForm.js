import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Contact
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Phone number-+44 7853529696 , contact@londonscg.com '}
          {'Address-71-75, Shelton Street, Covent Garden, London, WC2H 9JQ  '}
        </Typography>
        
        <Typography variant="h2" component="h1" gutterBottom>
          FAQs
        </Typography>
      </Container>
      
    </div>
  );
}
