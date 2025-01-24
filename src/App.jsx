import Header from "./components/Header/Header";
import HeroComponent from "./components/Body/HeroComponent";
import { Dashboard } from "./components/Body/dashboard/Dashboard";
function App() {
  return (
    <>
      <Header />
      <HeroComponent currentUser={"Trust"} />
      <Dashboard />
    </>
  );
}

export default App;
