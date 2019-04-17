export const ActionTypes: {
  CREATE_HREF: string;
  CREATE_LOCATION: string;
  DISPOSE: string;
  GO: string;
  INIT: string;
  PUSH: string;
  REPLACE: string;
  TRANSITION: string;
  UPDATE_LOCATION: string;
};
export namespace Actions {
  function dispose(): any;
  function go(delta: any): any;
  function init(): any;
  function push(location: any): any;
  function replace(location: any): any;
}
export class BrowserProtocol {
  createHref(location: any): any;
  go(delta: any): void;
  init(): any;
  subscribe(listener: any): any;
  transition(location: any): any;
}
export class HashProtocol {
  stateStorage: any;
  createHref(location: any): any;
  go(delta: any): void;
  init(): any;
  subscribe(listener: any): any;
  transition(location: any): any;
}
export class MemoryProtocol {
  constructor(initialLocation: any, _temp: any);
  createHref(location: any): any;
  go(delta: any): void;
  init(delta: any): any;
  subscribe(listener: any): any;
  transition(location: any): any;
}
export class ServerProtocol {
  constructor(url: any);
  createHref(location: any): any;
  init(): any;
  subscribe(): any;
}
export class StateStorage {
  constructor(farce: any, namespace: any);
  read(location: any, key: any): any;
  save(location: any, key: any, value: any): void;
}
export function createBasenameMiddleware(_ref: any): any;
export function createHistory(options: any): any;
export function createHistoryEnhancer(_ref: any): any;
export function createHistoryMiddleware(protocol: any): any;
export function createLocationMiddleware(_ref: any): any;
export function createQueryMiddleware(_ref: any): any;
export function createStoreHistory(store: any, getLocation: any): any;
export function createTransitionHookMiddleware(_ref: any): any;
export function ensureLocationMiddleware(): any;
export function locationReducer(state: any, action: any): any;
export function queryMiddleware(): any;
