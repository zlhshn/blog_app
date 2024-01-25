import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import NewBlog from "../pages/NewBlog";
import Home from "../pages/Home";
import About from "../pages/About";
import PrivateRouter from "./PrivateRouter";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import MyBlog from "../pages/MyBlog";
import Profile from "../pages/Profile";
import ScrollToTop from "../components/ScroolToTop";
import Detail from "../pages/Detail";
import { useState } from "react";

const AppRouter = () => {
  const [showButton, setShowButton] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Dashboard />}>
          <Route
            index
            element={
              <Home setShowButton={setShowButton} showButton={showButton} />
            }
          />
          <Route path="about" element={<About />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="" element={<PrivateRouter />}>
            <Route path="newblog" element={<NewBlog />} />
            <Route path="profile" element={<Profile />} />
            <Route path="myblog" element={<MyBlog />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
