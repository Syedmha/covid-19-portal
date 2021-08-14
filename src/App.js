import { useState, useEffect } from 'react';
import { Country, State, City } from 'country-state-city';
import './App.css';
import Header from './components/header/header';
import Leftbar from './components/leftbar/leftbar';
import Maincomp from './components/maincomp/maincomp';
import { fetchData } from './api/api';


function App() {
  let states = State.getStatesOfCountry('IN');

  const [date, setDate] = useState(new Date());
  const [state, setState] = useState(states);

  useEffect(async () => {
    const data = await fetchData().then((res) => res.json())
      .then((data) => {
        console.log(data);
      });;

  }, [])


  return (
    <div className="App">
      <Header date={date} setDate={setDate} />
      <Leftbar states={states} state={state} setState={setState} />
      <Maincomp />
    </div>
  );
}

export default App;
