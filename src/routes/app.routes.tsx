import { Route, Routes } from "react-router-dom";
import Cmmd from "../Pages/Cmmd";

export function AppRoutes() {
  return (
    <Routes>
        <Route path="/cmmd" element={<Cmmd activeLink={""}/>} />
        <Route path="/cmmd/reports" element={<Cmmd activeLink={"reports"}/>}/>
    </Routes>
  );
}
