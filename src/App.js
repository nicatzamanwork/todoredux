import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import TodoList from "./pages/TodoList";
import Todo from "./pages/Todo";

function App() {
  return (
    <div className="App">
      <nav>
        <ul className="Ul">
          <li>
            <Link to={"/"}>Todo</Link>
          </li>
          <li>
            <Link to={"/MytodoList"}>Todo List</Link>
          </li>
          <li>
            <Link to={"/MyAbout"}>About</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/MytodoList" element={<TodoList />} />
          <Route path="/MyAbout" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
