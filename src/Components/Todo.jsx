import './todo.css';

function Todo({ content, icon, background }) {
    let handleClearTodo = () => {
        
    }

    return (
        <>
            <div className="div" style={{ backgroundColor: background }}>
                <div className="div-2">
                    <div className="div-3">{icon}</div>
                    <div className="div-4">{content}</div>
                </div>
                <input type="checkbox" onClick={() => handleClearTodo} />
            </div>

        </>
    );
}

export default Todo