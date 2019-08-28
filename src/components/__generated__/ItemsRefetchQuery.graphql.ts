/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type Items_viewer$ref = any;
export type ItemsRefetchQueryVariables = {
    readonly limit?: number | null;
};
export type ItemsRefetchQueryResponse = {
    readonly viewer: {
        readonly " $fragmentRefs": Items_viewer$ref;
    } | null;
};
export type ItemsRefetchQuery = {
    readonly response: ItemsRefetchQueryResponse;
    readonly variables: ItemsRefetchQueryVariables;
};



/*
query ItemsRefetchQuery(
  $limit: Int
) {
  viewer {
    ...Items_viewer_1UvIyz
    id
  }
}

fragment Items_viewer_1UvIyz on Viewer {
  items(first: $limit) {
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

fragment Item_item on Item {
  title
  sellingPrice
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
    "name": "ItemsRefetchQuery",
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
            "name": "Items_viewer",
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
    "name": "ItemsRefetchQuery",
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
            "name": "items",
            "storageKey": null,
            "args": (v1/*: any*/),
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
                      (v2/*: any*/),
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
            "name": "items",
            "args": (v1/*: any*/),
            "handle": "connection",
            "key": "Items_items",
            "filters": null
          },
          (v2/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ItemsRefetchQuery",
    "id": null,
    "text": "query ItemsRefetchQuery(\n  $limit: Int\n) {\n  viewer {\n    ...Items_viewer_1UvIyz\n    id\n  }\n}\n\nfragment Items_viewer_1UvIyz on Viewer {\n  items(first: $limit) {\n    edges {\n      node {\n        id\n        ...Item_item\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment Item_item on Item {\n  title\n  sellingPrice\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'd313167fd97648d2e3fee16ca356e84d';
export default node;
