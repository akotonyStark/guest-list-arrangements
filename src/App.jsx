import { useState } from 'react'

import './App.css'

import { TASKS } from './data';
import GuestList from './GuestList';

function App() {

  return (
    <div className="App">
      <GuestList guests={TASKS} />
    </div>
  );
}

export default App
