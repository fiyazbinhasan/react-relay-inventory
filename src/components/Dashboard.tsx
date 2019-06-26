import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import { QueryRenderer } from 'react-relay';

import Items from './Items';
import HeroContent from './HeroContent';

import environment from '../utility/relayEnvironment';
import ApplicationBar from './ApplicationBar';
const graphql = require('babel-plugin-relay/macro');

const query = graphql`
  query DashboardQuery {
    store {
      id
      totalCount
      ...Items_store
      ...CustomerList_store
    }
  }
`;

const Dashboard: React.FunctionComponent = componentProps => {
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
            <ApplicationBar title="Programmers Paradise" cartItemCount={5} />
            <main>
              <HeroContent
                slogan="Big Sale!"
                description="Black friday is not so far away."
              />
              <Items store={props.store} />
            </main>
          </React.Fragment>
        );
      }}
    />
  );
};

export default Dashboard;
