import bookRoutes from './modules/book/book-routes';
import express from 'express';
let router = express.Router();

router.use('/api/book', bookRoutes);

export default router;
