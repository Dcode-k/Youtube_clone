import "remixicon/fonts/remixicon.css";
import "./App.css";
import Header from "./components/Header.jsx";
import Body from "./components/Body";
import { useDispatch, useSelector } from "react-redux";
import { SidebarModal } from "./components/Sidebar";
import { closeSidebarModal } from "./utils/appslice";

function App() {
  const isSidebarModal = useSelector((store) => store.app.isSidebarModal);

  return (
    <div>
      <Header />
      {isSidebarModal && <SidebarModal />}
      <Body />
    </div>
  );
}

export default App;
