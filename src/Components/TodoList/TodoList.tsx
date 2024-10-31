import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoItem } from '../TodoItem';

interface Props {
  todos: Todo[];
  tempTodo: Todo | null;
  loadingTodos: number[];
}

export const TodoList: React.FC<Props> = ({ todos, tempTodo, loadingTodos }) => {
  return (
    <section className="todoapp__main" data-cy="TodoList">
      {todos.map(todo => (
        <TodoItem 
        key={todo.id} 
        todo={todo} 
        loaderActive={loadingTodos.includes(todo.id)} />
      ))}
      {tempTodo && <TodoItem todo={tempTodo} loaderActive />}
    </section>
  );
};
