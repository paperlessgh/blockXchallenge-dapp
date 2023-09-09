import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "./schema.graphql",
  // documents: "src/**/*.tsx",
  generates: {
    "src/common/types/graphql.tsx": {
      // preset: "client",
      plugins: [
        "typescript",
      //   "typescript-operations",
      //   "typescript-react-apollo",
      //   "typescript-resolvers",
      ],
    },
    // "./graphql.schema.json": {
    //   plugins: ["introspection"],
    // },
  },
};

export default config;