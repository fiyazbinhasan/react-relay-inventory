import * as React from 'react';
import { LoginModel, AuthState } from '../store/auth/types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { Theme, createStyles } from '@material-ui/core';
import { Link, NavLink, Redirect } from 'react-router-dom';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

const styles = (theme: Theme) =>
  createStyles({
    main: {
      width: 'auto',
      display: 'block', // Fix IE 11 issue.
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto'
      }
    },
    paper: {
      marginTop: theme.spacing.unit * 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
        .spacing.unit * 3}px`
    },
    avatar: {
      margin: theme.spacing.unit,
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing.unit
    },
    submit: {
      marginTop: theme.spacing.unit * 3
    }
  });

interface Props extends WithStyles<typeof styles> {
  loginUser: (
    loginModel: LoginModel
  ) => ThunkAction<void, { auth: AuthState }, null, Action<string>>;
  loggingIn: boolean;
  isLoggedIn: boolean;
}

interface State {
  userName: string;
  password: string;
}

export const LoginInterface = withStyles(styles)(
  class extends React.Component<Props> {
    state: State = {
      userName: 'admin@graphqlcore.local',
      password: '@Admin123'
    };

    private handleSubmit = async (
      e: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {
      e.preventDefault();
      this.props.loginUser(this.state);
    };

    render() {
      const { classes, isLoggedIn } = this.props;

      if (isLoggedIn) return <Redirect to="/main" />;
      else
        return (
          <main className={classes.main}>
            <CssBaseline />
            <Paper className={classes.paper}>
              <Avatar className={classes.avatar}>
                {this.props.loggingIn ? (
                  <HourglassEmptyIcon />
                ) : (
                  <LockOutlinedIcon />
                )}
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <form className={classes.form} onSubmit={this.handleSubmit}>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="email">Email Address</InputLabel>
                  <Input
                    id="email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={this.state.userName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      this.setState({ userName: e.currentTarget.value })
                    }
                  />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input
                    name="password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={this.state.password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      this.setState({ password: e.currentTarget.value })
                    }
                  />
                </FormControl>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign in
                </Button>
              </form>
              <p>
                Please <Link to="/register">register</Link> if you don't have an
                account.
              </p>
            </Paper>
          </main>
        );
    }
  }
);
