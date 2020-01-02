import express from 'express';
import bodyParser from 'body-parser';
//import cors from './config/cors';
import cors from "cors"
import config_cors from './config/cors'
import router from './routes';

let app = express();

app.use(bodyParser.json());

app.use(cors(config_cors))

app.use(router)

 
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
})