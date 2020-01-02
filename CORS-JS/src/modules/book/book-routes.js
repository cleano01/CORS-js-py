import express from 'express'
const bookRouter = express.Router()


bookRouter.route('/list').get((req, res)=>{
    res.send('--list of all books--');

})

export default bookRouter;

