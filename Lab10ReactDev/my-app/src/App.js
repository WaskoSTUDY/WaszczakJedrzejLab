import "./App.css";

import ClickCounter from "./ClickCounter";
import PrimeCalculator from "./PrimeCalculator";
import FormReducer from "./FormReducer";
import { ThemeProvider } from "./ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";
import LayoutEffectExample from "./LayoutEffectExample";

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Lab10 – React Hooki</h1>

      <h2>Ćwiczenie 1: useRef</h2>
      <ClickCounter />

      <hr />

      <h2>Ćwiczenie 2: useMemo</h2>
      <PrimeCalculator />

      <hr />

      <h2>Ćwiczenie 3: useReducer</h2>
      <FormReducer />

      <hr />

      <h2>Ćwiczenie 4: useContext + createContext</h2>
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>

      <hr />

      <h2>Ćwiczenie 5: useLayoutEffect</h2>
      <LayoutEffectExample />
    </div>
  );
}
