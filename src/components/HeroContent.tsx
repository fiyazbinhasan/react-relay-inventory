import * as React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  heroContent: {
    // backgroundColor: theme.palette.background.paper,
    backgroundImage:
      'url(https://2.bp.blogspot.com/-WhgWDufu8Fs/XWJncbXyF2I/AAAAAAAADNo/0uuDbwitJd8K8kPzuBtNWztAJyfvmgeDQCLcBGAs/s1600/Screenshot%2B2019-08-25%2Bat%2B16.47.42.png)', //use google static map here
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  grow: {
    flexGrow: 1
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  }
}));

interface Props {
  slogan: string;
  description: string;
}

const HeroContent: React.FunctionComponent<Props> = props => {
  const classes = useStyles();
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          {props.slogan}
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          {props.description}
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container justify="center">
            <Grid item>
              <Button variant="contained" color="primary">
                <Icon className={classes.leftIcon} color="secondary">
                  directions
                </Icon>
                Get Directions
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default HeroContent;
