import React from "react";
import Blogs from "./Blogs";
import {Provider as ReduxProvider} from "react-redux";
import configureStore from "../Redux/store";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

function App() {

  return (
    <ReduxProvider store={reduxStore}>
      <div className="App">
        <Blogs/>
      </div>
    </ReduxProvider>
  )

}

export default App
