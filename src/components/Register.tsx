import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { Theme, createStyles } from '@material-ui/core';
import { RegisterModel, AuthState } from '../store/auth/types';
import { Link, Redirect } from 'react-router-dom';
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

const styles = (theme: Theme) =>
  createStyles({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
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
  isRegistered: boolean;
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
      const { classes, isRegistered } = this.props;

      if (isRegistered) return <Redirect to="/login" />;

      else
        return (
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
            </Typography>
              <form className={classes.form} noValidate onSubmit={this.handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="fname"
                      name="firstName"
                      variant="outlined"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                      value={this.state.firstName}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        this.setState({ firstName: e.currentTarget.value })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="lname"
                      value={this.state.lastName}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        this.setState({ firstName: e.currentTarget.value })
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      value={this.state.email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        this.setState({ email: e.currentTarget.value })
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      value={this.state.email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        this.setState({ email: e.currentTarget.value })
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox value="allowExtraEmails" color="primary" />}
                      label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign Up
              </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link to="/login">
                      Already have an account? Sign in
                  </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Container>
        );
    }
  }
);
