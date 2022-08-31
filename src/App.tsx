import "./App.css";
import Register from "./components/RegisterForm";
import UserProvider from "./contexts/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <Register />
      </UserProvider>
    </>
  );
}
// import { Route, Routes } from "react-router-dom";
// import "./App.css";
// import UserProvider from "./contexts/UserContext";
// import Login from "./pages/Login"
// import Global from "./styles/global";
// import Dashboard from "./pages/Dashboard";

// function App() {
//   return (
//     <div className="App">
//       <UserProvider>
//         <Global />
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//         </Routes>
//       </UserProvider>
//     </div>

//   );
// }

export default App;
