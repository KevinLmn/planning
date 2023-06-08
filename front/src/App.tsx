import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Looby from "./pages/Looby";
import ToDoList from "./pages/ToDoList";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Looby />}></Route>
          <Route path="/ToDoList" element={<ToDoList />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
