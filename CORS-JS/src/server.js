import express from 'express';
import bodyParser from 'body-parser';
import cors from './config/cors';
import routes from './routes';


let app = express();

app.use(cors.filters());

app.use(bodyParser.json());

app.use(routes);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
})