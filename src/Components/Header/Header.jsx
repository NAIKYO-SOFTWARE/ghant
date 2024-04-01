import Calendar from "../Calendar/Calendar"
import "../../style/components/header.css"

function Header() {
    let date = new Date()
    let startOfWeek = (new Date(date));
    let endOfWeek = new Date();
    startOfWeek.setDate(date.getDate() - date.getDay());
    if (date.getMonth() > startOfWeek.getMonth()) {
        endOfWeek.setDate(startOfWeek.getDate() + 6);
        endOfWeek.setMonth(date.getMonth());
    } else {
        endOfWeek.setDate(startOfWeek.getDate() + 6);
    }
    console.log("date: ", date);
    console.log("startOfWeek: ", startOfWeek);
    console.log("endOfWeek: ", endOfWeek);
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