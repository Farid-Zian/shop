import { Outlet } from "react-router-dom";
import NavBar from "./components/nav-bar/nav-bar";
import { DecisionProvider } from "./components/contexts/roleConetext";

function App() {
  return (
    <DecisionProvider>
      <NavBar />
      <Outlet />
    </DecisionProvider>
  );
}
export default App;
