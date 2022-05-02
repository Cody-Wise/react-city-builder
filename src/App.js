import { useState } from 'react';
import './App.css';
import SkylineDropdown from './SkylineDropdown';
import WaterfrontDropdown from './WaterfrontDropdown';
import CastleDropdown from './CastleDropdown';
import SloganList from './SloganList';
import SloganForm from './SloganForm';
import CityNameInput from './CityNameInput';
import City from './City';

function App() {
  // track some state here.
  const [skylineId, setskylineId] = useState(1);
  const [waterfrontId, setwaterfrontId] = useState(1);
  const [castleId, setcastleId] = useState(1);
  const [cityName, setcityName] = useState('Portland');
  const [slogans, setslogan] = useState(['The City of Excellence']);
  // You'll need to keep track of a skylineId, waterfrontId, and castleId. All these start out as 1
  // you'll need to track a city name, which starts as the city name of your choice.
  // finally, you'll need an array of slogans, which could start out as ['The City of Excellence'] for example
  // eslint-disable-next-line indent
  return (
    <div className="App">
      {/* here, the City component takes in skylineId, waterfrontId, castleId as props. It'll use those ids to render pictures correctly. */}
      <City skylineId={skylineId} waterfrontId={waterfrontId} castleId={castleId} />
      {/* dynamically update the city name here using state */}
      <h1>Welcome to beautiful {cityName}</h1>
      <div className="bottom">
        {/* here, the CityNameInput component takes in the setCityName state handler function */}
        <CityNameInput setcityName={setcityName} />
        <section className="dropdowns">
          {/* 
          render all three Dropdown components (WaterfrontDropdown, SkylineDropdown, CastleDropdown) here. 
          
          In each Dropdown, pass as props the state handler functions defined above, so that these child components can manipulate parent state 
          */}

          <CastleDropdown setcastleId={setcastleId} />
          <SkylineDropdown setskylineId={setskylineId} />
          <WaterfrontDropdown setwaterfrontId={setwaterfrontId} />
        </section>
        {/* here, the SloganForm component takes in the setSlogans state handler function and the slogans array that live in state */}
        <SloganForm setslogan={setslogan} slogans={slogans} />
        {/* here, the SloganList component takes the array of slogans that lives in state */}
        <SloganList slogans={slogans} />
      </div>
    </div>
  );
}

export default App;
