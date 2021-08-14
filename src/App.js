import { useState, useEffect } from 'react';
import { Country, State, City } from 'country-state-city';
import './App.css';
import Header from './components/header/header';
import Leftbar from './components/leftbar/leftbar';
import Maincomp from './components/maincomp/maincomp';



function App() {

  let states = State.getStatesOfCountry('IN');

  const [date, setDate] = useState(new Date());
  const [state, setState] = useState(states);
  const [count, setCount] = useState(0);





  return (
    <div className="App">
      <Header date={date} setDate={setDate} />
      <div className='flex-container'>
        <Leftbar count={count} setCount={setCount} states={states} state={state} setState={setState} />
        <Maincomp count={count} date={date} state={state} />
      </div>

    </div>
  );
}

export default App;
