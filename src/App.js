import React from 'react'
import NavBar from './components/NavBar/NavBar';
import './App.css'
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import {originals, action} from './urls';


function App() {
  return (
  <>
    <NavBar/>
    <Banner/>
    <RowPost url={originals} title={'Netflix Originals'} />
    <RowPost url={action} title={'Action'} isSmall/>
  </>
  )
}

export default App;


