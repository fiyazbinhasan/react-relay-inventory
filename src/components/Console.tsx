import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { Theme, createStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';

import { QueryRenderer, createFragmentContainer } from 'react-relay';
import environment from '../utility/relayEnvironment';
import ItemList from './ItemList';
import CustomerList from './CustomerList';
const graphql = require('babel-plugin-relay/macro');

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

const styles = (theme: Theme) =>
  createStyles({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    }
  });

interface Props extends WithStyles<typeof styles> { }

const DevConsole = withStyles(styles)(
  class extends React.Component<Props> {
    render() {
      const { classes } = this.props;
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
              // <div>
              //   <p>Token: {this.props.token}</p>
              //   <p>Error: {this.props.error}</p>
              //   <ItemList store={props.store} />
              //   <CustomerList store={props.store} />
              // </div>
              <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                  <ItemList store={props.store} />
                </Grid>
              </Container>
            );
          }}
        />
      );
    }
  }
);

export default DevConsole;