import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import HooksIceCreamContainer from "./components/HooksIceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UsersList from "./components/UsersList";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <UsersList />
      <ItemContainer cake />
      <ItemContainer />
      <CakeContainer />
      <HooksCakeContainer />
      <IceCreamContainer />
      <HooksIceCreamContainer />
      <NewCakeContainer />
    </Provider>
  );
}

export default App;
