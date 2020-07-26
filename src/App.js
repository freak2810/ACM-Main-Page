import React from 'react';
import { teamData } from "./components/teamPage/Team_DummyData"
import Team from "./components/teamPage/Team";

function App () {
  return (
    <Team teamList={ teamData } />
  );
}

export default App;
