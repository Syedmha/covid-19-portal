import '../maincomp/maincomp.css';
import { fetchData } from './api/api';


export default function Maincomp() {

    useEffect(async () => {
        const data = await fetchData().then((res) => res.json())
            .then((data) => {
                console.log(data);
            });;

    }, [])
    return (
        <div>

        </div>
    )
}