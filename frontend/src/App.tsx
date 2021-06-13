import "moment/locale/pt-br";
import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/lib/integration/react";
import "./App.css";
import { Header } from "./Components/Header/Index";
import Rotas from "./Router/Rotas";
import { persistor, store } from "./Store";


function App() {
  return (
    <>
      <ToastContainer />
      <section className="app-main">
        <Provider store={store}>
          <Header />
          <section className="app-router">
            <PersistGate loading={<h1>carregando</h1>} persistor={persistor}>
              <Rotas />
            </PersistGate>
          </section>
        </Provider>
      </section>
    </>
  );
}

export default App;
