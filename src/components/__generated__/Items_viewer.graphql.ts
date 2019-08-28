/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
type Item_item$ref = any;
export type Items_viewer$ref = any;
export type Items_viewer = {
    readonly items: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly " $fragmentRefs": Item_item$ref;
            } | null;
        } | null> | null;
    } | null;
    readonly id: string;
    readonly " $refType": Items_viewer$ref;
};



const node: ReaderFragment = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "Items_viewer",
  "type": "Viewer",
  "metadata": {
    "connection": [
      {
        "count": "limit",
        "cursor": null,
        "direction": "forward",
        "path": [
          "items"
        ]
      }
    ]
  },
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "limit",
      "type": "Int",
      "defaultValue": 2
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "items",
      "name": "__Items_items_connection",
      "storageKey": null,
      "args": null,
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
                  "kind": "FragmentSpread",
                  "name": "Item_item",
                  "args": null
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
    (v0/*: any*/)
  ]
};
})();
(node as any).hash = 'a191df2d50eae761e53d41f47a11753d';
export default node;
