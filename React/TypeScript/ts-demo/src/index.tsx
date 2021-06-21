import ReactDOM from "react-dom";
import GuestList from "./state/GuestList";
import UserSearch from "./refs/UserSearch";

const App = () => {
   return (
      <div>
         <GuestList />
         <UserSearch />
      </div>
   );
};

ReactDOM.render(<App />, document.querySelector("#root"));