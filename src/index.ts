import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { startStandaloneServer } from "@apollo/server/standalone";
import { prepareSchema } from "./utils/schema";
import express from "express";
import { createServer } from "http";
import context from "./context";
import { AddressInfo } from "net";
import json from "body-parser";
const app = express();

const httpServer = createServer(app);

const server = new ApolloServer({
  schema: await prepareSchema(),
});
await server.start();
// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests

app.use("/", json(), expressMiddleware(server, { context }));

const httpServerOptions = {
  port: 4000,
  host: "0.0.0.0",
};

httpServer.listen(httpServerOptions, () => {
  const address = httpServer.address() as AddressInfo;
  console.log(`🚀  Server ready at: ${address.address}:${address.port}`);
});
