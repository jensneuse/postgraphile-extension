import * as express from 'express'
import {postgraphile} from 'postgraphile'

import {AddVoidPlugin} from './voidPlugin'

const PORT:number = parseInt(process.env.PORT || "",10) || 8080;
const HOST:string = process.env.HOST || "localhost"

const server = express();

server.use(
    postgraphile('postgres://postgres@localhost:15432/postgres','workshop',{
        graphiql: true,
        graphqlRoute: '/graphql',
        appendPlugins: [
           AddVoidPlugin
        ],
        additionalGraphQLContextFromRequest: (req:any,res:any):Promise<any> => {
            return new Promise((resolve,reject) => {
                resolve({
                    additionalRequest: req
                });
            });
        }
    })
);

server.listen(PORT,HOST,()=>{
    console.log('listening on: ' + HOST + ":" + PORT);
});
