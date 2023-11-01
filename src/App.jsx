import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import ProfilePage from "../pages/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProfilePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
