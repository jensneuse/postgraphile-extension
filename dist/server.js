"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const postgraphile_1 = require("postgraphile");
const PORT = parseInt(process.env.PORT || "", 10) || 8080;
const HOST = process.env.HOST || "localhost";
const server = express();
server.use(postgraphile_1.postgraphile('postgres://postgres@localhost:15432/postgres', 'workshop', {
    graphiql: true,
    graphqlRoute: '/graphql'
}));
server.listen(PORT, HOST, () => {
    console.log('listening on: ' + HOST + ":" + PORT);
});
