import "./styles/App.scss";

//Components
import Header from "./Header";
import CardBoard from "../pages/CardBoard";
function App() {
  return (
    <div className="app">
      <Header />
      <CardBoard/>
    </div>
  );
}

export default App;
