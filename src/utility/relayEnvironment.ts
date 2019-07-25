import {
  Environment,
  Network,
  RecordSource,
  Store,
  Variables,
  RequestParameters
} from 'relay-runtime';

import { loadToken } from './localStorage';

const fetchQuery = (request: RequestParameters, variables: Variables) => {
  return fetch('http://localhost:5000/api/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${loadToken()}`
    },
    body: JSON.stringify({
      query: request.text,
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

export default environment;
