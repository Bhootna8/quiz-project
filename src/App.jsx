import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/admin/add" element={<Admin/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
