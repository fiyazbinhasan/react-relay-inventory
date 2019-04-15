/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type CustomerList_store$ref = any;
export type CustomerListRefetchQueryVariables = {
    readonly limit?: number | null;
};
export type CustomerListRefetchQueryResponse = {
    readonly store: ({
        readonly " $fragmentRefs": CustomerList_store$ref;
    }) | null;
};
export type CustomerListRefetchQuery = {
    readonly response: CustomerListRefetchQueryResponse;
    readonly variables: CustomerListRefetchQueryVariables;
};



/*
query CustomerListRefetchQuery(
  $limit: Int
) {
  store {
    ...CustomerList_store_1UvIyz
    id
  }
}

fragment CustomerList_store_1UvIyz on Store {
  customers(first: $limit) {
    edges {
      node {
        id
        ...Customer_customer
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  id
  totalCount
}

fragment Customer_customer on Customer {
  name
  billingAddress
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "limit",
    "type": "Int",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "limit",
    "type": "Int"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CustomerListRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "store",
        "storageKey": null,
        "args": null,
        "concreteType": "Store",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "CustomerList_store",
            "args": [
              {
                "kind": "Variable",
                "name": "limit",
                "variableName": "limit",
                "type": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CustomerListRefetchQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "store",
        "storageKey": null,
        "args": null,
        "concreteType": "Store",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "customers",
            "storageKey": null,
            "args": (v1/*: any*/),
            "concreteType": "CustomerConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "CustomerEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Customer",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "name",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "billingAddress",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "__typename",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "cursor",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "pageInfo",
                "storageKey": null,
                "args": null,
                "concreteType": "PageInfo",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "endCursor",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "hasNextPage",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "customers",
            "args": (v1/*: any*/),
            "handle": "connection",
            "key": "CustomerList_customers",
            "filters": null
          },
          (v2/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "totalCount",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "CustomerListRefetchQuery",
    "id": null,
    "text": "query CustomerListRefetchQuery(\n  $limit: Int\n) {\n  store {\n    ...CustomerList_store_1UvIyz\n    id\n  }\n}\n\nfragment CustomerList_store_1UvIyz on Store {\n  customers(first: $limit) {\n    edges {\n      node {\n        id\n        ...Customer_customer\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n  totalCount\n}\n\nfragment Customer_customer on Customer {\n  name\n  billingAddress\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'c009eb792710553093b61ac8a99bd6fa';
export default node;
