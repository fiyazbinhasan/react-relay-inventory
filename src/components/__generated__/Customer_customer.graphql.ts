/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type Customer_customer$ref = any;
export type Customer_customer = {
    readonly name: string;
    readonly billingAddress: string;
    readonly " $refType": Customer_customer$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "Customer_customer",
  "type": "Customer",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
    }
  ]
};
(node as any).hash = 'ac29c5444dd8a3eee7038a75c92c62d1';
export default node;
