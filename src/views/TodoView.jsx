import { useNavigate } from 'react-router-dom';
import TodoSuggest from '../Components/Todo/TodoSuggest';

function TodoView() {
  let todoList = [
    { content: 'Read', icon: '📖', background: '#FFEE93' },
    { content: 'Study', icon: '✏️', background: '#ADF7B6' },
    { content: 'Running', icon: '🏃‍️', background: '#FFC09F' },
    { content: 'Cycling', icon: '🚴‍', background: '#BDE0FE' }
  ];
  let navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => {
          navigate('/');
        }}>
        Back
      </button>
      <h2>Suggestions</h2>
      {todoList.map((todo) => {
        return (
          <div style={{ display: 'flex', alignItems: 'center' }} key={todo.id}>
            <TodoSuggest
              content={todo.content}
              icon={todo.icon}
              background={todo.background}></TodoSuggest>
          </div>
        );
      })}
    </>
  );
}

export default TodoView;
