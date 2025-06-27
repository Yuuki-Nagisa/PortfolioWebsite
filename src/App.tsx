import { useMediaQuery } from "react-responsive";
import PCView from "./components/PCView";
import MobileView from "./components/MobileView";

const App = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  if (isMobile) return <MobileView />;
  return <PCView />;
};

export default App;
