/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type Order_order$ref = any;
export type Order_order = {
    readonly tag: string;
    readonly createdAt: any;
    readonly " $refType": Order_order$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "Order_order",
  "type": "Order",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
    }
  ]
};
(node as any).hash = '9562bc34c319316c3ff2e622d7a48f98';
export default node;
