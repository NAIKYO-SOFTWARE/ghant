import Calendar from "../Calendar"
import './css/header.css'

function Header() {
    let date = new Date()
    let startOfWeek = (new Date(date));
    let endOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay());
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let calen = [];
    while (startOfWeek <= endOfWeek) {
        calen.push(new Date(startOfWeek))
        startOfWeek.setDate(startOfWeek.getDate() + 1);
    }
    return (
        <div className="days-of-week">
            {calen.map((date) => (
                <Calendar date={date.getDate()} day={daysOfWeek[date.getDay()]} key={date.getTime()} />
            ))}
        </div>
    );
}

export default Header