import React from 'react';
import { eventData } from "./components/eventsPage/Events_DummyData"
import Events from "./components/eventsPage/Events";
import About from "./components/aboutPage/About";

function App () {
  return (
    <Events { ...eventData } />
  );
}

export default App;
