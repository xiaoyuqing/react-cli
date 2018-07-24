import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/home";

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <div>
        <p>React here!</p>
      </div>
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
        </div>
      </Router>
    </div>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));