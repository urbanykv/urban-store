import WaitScreen from "./components/waitScreen/waitScreen";
import Store from "./pages/store/store";
import { AppContainer } from "./styles/global";

function App() {
  return (
    <AppContainer>
      <WaitScreen />
      <Store />
    </AppContainer>
  );
}

export default App;
