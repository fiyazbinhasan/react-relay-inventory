/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
type Order_order$ref = any;
export type OrderList_customer$ref = any;
export type OrderList_customer = {
    readonly orders: ({
        readonly edges: ReadonlyArray<({
            readonly node: ({
                readonly id: string;
                readonly " $fragmentRefs": Order_order$ref;
            }) | null;
        }) | null> | null;
    }) | null;
    readonly " $refType": OrderList_customer$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "OrderList_customer",
  "type": "Customer",
  "metadata": {
    "connection": [
      {
        "count": "limit",
        "cursor": null,
        "direction": "forward",
        "path": [
          "orders"
        ]
      }
    ]
  },
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "limit",
      "type": "Int",
      "defaultValue": 3
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "orders",
      "name": "__OrderList_orders_connection",
      "storageKey": null,
      "args": null,
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
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "id",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "FragmentSpread",
                  "name": "Order_order",
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
    }
  ]
};
(node as any).hash = '10d8c52bf3bb35f33c400af118de1ef9';
export default node;
