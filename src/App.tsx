<<<<<<< HEAD
import "./App.css";
import Register from "./components/RegisterForm";

function App() {
  return (
    <>
      <Register />
    </>
=======
import { Route, Routes } from "react-router-dom";
import "./App.css";
import UserProvider from "./contexts/UserContext";
import Login from "./pages/Login"
import Global from "./styles/global";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Global />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </UserProvider>
    </div>
>>>>>>> 3adce4f5e058a81052886db651cf8197503103ef
  );
}

export default App;
