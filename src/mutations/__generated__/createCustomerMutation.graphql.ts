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
                readonly orders: ({
                    readonly edges: ReadonlyArray<({
                        readonly node: ({
                            readonly tag: string;
                            readonly createdAt: any;
                        }) | null;
                    }) | null> | null;
                }) | null;
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
        orders {
          edges {
            node {
              tag
              createdAt
              id
            }
          }
        }
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
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "CreateCustomerInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "clientMutationId",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "billingAddress",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "tag",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "createdAt",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "store",
  "storageKey": null,
  "args": null,
  "concreteType": "Store",
  "plural": false,
  "selections": [
    (v5/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "totalCount",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "createCustomerMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createCustomer",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCustomerPayload",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "customerEdge",
            "storageKey": null,
            "args": null,
            "concreteType": "CustomerEdge",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Customer",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "orders",
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
                              (v8/*: any*/),
                              (v9/*: any*/)
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          (v10/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "createCustomerMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createCustomer",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCustomerPayload",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "customerEdge",
            "storageKey": null,
            "args": null,
            "concreteType": "CustomerEdge",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Customer",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "orders",
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
                              (v8/*: any*/),
                              (v9/*: any*/),
                              (v5/*: any*/)
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          (v10/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "createCustomerMutation",
    "id": null,
    "text": "mutation createCustomerMutation(\n  $input: CreateCustomerInput!\n) {\n  createCustomer(input: $input) {\n    clientMutationId\n    customerEdge {\n      cursor\n      __typename\n      node {\n        id\n        billingAddress\n        name\n        orders {\n          edges {\n            node {\n              tag\n              createdAt\n              id\n            }\n          }\n        }\n      }\n    }\n    store {\n      id\n      totalCount\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '864f8af029114eb7150ee576556484fc';
export default node;
