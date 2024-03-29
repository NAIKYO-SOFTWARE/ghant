import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from '../Home'
import TodoView from '../views/TodoView'
import Calendar from '../Components/Calendar'
import BeforeLoginView from '../views/BeforeLoginView'
import LoginView from '../views/LoginView'
import { selectTask } from '../store/reducer/userSlice'
import { useSelector } from 'react-redux'
import Profile from '../views/ProfileView'
import SuggestionsView from '../views/SuggestionsView'

function App() {
  const { userInfo } = useSelector(selectTask);

  return (
    <BrowserRouter>
      {!userInfo ? <UnAuthenticated /> : <Authenticated />}
    </BrowserRouter>
  )
}

const Authenticated = () => {
  return (
    <Routes>
      <Route path="*"
        element={
          <Navigate to="/" replace state={{ from: location.pathname }} />
        }
      />
      <Route path='/' element={<Home />}></Route>
      <Route path='/checklist' element={<TodoView />}></Route>
      <Route path='/profile' element={<Profile />}></Route>
      <Route path='/suggestions' element={<SuggestionsView />}></Route>
      <Route path='/calendar' element={<Calendar />}></Route>
      <Route path='*' element={<></>}></Route>
    </Routes>
  )
}

const UnAuthenticated = () => {
  return (
    <Routes>
      <Route path="*"
        element={
          <Navigate to="/introduce" replace state={{ from: location.pathname }} />
        }
      />
      <Route path='/introduce' element={<BeforeLoginView />}></Route>
      <Route path='/login' element={<LoginView></LoginView>}></Route>
    </Routes>
  )
}

export default App
