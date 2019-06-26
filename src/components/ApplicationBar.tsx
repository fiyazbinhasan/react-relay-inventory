import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToysIcon from '@material-ui/icons/Toys';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
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
  title: string;
  cartItemCount: number;
}

const ApplicationBar: React.SFC<Props> = props => {
  const classes = useStyles();
  return (
    <AppBar position="relative">
      <Toolbar>
        <ToysIcon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
          {props.title}
        </Typography>
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
          <IconButton color="inherit">
            <Badge badgeContent={props.cartItemCount} color="secondary">
              <ShoppingBasketIcon />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default ApplicationBar;
