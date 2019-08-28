import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import { QueryRenderer } from 'react-relay';

import TopBar from './TopBar';
import HeroContent from './HeroContent';
import Items from './Items';

import environment from '../utility/relayEnvironment';
import Inspector from './Inspector';
import CustomerList from './CustomerList';
import Filter from './Filter';
const graphql = require('babel-plugin-relay/macro');

const query = graphql`
  query DashboardQuery {
    viewer {
      id
      totalCount
      ...Items_viewer
      ...CustomerList_viewer
    }
  }
`;

function Dashboard() {
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
            <TopBar />
            <main>
              <HeroContent
                slogan="Surfaces!"
                description="Selling away refurbished surfaces"
              />
              <Filter />
              <Items viewer={props.viewer} />
              {/* <CustomerList viewer={props.viewer} /> */}
              <Inspector />
            </main>
          </React.Fragment>
        );
      }}
    />
  );
}

export default Dashboard;
