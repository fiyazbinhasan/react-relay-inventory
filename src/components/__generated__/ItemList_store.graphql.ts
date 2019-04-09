/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
type Item_item$ref = any;
export type ItemList_store$ref = any;
export type ItemList_store = {
    readonly items: ReadonlyArray<({
        readonly " $fragmentRefs": Item_item$ref;
    }) | null> | null;
    readonly " $refType": ItemList_store$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "ItemList_store",
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
          "kind": "FragmentSpread",
          "name": "Item_item",
          "args": null
        }
      ]
    }
  ]
};
(node as any).hash = '0152d446725046a210958f60fce4164e';
export default node;
