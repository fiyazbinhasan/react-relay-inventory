/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
type OrderList_customer$ref = any;
export type Customer_customer$ref = any;
export type Customer_customer = {
    readonly name: string;
    readonly billingAddress: string;
    readonly " $fragmentRefs": OrderList_customer$ref;
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
    },
    {
      "kind": "FragmentSpread",
      "name": "OrderList_customer",
      "args": null
    }
  ]
};
(node as any).hash = '86adc576b33cd83e3546392c9d8d397b';
export default node;
