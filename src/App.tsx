import Button, { Sizes, Themes } from "./components/buttons";

function App() {
  return (
    <div className="App">
      <Button size={Sizes.small} theme={Themes.tertiary} text="test" disabled= {false} fullWidth={true}></Button>
    </div>
  );
}

export default App;