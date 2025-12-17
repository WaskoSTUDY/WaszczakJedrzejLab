// src/App.js
import "./App.css";

import ToggleDetails from "./ToggleDetails";
import ScoreDisplay from "./ScoreDisplay";
import TaskList from "./TaskList";
import UserList from "./UserList";
import TimerCounter from "./TimerCounter";

function App() {
  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>Lab 6 (u Ciebie: Lab9) – React</h1>

      <hr />
      <h2>Ćwiczenie 1: Warunkowe renderowanie</h2>
      <ToggleDetails />

      <hr />
      <h2>Ćwiczenie 2: ScoreDisplay</h2>
      <ScoreDisplay score={30} />
      <ScoreDisplay score={65} />
      <ScoreDisplay score={95} />

      <hr />
      <h2>Ćwiczenie 3: Lista + filtrowanie</h2>
      <TaskList />

      <hr />
      <h2>Ćwiczenie 4: useEffect + API</h2>
      <UserList />

      <hr />
      <h2>Ćwiczenie 5: TimerCounter</h2>
      <TimerCounter />
    </div>
  );
}

export default App;
