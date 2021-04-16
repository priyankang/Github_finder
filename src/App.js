import SearchButton from "./Components/SearchButton";
import { Switch, Route } from "react-router-dom";
import Detail from './Components/Detail';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SearchButton} />
        <Route exact path="/detail" component={Detail} />
      </Switch>
    </div>
  );
}

export default App;
