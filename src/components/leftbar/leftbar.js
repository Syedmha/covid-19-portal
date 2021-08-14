import { Country, State, City } from 'country-state-city';
import '../leftbar/leftbar.css';
import { useEffect } from 'react';


export default function Leftbar({ states, state, setState }) {

    // console.log(state)

    useEffect(() => {
        setState(
            state.map(d => {
                return {
                    checked: "false",
                    countryCode: d.countryCode,
                    isoCode: d.isoCode,
                    latitude: d.latitude,
                    longitude: d.longitude,
                    name: d.name
                }
            })
        )
    }, [])


    function handleAllChecked(e) {
        console.log(e.target.value);
    }

    function handleChecked(e) {
        let check = e.target.value.checked;
        if (check == false) {

        }

    }

    return (
        <div>
            <h1>States</h1>
            <input
                type="checkbox"
                value={states}
                onClick={handleAllChecked}
                value="checkedall"
            />Check / Uncheck All
            {
                states.map(name => (
                    <div key={name.isoCode}>
                        <input type='checkbox' value={name} onChange={handleChecked} />
                        <span>{name.isoCode}</span>
                    </div>
                ))
            }

        </div>
    )
}