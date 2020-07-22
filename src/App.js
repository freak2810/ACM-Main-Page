import React from 'react';
import { eventData } from "./components/eventsPage/Events_DummyData"
import Events from "./components/eventsPage/Events";


function App () {
  return (
    <Events { ...eventData } />
  );
}

export default App;
