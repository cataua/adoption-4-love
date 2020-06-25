import express from "express";
import bodyParser from "body-parser";
import routes from "./routes";
import { Model } from "objection";
import connection from "./database/connection";

const app = express();
const port = 3001;

const logger = (
  request: express.Request,
  response: express.Response,
  next: express.NextFunction
) => {
  console.log(
    `LOGGER: ${request.method} - ${request.path} (${response.statusCode})`
  );
  next();
};
app.use(logger);
app.use(bodyParser.json());
app.use(routes);

app.listen(port, () => {
  console.log(`🚀 App listening on port ${port}`);
});

Model.knex(connection);

export default app;
