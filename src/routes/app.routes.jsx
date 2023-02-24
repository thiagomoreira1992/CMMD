import { Route, Routes } from "react-router-dom";
import Cmmd from "../Pages/Cmmd";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/cmmd" element={<Cmmd/>} />
      <Route path="/cmmd/reports" element={<Cmmd activeLink={"reports"} />} />
      <Route path="/cmmd/register" element={<Cmmd activeLink={"register"} />} />
      <Route path="/cmmd/move" element={<Cmmd activeLink={"move"} />} />
      <Route path="/cmmd/search" element={<Cmmd activeLink={"search"} />} />
    </Routes>
  );
}
