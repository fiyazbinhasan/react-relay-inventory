import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { Theme, createStyles } from '@material-ui/core';
import { RegisterModel, AuthState } from '../store/auth/types';
import { Link } from 'react-router-dom';
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

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
  registerUser: (
    registerModel: RegisterModel
  ) => ThunkAction<
    void,
    {
      auth: AuthState;
    },
    null,
    Action<string>
  >;
  registering: boolean;
}

interface State {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const RegisterInterface = withStyles(styles)(
  class extends React.Component<Props, State> {
    state: State = {
      firstName: 'Fiyaz',
      lastName: 'Hasan',
      email: 'fiyazhasan@gmail.com',
      password: '@FiyazHasan123'
    };

    private handleSubmit = async (
      e: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {
      e.preventDefault();
      this.props.registerUser(this.state);
    };
    render() {
      const { classes } = this.props;
      return (
        <main className={classes.main}>
          <CssBaseline />
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              {this.props.registering ? (
                <HourglassEmptyIcon />
              ) : (
                <LockOutlinedIcon />
              )}
            </Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>

            <form className={classes.form} onSubmit={this.handleSubmit}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="firstName">First Name</InputLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  autoComplete="firstName"
                  autoFocus
                  value={this.state.firstName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    this.setState({ firstName: e.currentTarget.value })
                  }
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="lastName">Last Name</InputLabel>
                <Input
                  id="lastName"
                  name="lastName"
                  autoComplete="lastName"
                  value={this.state.lastName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    this.setState({ lastName: e.currentTarget.value })
                  }
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input
                  id="email"
                  name="email"
                  autoComplete="email"
                  value={this.state.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    this.setState({ email: e.currentTarget.value })
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
                Register
              </Button>
            </form>
            <p>
              Or, <Link to="/login">sign in</Link>
            </p>
          </Paper>
        </main>
      );
    }
  }
);
