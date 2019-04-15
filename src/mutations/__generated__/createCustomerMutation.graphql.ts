/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type CreateCustomerInput = {
    readonly clientMutationId?: string | null;
    readonly name: string;
    readonly billingAddress: string;
};
export type createCustomerMutationVariables = {
    readonly input: CreateCustomerInput;
};
export type createCustomerMutationResponse = {
    readonly createCustomer: ({
        readonly clientMutationId: string | null;
        readonly customerEdge: ({
            readonly cursor: string;
            readonly __typename: string;
            readonly node: ({
                readonly id: string;
                readonly billingAddress: string;
                readonly name: string;
            }) | null;
        }) | null;
        readonly store: ({
            readonly id: string;
            readonly totalCount: number | null;
        }) | null;
    }) | null;
};
export type createCustomerMutation = {
    readonly response: createCustomerMutationResponse;
    readonly variables: createCustomerMutationVariables;
};



/*
mutation createCustomerMutation(
  $input: CreateCustomerInput!
) {
  createCustomer(input: $input) {
    clientMutationId
    customerEdge {
      cursor
      __typename
      node {
        id
        billingAddress
        name
      }
    }
    store {
      id
      totalCount
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateCustomerInput!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createCustomer",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "CreateCustomerInput!"
      }
    ],
    "concreteType": "CreateCustomerPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "clientMutationId",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "customerEdge",
        "storageKey": null,
        "args": null,
        "concreteType": "CustomerEdge",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "cursor",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "Customer",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "billingAddress",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "name",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "store",
        "storageKey": null,
        "args": null,
        "concreteType": "Store",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "totalCount",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "createCustomerMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "createCustomerMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "createCustomerMutation",
    "id": null,
    "text": "mutation createCustomerMutation(\n  $input: CreateCustomerInput!\n) {\n  createCustomer(input: $input) {\n    clientMutationId\n    customerEdge {\n      cursor\n      __typename\n      node {\n        id\n        billingAddress\n        name\n      }\n    }\n    store {\n      id\n      totalCount\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'a5007bfad7d415ec0bc5d954de032a1a';
export default node;
