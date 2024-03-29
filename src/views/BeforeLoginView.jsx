import Button from "../Components/Button/Button"
import { Link, useNavigate } from 'react-router-dom'
import "./css/beforeLoginView.css"

function BeforeLoginView() {
    let navigate = useNavigate()
    return (
        <div>
            <h1 className="h1-before-login">Do your </h1>
            <h1 className="h1-before-login">tasks </h1>
            <h1 className="h1-before-login">quickly </h1>
            <h1 className="h1-before-login">and easy</h1>
            <p>Your tasks, your rules, our support</p>
            <Button text="Login" onClick={() => {
                navigate("/login")
            }}></Button>
            <br />
            <Link to={"/test"} className="link-create-account">Create an account</Link>
        </div>
    )
}

export default BeforeLoginView