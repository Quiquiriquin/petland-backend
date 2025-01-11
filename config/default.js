const { join } = require("path");

module.exports = {
  schema: [join(__dirname, "../src/typeDefs/**/*.graphql")],
};
