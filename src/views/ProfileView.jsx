import Button from "../Components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { removeUser } from '../store/reducer/userSlice'
import Layout from "../Components/Layout";

function Profile() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    return (
        <Layout>
            <Button text="Log out" onClick={() => {
            localStorage.removeItem("userInfo")
            dispatch(removeUser());
            navigate("/introduce")
        }} />
        </Layout>
        
    )
}

export default Profile