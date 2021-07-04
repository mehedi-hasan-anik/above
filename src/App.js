import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Home } from "./page";
import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState } from "react";
export const userContext = createContext();

function App() {
  const [photoItems, setPhotoItems] = useState([]);
  return (
    <userContext.Provider value={[photoItems, setPhotoItems]}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </userContext.Provider>
  );
}

export default App;
