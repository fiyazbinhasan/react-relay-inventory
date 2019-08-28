/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type CustomerList_viewer$ref = any;
type Items_viewer$ref = any;
export type DashboardQueryVariables = {};
export type DashboardQueryResponse = {
    readonly viewer: {
        readonly id: string;
        readonly totalCount: number | null;
        readonly " $fragmentRefs": Items_viewer$ref & CustomerList_viewer$ref;
    } | null;
};
export type DashboardQuery = {
    readonly response: DashboardQueryResponse;
    readonly variables: DashboardQueryVariables;
};



/*
query DashboardQuery {
  viewer {
    id
    totalCount
    ...Items_viewer
    ...CustomerList_viewer
  }
}

fragment Items_viewer on Viewer {
  items(first: 2) {
    edges {
      node {
        id
        ...Item_item
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
}

fragment CustomerList_viewer on Viewer {
  customers(first: 10) {
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

fragment Item_item on Item {
  title
  sellingPrice
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "totalCount",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 2,
    "type": "Int"
  }
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v5 = {
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
},
v6 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10,
    "type": "Int"
  }
],
v7 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 3,
    "type": "Int"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DashboardQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
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
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "kind": "FragmentSpread",
            "name": "Items_viewer",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "CustomerList_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "DashboardQuery",
    "argumentDefinitions": [],
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
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "items",
            "storageKey": "items(first:2)",
            "args": (v2/*: any*/),
            "concreteType": "ItemConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "ItemEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Item",
                    "plural": false,
                    "selections": [
                      (v0/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "title",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "sellingPrice",
                        "args": null,
                        "storageKey": null
                      },
                      (v3/*: any*/)
                    ]
                  },
                  (v4/*: any*/)
                ]
              },
              (v5/*: any*/)
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "items",
            "args": (v2/*: any*/),
            "handle": "connection",
            "key": "Items_items",
            "filters": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "customers",
            "storageKey": "customers(first:10)",
            "args": (v6/*: any*/),
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
                      (v0/*: any*/),
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
                        "args": (v7/*: any*/),
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
                                  (v0/*: any*/),
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
                                  (v3/*: any*/)
                                ]
                              },
                              (v4/*: any*/)
                            ]
                          },
                          (v5/*: any*/)
                        ]
                      },
                      {
                        "kind": "LinkedHandle",
                        "alias": null,
                        "name": "orders",
                        "args": (v7/*: any*/),
                        "handle": "connection",
                        "key": "OrderList_orders",
                        "filters": null
                      },
                      (v3/*: any*/)
                    ]
                  },
                  (v4/*: any*/)
                ]
              },
              (v5/*: any*/)
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "customers",
            "args": (v6/*: any*/),
            "handle": "connection",
            "key": "CustomerList_customers",
            "filters": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "DashboardQuery",
    "id": null,
    "text": "query DashboardQuery {\n  viewer {\n    id\n    totalCount\n    ...Items_viewer\n    ...CustomerList_viewer\n  }\n}\n\nfragment Items_viewer on Viewer {\n  items(first: 2) {\n    edges {\n      node {\n        id\n        ...Item_item\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment CustomerList_viewer on Viewer {\n  customers(first: 10) {\n    edges {\n      node {\n        id\n        ...Customer_customer\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n  totalCount\n}\n\nfragment Customer_customer on Customer {\n  name\n  billingAddress\n  ...OrderList_customer\n}\n\nfragment OrderList_customer on Customer {\n  orders(first: 3) {\n    edges {\n      node {\n        id\n        ...Order_order\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment Order_order on Order {\n  tag\n  createdAt\n}\n\nfragment Item_item on Item {\n  title\n  sellingPrice\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '4f24ea39a2af8b1de6f1a646aa80ca39';
export default node;
