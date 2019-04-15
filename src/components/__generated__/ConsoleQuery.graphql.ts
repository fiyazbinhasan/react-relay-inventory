/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type CustomerList_store$ref = any;
type ItemList_store$ref = any;
export type ConsoleQueryVariables = {};
export type ConsoleQueryResponse = {
    readonly store: ({
        readonly id: string;
        readonly totalCount: number | null;
        readonly " $fragmentRefs": ItemList_store$ref & CustomerList_store$ref;
    }) | null;
};
export type ConsoleQuery = {
    readonly response: ConsoleQueryResponse;
    readonly variables: ConsoleQueryVariables;
};



/*
query ConsoleQuery {
  store {
    id
    totalCount
    ...ItemList_store
    ...CustomerList_store
  }
}

fragment ItemList_store on Store {
  items {
    id
    ...Item_item
  }
}

fragment CustomerList_store on Store {
  customers(first: 3) {
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
    "value": 3,
    "type": "Int"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ConsoleQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
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
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "kind": "FragmentSpread",
            "name": "ItemList_store",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "CustomerList_store",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ConsoleQuery",
    "argumentDefinitions": [],
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
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "items",
            "storageKey": null,
            "args": null,
            "concreteType": "Item",
            "plural": true,
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
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "customers",
            "storageKey": "customers(first:3)",
            "args": (v2/*: any*/),
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
            "args": (v2/*: any*/),
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
    "name": "ConsoleQuery",
    "id": null,
    "text": "query ConsoleQuery {\n  store {\n    id\n    totalCount\n    ...ItemList_store\n    ...CustomerList_store\n  }\n}\n\nfragment ItemList_store on Store {\n  items {\n    id\n    ...Item_item\n  }\n}\n\nfragment CustomerList_store on Store {\n  customers(first: 3) {\n    edges {\n      node {\n        id\n        ...Customer_customer\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n  totalCount\n}\n\nfragment Customer_customer on Customer {\n  name\n  billingAddress\n}\n\nfragment Item_item on Item {\n  title\n  sellingPrice\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '095bb4af90466ea93d285c7644bb3f88';
export default node;
