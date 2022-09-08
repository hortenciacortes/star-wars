import { Home } from "./pages/Home";
import { DetailsStarships } from "./pages/DetailsStarships";
import { GlobalStorage } from "./GlobalContext";

function App() {
  const url = window.location.pathname;

  if(url === '/') {
    return (
      <GlobalStorage>
        <Home />
      </GlobalStorage>
    )
  } else if(url === '/details') {
    return <DetailsStarships />
  }
}

export default App;
