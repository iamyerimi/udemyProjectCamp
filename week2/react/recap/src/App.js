import ToggleTimer from "./components/ToggleTimer";
import CharCount from "./components/CharCount";
import Count from "./components/Count";
import Timer from "./components/Timer";
import CountReducer from "./components/CountReducer";
import ThemeSwitcher from "./components/ThemeReducer";

function App() {
  return (
    <div className="App">
      <h1>Component Lifecycle의 이해</h1>
      <Count />
      <Timer />
      <CharCount />
      <ToggleTimer />
      <CountReducer />
      <ThemeSwitcher />
    </div>
  );
}

export default App;
