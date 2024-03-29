/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type Item_item$ref = any;
export type Item_item = {
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
(node as any).hash = 'ccd9c2a15d649577e28a4ee69357c189';
export default node;
