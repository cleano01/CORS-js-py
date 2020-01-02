import express from 'express';
import bodyParser from 'body-parser'
import cors from './config/cors'


let app = express();

app.use(cors.filters())


app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
})