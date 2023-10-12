import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import ProfilePage from "../pages/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<ProfilePage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
