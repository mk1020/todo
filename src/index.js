import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "../src/redux/reduxStore";
import { Provider } from "react-redux";
import { DndProvider } from "react-dnd";
import Backend from 'react-dnd-html5-backend'


ReactDOM.render(
  <Provider store={store}>
    <DndProvider backend={Backend}>
    <App />
    </DndProvider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
