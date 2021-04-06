import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

export interface DeleteTodoAction {
  type: ActionTypes.deleteTodo;
  payload: number; // id of Todo
}

const url = 'http://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => async (dispatch: Dispatch) => {
  const res = await axios.get<Todo[]>(url);
  dispatch<FetchTodosAction>({
    type: ActionTypes.fetchTodos,
    payload: res.data,
  });
};

export const deleteTodo = (id: number): DeleteTodoAction => ({
  type: ActionTypes.deleteTodo,
  payload: id,
});
