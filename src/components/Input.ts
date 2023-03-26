import { addEvent } from '../core/Render';
import { newTodoData } from '../hooks/useTodoItem';

interface IInput {
  id?: string,
  type: string,
  className?: string,
  value?: string,
  autofoucs?: boolean,
  data?: string,
  checked?: string,
}

export default function Input({ type, className, placeholder, autofoucs, data, checked, value }: IInput) {

  addEvent(".new-todo", 'keypress', (keyboard: KeyboardEvent) => {
    newTodoData(keyboard.key);
  });

  return `
    <input
      type="${type}"
      ${className ? `class="${className}"` : ''}
      ${placeholder ? `placeholder="${placeholder}"` : ''}
      ${data ? `data-id="${data}"` : ''}
      ${autofoucs ? 'autofoucs' : ''}
      ${checked ? `${checked}` : ''}
      ${value ? `value="${value}"` : ''}
      />
  `;
}