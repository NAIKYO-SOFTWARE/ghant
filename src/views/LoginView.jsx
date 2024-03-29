import Button from "../Components/Button/Button"
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import "./css/beforeLoginView.css"
import { useSelector, useDispatch } from 'react-redux'
import { selectTask, addUser } from '../store/reducer/userSlice'
import "./css/login.css"

function LoginView() {
    const taskData = useSelector(selectTask);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [user, setUser] = useState("");

    return (
        <div>
            <h3>Log in to HabitHUB</h3>
            <p>Welcome back! Sign in using your social account or email to continue us</p>
            <input type="text" id="fname" className="input-login"  onChange={(e) => {
                setUser(e.target.value)
            }}/><br></br>
            <input type="password" id="fpass" className="input-login" /><br></br>
            <Button text={"Login"} onClick={() => {
                let inputUser = document.getElementById("fname").value
                let inputPass = document.getElementById("fpass").value
                if (inputUser && inputPass) {
                    dispatch(addUser(user));
                    navigate("/");
                } else {
                    alert("Please fill in both username and password fields.");
                }
            }}></Button>
        </div>
    )
}

export default LoginView