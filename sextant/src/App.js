import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import Exhibit from './Components/Exhibit/Exhibit';
import AddressDisplay from './Components/AddressDisplay';

function App(){
return (
    <div className="App">
        <Banner/>
        <Exhibit name="Public IPv4 Address">
          <AddressDisplay url='https://api.ipify.org?format=json' />
        </Exhibit>
        <Exhibit name="Public IPv6 Address">
          <AddressDisplay url='https://api64.ipify.org?format=json' />
        </Exhibit>
    </div>
);
}
export default App;
