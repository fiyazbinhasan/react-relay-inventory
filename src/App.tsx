import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { QueryRenderer } from 'react-relay';

import {
  Environment,
  Network,
  RecordSource,
  Store,
  Variables,
  RequestNode
} from 'relay-runtime';

const graphql = require('babel-plugin-relay/macro');

const fetchQuery = (operation: RequestNode, variables: Variables) => {
  return fetch('http://localhost:5000/api/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => {
    return response.json();
  });
};

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
});

const query = graphql`
  query AppQuery {
    item(barcode: "123") {
      title
      sellingPrice
    }
  }
`;

console.log(query);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
