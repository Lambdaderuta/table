import React from "react";
import { Provider } from "react-redux";
import store from "./Store/store";
import Container from "./Containers/Container";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Container />
      </div>
    </Provider>
  );
}

export default App;
