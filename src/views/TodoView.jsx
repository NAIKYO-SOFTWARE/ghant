import TodoSugges from "../Components/TodoSugges"
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";

function TodoView() {
    let todoList = [{ content: "Read", icon: "📖", background: "#FFEE93" },
    { content: "Study", icon: "✏️", background: "#ADF7B6" },
    { content: "Running", icon: "🏃‍️", background: "#FFC09F" },
    { content: "Cycling", icon: "🚴‍", background: "#BDE0FE" }]
    let navigate = useNavigate()
    
    return (
        <>
            <button onClick={() => {
                navigate("/")
            }}>Back</button>
            <h2>Suggestions</h2>
            {
                todoList.map((todo) => {
                    return (
                        <div style={{ display: 'flex', alignItems: 'center' }}  >
                            <TodoSugges content={todo.content} icon={todo.icon} background={todo.background} ></TodoSugges>
                        </div>
                    )
                })
            }
        </>
    )
}

export default TodoView