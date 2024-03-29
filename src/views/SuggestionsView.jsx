import { useNavigate} from "react-router-dom";
import TodoSugges from "../Components/TodoSugges";
import Layout from "../Components/Layout";
import './css/suggestionsView.css'
import { useSelector, useDispatch } from 'react-redux'
import { selectTodoList, addTodo } from '../store/reducer/todoSlice'

function SuggestionsView() {
    const dispatch = useDispatch();
    let navigate = useNavigate()

    let handleAddTodo = (todo) => {
        dispatch(addTodo(todo));
    }

    let suggesList = [
        { content: "Read", icon: "📖", background: "#FFEE93" },
        { content: "Study", icon: "✏️", background: "#ADF7B6" },
        { content: "Running", icon: "🏃‍️", background: "#FFC09F" },
        { content: "Cycling", icon: "🚴‍", background: "#BDE0FE" }
    ]
    return (
        <Layout>
            <h2>Suggestions</h2>
            {
                suggesList.map((todo, idx) => {
                    return (
                        <div style={{ display: 'flex', alignItems: 'center' }} key={idx} >
                            <TodoSugges content={todo.content} icon={todo.icon} background={todo.background} ></TodoSugges>
                            <button className='addButton' onClick={() => {handleAddTodo(todo)}}>
                                +
                            </button>
                        </div>
                    )
                })
            }
        </Layout>
    )
}

export default SuggestionsView