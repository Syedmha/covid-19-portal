import '../maincomp/maincomp.css';
import { fetchData } from './../../api/api';
import { useState, useEffect } from 'react';



export default function Maincomp({ count }) {

    // useEffect(async () => {
    //     const data = await fetchData().then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //         });;

    // }, [])

    return (
        <div className='main'>
            <div className='inner'>
                <h3>Selected States</h3>
                <p>{count}</p>
                <h3>Tested</h3>
                <h3>Confirmed</h3>
                <h3>Recovered</h3>
            </div>




        </div>
    )
}