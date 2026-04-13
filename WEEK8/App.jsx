import React from "react";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import Timer from "./components/Timer";
import Password from "./components/Password";
import Parent from "./components/Props/Parent";
import Counter from "./components/Counter";
import StudentTable from "./components/Pagination";
function App() {
  return (
    <div>
      <BrowserRouter>
      <nav>
        <Link to="/home" >Home</Link>|{" "}
        <Link to="/timer">Timer</Link>|{" "}
        <Link to="/password">Password </Link>|{" "}
        <Link to="/props">PropsStudentDetails</Link>|{" "}
        <Link to="/counter">Counter</Link>|{" "}
        <Link to="/pagination">Pagination</Link>
      </nav>
      <Routes>
        <Route path="/home" element={<h1>This is Home Page</h1>} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/password" element={<Password />} />
        <Route path="/props" element={<Parent />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/pagination" element={<StudentTable />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;