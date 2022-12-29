import { atom } from 'recoil';
import Todo  from '../models/todo';

export const todoListState = atom<Todo[]>({
  key: "todoListState",
  default: [],
});
