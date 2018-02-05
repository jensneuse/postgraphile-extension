declare module 'postgraphile' {
    export const postgraphile: (connection_string:string,schema:string,options?: {
        classicIds?: string,
        dynamicJson?: boolean,
        graphiql?: boolean,
        graphqlRoute?: string
    }) => any
}