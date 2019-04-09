/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type ItemList_store$ref = any;
export type ConsoleQueryVariables = {};
export type ConsoleQueryResponse = {
    readonly store: ({
        readonly " $fragmentRefs": ItemList_store$ref;
    }) | null;
};
export type ConsoleQuery = {
    readonly response: ConsoleQueryResponse;
    readonly variables: ConsoleQueryVariables;
};



/*
query ConsoleQuery {
  store {
    ...ItemList_store
  }
}

fragment ItemList_store on Store {
  items {
    ...Item_item
    id
  }
}

fragment Item_item on Item {
  id
  title
  sellingPrice
}
*/

const node: ConcreteRequest = {
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
          {
            "kind": "FragmentSpread",
            "name": "ItemList_store",
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
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "items",
            "storageKey": null,
            "args": null,
            "concreteType": "Item",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              },
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
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ConsoleQuery",
    "id": null,
    "text": "query ConsoleQuery {\n  store {\n    ...ItemList_store\n  }\n}\n\nfragment ItemList_store on Store {\n  items {\n    ...Item_item\n    id\n  }\n}\n\nfragment Item_item on Item {\n  id\n  title\n  sellingPrice\n}\n",
    "metadata": {}
  }
};
(node as any).hash = '820f6fc29af1db50efe4aa60036f7431';
export default node;
