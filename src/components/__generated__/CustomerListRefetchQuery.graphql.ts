/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type CustomerList_viewer$ref = any;
export type CustomerListRefetchQueryVariables = {
    readonly limit?: number | null;
};
export type CustomerListRefetchQueryResponse = {
    readonly viewer: {
        readonly " $fragmentRefs": CustomerList_viewer$ref;
    } | null;
};
export type CustomerListRefetchQuery = {
    readonly response: CustomerListRefetchQueryResponse;
    readonly variables: CustomerListRefetchQueryVariables;
};



/*
query CustomerListRefetchQuery(
  $limit: Int
) {
  viewer {
    ...CustomerList_viewer_1UvIyz
    id
  }
}

fragment CustomerList_viewer_1UvIyz on Viewer {
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
  ...OrderList_customer
}

fragment OrderList_customer on Customer {
  orders(first: 3) {
    edges {
      node {
        id
        ...Order_order
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment Order_order on Order {
  tag
  createdAt
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
},
v3 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 3,
    "type": "Int"
  }
],
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v6 = {
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
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "CustomerList_viewer",
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
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
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
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "orders",
                        "storageKey": "orders(first:3)",
                        "args": (v3/*: any*/),
                        "concreteType": "OrderConnection",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "edges",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "OrderEdge",
                            "plural": true,
                            "selections": [
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "node",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "Order",
                                "plural": false,
                                "selections": [
                                  (v2/*: any*/),
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "tag",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "createdAt",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  (v4/*: any*/)
                                ]
                              },
                              (v5/*: any*/)
                            ]
                          },
                          (v6/*: any*/)
                        ]
                      },
                      {
                        "kind": "LinkedHandle",
                        "alias": null,
                        "name": "orders",
                        "args": (v3/*: any*/),
                        "handle": "connection",
                        "key": "OrderList_orders",
                        "filters": null
                      },
                      (v4/*: any*/)
                    ]
                  },
                  (v5/*: any*/)
                ]
              },
              (v6/*: any*/)
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
    "text": "query CustomerListRefetchQuery(\n  $limit: Int\n) {\n  viewer {\n    ...CustomerList_viewer_1UvIyz\n    id\n  }\n}\n\nfragment CustomerList_viewer_1UvIyz on Viewer {\n  customers(first: $limit) {\n    edges {\n      node {\n        id\n        ...Customer_customer\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n  totalCount\n}\n\nfragment Customer_customer on Customer {\n  name\n  billingAddress\n  ...OrderList_customer\n}\n\nfragment OrderList_customer on Customer {\n  orders(first: 3) {\n    edges {\n      node {\n        id\n        ...Order_order\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment Order_order on Order {\n  tag\n  createdAt\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '73019e09d3640dfa736d2cb0a2b694d5';
export default node;
