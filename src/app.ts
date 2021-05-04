import express, { Application } from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';

import routes from './routes';
import gqlInit from './graphql/initialize';
import example from './middleware/example';

const app: Application = express();

// Boilerplate
app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));


// Backdoor for testing...
const corsOptions: any = {
  origin: 'http://localhost',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));


// Middleware goes here...
app.use(example);

// Routes
app.use('/', routes);

// Initialize GraphQL
gqlInit(app);

export default app;
