import store from "./redux/store";
import Navigation from "./router/Navigation";
import "./style/main.css";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navigation />
      </div>
    </Provider>
  );
}

export default App;
