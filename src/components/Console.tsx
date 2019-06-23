import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import ToysIcon from '@material-ui/icons/Toys';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

import { QueryRenderer } from 'react-relay';

import environment from '../utility/relayEnvironment';
import ItemList from './ItemList';
const graphql = require('babel-plugin-relay/macro');

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

interface Props {
  token: string;
  error: string;
}

const query = graphql`
  query ConsoleQuery {
    store {
      id
      totalCount
      ...ItemList_store
      ...CustomerList_store
    }
  }
`;

export const DevConsole: React.FunctionComponent<Props> = (componentProps) => {
  const classes = useStyles();
  return (
    <QueryRenderer
      environment={environment}
      query={query}
      variables={{}}
      render={({ error, props }) => {
        if (error) {
          return <div>{error.message}</div>;
        }
        if (!props) {
          return <div>Loading...</div>;
        }
        return (
          <React.Fragment>
            <CssBaseline />
            <AppBar position="relative">
              <Toolbar>
                <ToysIcon className={classes.icon} />
                <Typography variant="h6" color="inherit" noWrap>
                  Order Cart - Made with React, Redux, Relay, GraphQL, ASP.NET Core
                </Typography>
              </Toolbar>
            </AppBar>
            <main>
              <div className={classes.heroContent}>
                <Container maxWidth="sm">
                  <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Buy things!
                  </Typography>
                  <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Something short and leading about the collection below—its contents, the creator, etc.
                  </Typography>
                  <div className={classes.heroButtons}>
                    <Grid container spacing={2} justify="center">
                      <Grid item>
                        <Button variant="contained" color="primary">
                          Main call to action
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button variant="outlined" color="primary">
                          Secondary action
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                </Container>
              </div>
              <Container className={classes.cardGrid} maxWidth="md">
                <ItemList store={props.store} />
                <Box mt={5}>
                  <Typography variant="body2" color="textSecondary">
                    <b>Token:</b> {componentProps.token}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <b>Error:</b> {componentProps.error}
                  </Typography>
                </Box>
              </Container>
            </main>
          </React.Fragment>
        );
      }}
    />
  );
}