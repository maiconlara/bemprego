import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HeaderLayout from "./HeaderLayout";
import Candidates from "@/pages/candidates";
import Error from "../pages/error";
import Home from "../pages/landing-page";

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route element={<HeaderLayout />}>
          <Route element={<Home />} path="/" />
          <Route element={<Candidates />} path="/candidates" />
          <Route element={<Error />} path="*" />
        </Route>
      </Routes>
    </Router>
  );
};
export default Root;