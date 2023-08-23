import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: "http://45.91.94.21/graphql",
  documents: ['src/**/*.ts'],
  generates: {
    './src/__generated__/': {
      preset: 'client',
      plugins: ['typescript', 'typescript-operations'],
      presetConfig: {
        gqlTagName: 'gql',
      }
    }
  },
  ignoreNoDocuments: true,
};

export default config;