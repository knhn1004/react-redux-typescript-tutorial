import { FetchTodosAction, DeleteTodoAction } from './todos.actions';

export enum ActionTypes {
  fetchTodos,
  deleteTodo,
}

export type TodoActions = FetchTodosAction | DeleteTodoAction;
