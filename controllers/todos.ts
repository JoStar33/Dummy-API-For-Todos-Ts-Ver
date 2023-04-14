import { RequestHandler } from 'express';
import Todo from '../models/todo';
import { GettedTodoBody } from '../types/todo';

const getTodos: RequestHandler = async (req, res, next) => {
  try {
    const todos = await Todo.findAll({});
    if(!todos) {
      res.status(200).json([]);
    }
    res.status(200).json(todos);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const postTodos: RequestHandler = async (req, res, next) => {
  const { todo }: GettedTodoBody = req.body;
  try {
    const newTodo = await Todo.create({
      title: todo.title,
      description: todo.description
    });
    res.status(200).json(newTodo);
  } catch (err) {
    next(err);
  }
}

const getTodosDetail: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findAll({
      where: { id: id },
    });
    res.status(200).json(todo);
  } catch (err) {
    console.error(err);
    next(err);
  }
}

export { getTodos, postTodos, getTodosDetail };

