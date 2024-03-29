import { useDispatch } from 'react-redux';
import './todo.css';
import { removeTodo } from '../store/reducer/todoSlice';

function Todo({ content, icon, background, id}) {
    const dispatch = useDispatch();

    let handleClearTodo = (id) => {
        dispatch(removeTodo(id))
    }

    return (
            <div className="div" style={{ backgroundColor: background }}>
                <div className="div-2">
                    <div className="div-3">{icon}</div>
                    <div className="div-4">{content}</div>
                </div>
                <input type="checkbox" onClick={() => handleClearTodo(id)} />
            </div>
    );
}

export default Todo