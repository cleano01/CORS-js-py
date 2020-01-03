import express from 'express'
import request from 'request';

const bookRouter = express.Router()


bookRouter.route('/list').get((req, res)=>{

    res.send('--list of all books Node.js--');

});


bookRouter.route('/list_py').get( (req, res) => {
    
    request.get('http://localhost:8000/book_py',(erro, response, body)=>{
        res.send(body)

    }) 
})

export default bookRouter;
 
  