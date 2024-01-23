import { Provider } from "react-redux";
import AppRouter from "./router/AppRouter";
import store, { persistor } from "./app/store";
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter />
        </PersistGate>
      </Provider>
      <ToastContainer />
    </>
  );
}

export default App;
