import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../header/header.css';

export default function Header({ date, setDate }) {



    return (
        <div className='header'>
            <h1>Covid-19 Report</h1>
            <DatePicker selected={date} onChange={(date) => setDate(date)} />
        </div>
    )
}