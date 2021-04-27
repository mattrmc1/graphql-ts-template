import { GraphQLObjectType, GraphQLString } from "graphql";

export const RootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    ExampleQuery: {
      type: GraphQLString,
      resolve: () => "Hooray"
    }

    // Queries go here...
  })
})