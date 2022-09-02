import { Route, Routes } from "react-router-dom";
import "./App.css";
import UserProvider from "./contexts/UserContext";
import Login from "./pages/Login"
import Global from "./styles/global";
import Dashboard from "./pages/Dashboard";
import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Global />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
