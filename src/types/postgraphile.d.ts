type PostGraphQLOptions = {
  classicIds?: boolean;
  dynamicJson?: boolean;
  graphqlRoute?: string;
  graphiqlRoute?: string;
  graphiql?: boolean;
  pgDefaultRole?: string;
  jwtSecret?: string;
  jwtAudiences?: Array<string>;
  jwtRole?: Array<string>;
  jwtPgTypeIdentifier?: string;
  watchPg?: boolean;
  showErrorStack?: boolean;
  extendedErrors?: Array<string>;
  disableQueryLog?: boolean;
  disableDefaultMutations?: boolean;
  enableCors?: boolean;
  exportJsonSchemaPath?: string;
  exportGqlSchemaPath?: string;
  bodySizeLimit?: string;
  pgSettings?: { [key: string]: any } | ((req: object) => Promise<{ [key: string]: any }>); //IncomingMessage
  appendPlugins?: Array<(builder: any) => {}>;
  prependPlugins?: Array<(builder: any) => {}>;
  replaceAllPlugins?: Array<(builder: any) => {}>;
  additionalGraphQLContextFromRequest?: (req: object, res: object) => Promise<{}>; //IncomingMessage, ServerResponse
  readCache?: string;
  writeCache?: string;
};

declare module 'postgraphile' {
  export const postgraphile: (
    connection_string: string | object,
    schema: string | Array<string>,
    options?: PostGraphQLOptions
  ) => any;
}
