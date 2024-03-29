import { Fragment, useState } from 'react'
import './home.css'
import { useNavigate } from 'react-router-dom'
import Todo from './Components/Todo'
import Header from './Components/Footer_Header/Header'
import Layout from './Components/Layout'
import { selectTodoList } from './store/reducer/todoSlice'
import { useSelector } from 'react-redux'

function Home() {
  const navigate = useNavigate();
  const todoListData = useSelector(selectTodoList);

  let handleClickAddChecklist = () => {
    navigate('/suggestions')
  }

  return (
    <Layout>
      <Header></Header>
      <div className="card">
        <div className='todo-list'>
          {todoListData.todoList[0] == null ? (
            <div>No todo</div>
          ) : (todoListData.todoList.map((todo) => {
            return <Todo {...todo} key={todo.id}></Todo>
          }))}

        </div>
        <button className='btn-add-checklist' onClick={handleClickAddChecklist}>+</button>
      </div>
    </Layout>
  )
}

export default Home
