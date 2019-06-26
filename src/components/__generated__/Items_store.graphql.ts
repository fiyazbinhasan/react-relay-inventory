/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
type Item_item$ref = any;
export type Items_store$ref = any;
export type Items_store = {
    readonly items: ReadonlyArray<({
        readonly id: string;
        readonly " $fragmentRefs": Item_item$ref;
    }) | null> | null;
    readonly " $refType": Items_store$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "Items_store",
  "type": "Store",
  "metadata": null,
  "argumentDefinitions": [],
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
          "kind": "FragmentSpread",
          "name": "Item_item",
          "args": null
        }
      ]
    }
  ]
};
(node as any).hash = '53bef31b33b58d7e7d8a607c3d321ea0';
export default node;
