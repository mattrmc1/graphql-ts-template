import { GraphQLObjectType, GraphQLString } from "graphql";

export const RootMutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    ExampleMutation: {
      type: GraphQLString,
      resolve: () => "Hooray"
    }

    // Mutations go here...
  })
})