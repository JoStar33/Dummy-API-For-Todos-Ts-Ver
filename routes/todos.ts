import express from 'express';
import { getTodos, getTodosDetail, postTodos } from '../controllers/todos';
const router = express.Router();

router.get('/', getTodos);
router.post('/', postTodos);
router.get('/:id', getTodosDetail);

export default router;