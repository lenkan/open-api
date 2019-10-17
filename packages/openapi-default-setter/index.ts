import { OpenAPI, OpenAPIV2, OpenAPIV3 } from 'openapi-types';

type ParameterObject = OpenAPIV3.ParameterObject | OpenAPIV2.ParameterObject;
type ParameterObjects = OpenAPIV3.ParameterObject[] | OpenAPIV2.ParameterObject[];

interface DefaultMap {
  [paramName: string]: any;
}

export interface IOpenAPIDefaultSetter {
  handle(request: OpenAPI.Request): void;
}

export interface OpenAPIDefaultSetterArgs {
  loggingKey?: string;
  parameters: ParameterObjects;
}

export default class OpenAPIDefaultSetter implements IOpenAPIDefaultSetter {
  private headersDefaults: DefaultMap;
  private queryDefaults: DefaultMap;

  constructor(args: OpenAPIDefaultSetterArgs) {
    const loggingKey = args && args.loggingKey ? args.loggingKey + ': ' : '';
    if (!args) {
      throw new Error(loggingKey + 'missing args argument');
    }

    if (!Array.isArray(args.parameters)) {
      throw new Error(loggingKey + 'args.parameters must be an Array');
    }

    this.headersDefaults = getDefaults('header', args.parameters);
    this.queryDefaults = getDefaults('query', args.parameters);
  }

  public handle(request: OpenAPI.Request): void {
    if (request.headers && this.headersDefaults) {
      setDefaults(request.headers, this.headersDefaults);
    }

    if (request.query && this.queryDefaults) {
      setDefaults(request.query, this.queryDefaults);
    }
  }
}

function byLocation(location: string) {
  return (param: OpenAPIV3.ParameterObject | OpenAPIV2.ParameterObject) => {
    return param.in === location;
  };
}

function resolveDefaultValue(parameter: OpenAPIV3.ParameterObject | OpenAPIV2.ParameterObject) {
  if ('default' in parameter) {
    return parameter.default;
  }

  if('schema' in parameter) {
    return parameter['schema'] && parameter['schema'].default;
  }

  return undefined;
}

function resolveName(parameter: OpenAPIV3.ParameterObject | OpenAPIV2.ParameterObject): string {
  if(parameter.in === "header") {
    return parameter.name.toLowerCase();
  }
  return parameter.name;
}

function getDefaults(location: string, parameters: (OpenAPIV3.ParameterObject | OpenAPIV2.ParameterObject)[]): Record<string, any> {
  const defaults = parameters
    .filter(byLocation(location))
    .reduce((defaults, param) => {
      const name = resolveName(param);

      const defaultValue = resolveDefaultValue(param);
      if(defaultValue === undefined) {
        return defaults;
      }

      return {...defaults, [name]: defaultValue };
    }, {});

  return Object.keys(defaults).length ? defaults : undefined
}

function setDefaults(obj: Record<string, any>, defaults: Record<string, any>) {
  for (const name in defaults) {
    if (!(name in obj)) {
      obj[name] = defaults[name];
    }
  }
}
