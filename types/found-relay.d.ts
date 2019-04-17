export class Resolver {
  constructor(environment: any);
  environment: any;
  lastQuerySubscriptions: any;
  createElements(routeMatches: any, Components: any, querySubscriptions: any, fetched: any): any;
  getRouteVariables(match: any, routeMatches: any): any;
  resolveElements(match: any): any;
  updateQuerySubscriptions(queries: any, routeVariables: any, cacheConfigs: any, dataFroms: any): any;
}
