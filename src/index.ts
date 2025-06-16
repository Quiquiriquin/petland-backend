import { ApolloServer } from "@apollo/server";
import express from "express";
import { expressMiddleware } from "@apollo/server/express4";
import { schema } from "./db";

import { createServer } from "http";
import { AddressInfo } from "net";
import { createContext } from "./context";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import cors from "cors";
const app = express();
const httpServer = createServer(app);
const server = new ApolloServer({
  schema,
  introspection: true,
  plugins: [ApolloServerPluginLandingPageLocalDefault()],
});

await server.start();
app.use(cors());
app.use(
  "/graphql",
  express.json(),
  // @ts-expect-error known express type conflict
  expressMiddleware(server, {
    context: ({ req }) => createContext(req),
  }) as express.RequestHandler
);

const httpServerOptions = {
  port: 4000,
  host: "0.0.0.0",
};
httpServer.listen(httpServerOptions, async () => {
  try {
    const address = httpServer.address() as AddressInfo;
    console.log(`🚀 Server ready at http://localhost:${address.port}`);
  } catch (e) {
    console.log("Error starting server");
    console.log(e);
  }
});
