import React from "react";
import ReactDOM from "react-dom/client";
import MainPage from "./pages/main-page";
import ReponsiveProvider from "./context/responsive-context";
import allReducers from "./redux/reducers";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(
  allReducers,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <ReponsiveProvider>
      <MainPage />
    </ReponsiveProvider>
  </Provider>
);

export type RootSelector = ReturnType<typeof store.getState>;
