import ITodos from '../models/todo';

declare global {
  interface Error {
    status?: number;
  }

  namespace Express {
    interface Todos extends ITodos{}
  }
}