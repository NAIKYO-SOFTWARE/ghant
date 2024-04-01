import "../../style/components/footer.css"
import { useNavigate } from "react-router-dom"

function Footer() {
    const navigate = useNavigate()
    const handleClickCalendar = () => {
        navigate("/calendar")
    }
    const handleClickChecklist = () => {
        navigate("/")
    }
    const handleClickUser = () => {
        navigate("/profile")
    }
    return (
        <div className="footer-container" >
            <img src="./icon/calendar.png" className="icon-footer" onClick={handleClickCalendar}></img>
            <img src="./icon/checklist.png" className="icon-footer" onClick={handleClickChecklist}></img>
            <img src="./icon/user.png" className="icon-footer" onClick={handleClickUser}></img>
        </div>
    )
}



export default Footer