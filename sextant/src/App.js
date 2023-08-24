import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import Exhibit from './Components/Exhibit/Exhibit';

function App(){
return (
    <div className="App">
        <Banner/>
        <Exhibit name="I'm the exhibit!"></Exhibit>
        <Exhibit name="I'm another exhibit!"></Exhibit>
        <Exhibit name="I'm an exhibit too!"></Exhibit>
        <Exhibit name="Don't forget about me, I'm an exhibit too!"></Exhibit>
    </div>
);
}
export default App;
