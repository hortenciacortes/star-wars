import { Home } from "./pages/Home";
import { DetailsStarships } from "./pages/DetailsStarships";

function App() {
  const url = window.location.pathname;

  if(url === '/') {
    return <Home />
  } else if(url === '/details') {
    return <DetailsStarships />
  }
}

export default App;
