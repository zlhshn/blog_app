import { Provider } from "react-redux";
import AppRouter from "./router/AppRouter";
import store from "./app/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  );
}

export default App;
