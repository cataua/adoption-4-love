
export interface routeTypeController {
  routeProfile?: routeType[],
};

export interface routeType {
  readonly path: string;
  readonly controller: any;
}
