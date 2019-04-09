/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type Item_item$ref = any;
export type Item_item = {
    readonly id: string;
    readonly title: string;
    readonly sellingPrice: any;
    readonly " $refType": Item_item$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "Item_item",
  "type": "Item",
  "metadata": null,
  "argumentDefinitions": [],
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
};
(node as any).hash = 'ed9ea8295e3448e8affed50190f05483';
export default node;
