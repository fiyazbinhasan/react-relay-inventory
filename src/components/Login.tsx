import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from '@material-ui/core/styles';
import { Link, Redirect } from 'react-router-dom';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { LoginModel, AuthState } from '../store/auth/types';

const styles = (theme: Theme) =>
  createStyles({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white
      }
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
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

const Login = withStyles(styles)(
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

      if (isLoggedIn) return <Redirect to="/" />;
      else
        return (
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <form
                className={classes.form}
                noValidate
                onSubmit={this.handleSubmit}
              >
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={this.state.userName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    this.setState({ userName: e.currentTarget.value })
                  }
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={this.state.password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    this.setState({ password: e.currentTarget.value })
                  }
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link to="/register">Forgot password?</Link>
                  </Grid>
                  <Grid item>
                    <Link to="/register">
                      {"Don't have an account? Sign Up"}
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

export default Login;
