import "./App.css";

import Hello from "./Hello";
import HelloWithProps from "./HelloWithProps";
import Counter from "./Counter";
import InputTracker from "./InputTracker";
import LoginStatus from "./LoginStatus";
import TodoList from "./TodoList";
import LoginForm from "./LoginForm";

function App() {
  const todos = ["Zadanie 1", "Zadanie 2", "Zadanie 3"];

  return (
    <div className="App">
      <h2>Ćwiczenie 1</h2>
      <Hello />

      <hr />

      <h2>Ćwiczenie 2</h2>
      <HelloWithProps name="Anna" />
      <HelloWithProps name="Bartek" />
      <HelloWithProps name="Celina" />

      <hr />

      <h2>Ćwiczenie 3</h2>
      <Counter />

      <hr />

      <h2>Ćwiczenie 4</h2>
      <InputTracker />

      <hr />

      <h2>Ćwiczenie 5</h2>
      <LoginStatus isLoggedIn={true} />
      <LoginStatus isLoggedIn={false} />

      <hr />

      <h2>Ćwiczenie 6</h2>
      <TodoList todos={todos} />

      <hr />

      <h2>Ćwiczenie 7</h2>
      <LoginForm />
    </div>
  );
}

export default App;
