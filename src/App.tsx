import "./App.css";

import MainRoutes from "./routes";
import Global from "./styles/global";

function App() {
  return (
    <>
      <div className="App">
        <Global />
        <MainRoutes />
      </div>
    </>
  );
}

// import { Route, Routes } from "react-router-dom";

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
