import { useMediaQuery } from "react-responsive";
import PCView from "./components/PCView";
import MobileView from "./components/MobileView";
import { ContextProvider } from "./DropdownState";

const App = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  if (isMobile)
    return (
      <ContextProvider>
        <MobileView />
      </ContextProvider>
    );
  return <PCView />;
};

export default App;
