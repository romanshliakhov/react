import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import './App.css';
import { HomeRouter } from "./containers/HomeRouter";
import { store } from "./rdx";

function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <BrowserRouter>
                <HomeRouter/>
            </BrowserRouter>
        </Provider>
    </div>
  );
}

export default App;
