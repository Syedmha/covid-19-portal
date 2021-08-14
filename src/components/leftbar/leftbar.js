import { Country, State, City } from 'country-state-city';
import '../leftbar/leftbar.css';
import { useEffect } from 'react';



export default function Leftbar({ count, setCount, state, setState }) {

    // console.log(state)

    // useEffect(() => {
    //     setState(
    //         states.map(d => {
    //             return {
    //                 isChecked: "false",
    //                 countryCode: d.countryCode,
    //                 isoCode: d.isoCode,
    //                 latitude: d.latitude,
    //                 longitude: d.longitude,
    //                 name: d.name
    //             }
    //         })
    //     )
    // }, [])



    const handleChecked = (e) => {
        const { name, checked } = e.target;
        if (name === "allSelect") {
            let tempState = state.map((item) => {
                return { ...item, isChecked: checked };
            });
            setState(tempState);
            setCount(29);
        } else {
            let tempState = state.map((item) =>
                item.name === name ? { ...item, isChecked: checked } : item
            );
            setState(tempState);
            tempState.forEach(item => {
                for (let i = 0; i < item.length; i++) {

                }
            })

        }
    };



    return (
        <div className='leftbar'>
            <form className="form">
                <h1>States</h1>
                <input
                    type="checkbox"
                    name="allSelect"
                    // checked={
                    //   users.filter((user) => user?.isChecked !== true).length < 1
                    // }
                    checked={!state.some((item) => item?.isChecked !== true)}
                    onChange={handleChecked}
                />
                <label>Select All</label>
                {state.map((item) => (
                    <div>
                        <input
                            type="checkbox"
                            name={item.name}
                            checked={item?.isChecked || false}
                            onChange={handleChecked}
                        />
                        <label>{item.isoCode}</label>
                    </div>
                ))}
            </form>

            {/* // states.map(item => 
                //     return (
                        // <div key={item.isoCode}>
                        //     <input type='checkbox' value={item} onChange={handleChecked} />
                        //     <span>{item.isoCode}</span>
                        // </div>
                        
                //     )
                // ) */}



        </div >
    )
}