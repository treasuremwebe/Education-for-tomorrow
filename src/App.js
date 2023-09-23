import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Innovations from "./Innovations";
import Profile from "./Profile";
import Messages from "./Messages";
import Menu from "./components/Menu"


function App() {
  return(
    <>
    <Menu /> 
    
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="innovations" element={<Innovations />} /> 
      <Route path="profile" element={<Profile />} />
      <Route path="messages" element={<Messages />} />
     </Routes>
    </BrowserRouter>
    </>
  )

}

export default App;
