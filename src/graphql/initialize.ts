import { Application, Request, Response } from 'express'
import { graphqlHTTP } from 'express-graphql';
import { IncomingMessage } from 'http';
import { graphql, GraphQLSchema } from 'graphql';

import { RootQuery as query } from "../queries";
import { RootMutation as mutation } from "../mutations";

const schema: GraphQLSchema = new GraphQLSchema({ query, mutation })

export default (app: Application): void => {
  // DEV USE ONLY
  app.use('/graphql', graphqlHTTP((request: IncomingMessage) => {

    return ({
      schema,
      graphiql: true,
      context: {},
      rootValue: { req: <Request>request }
    })
  })
  )

  app.post('/gql', (req: Request, res: Response) => {

    const { query, variables = {} }: any = req.body;
    const context: any = { };

    graphql(schema, query, { req }, context, variables )
      .then (data => res.json(data))
      .catch(err => res.json(err))
  })
}