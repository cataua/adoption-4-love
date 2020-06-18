import express from 'express'
import bodyParser from 'body-parser';

import routes from './routes/routes';

const app = express();

app.use(bodyParser.urlencoded({
    extended: false,
}));
app.use(bodyParser.json());
app.set('port', 5001);
app.use(routes);

app.listen(app.get('port'), () => {
    console.info(`🚀 Server listening on port ${app.get('port')}`);
})

export default app;