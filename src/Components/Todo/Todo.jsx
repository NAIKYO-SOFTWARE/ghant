import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../../store/reducer/todoSlice';
import "../../style/components/todo.css";

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

Todo.propTypes = {
    content: PropTypes.string,
    icon: PropTypes.any,
    background: PropTypes.string,
    id: PropTypes.string
}

export default Todo