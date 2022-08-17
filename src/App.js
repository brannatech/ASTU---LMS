import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Courses from "./pages/Courses";
import School from "./pages/School";
import AboutPage from "./pages/AboutPage";
import ContactUs from "./pages/ContactUs";
import Navbar from './components/AppBarResponsive';
import Footer from "./components/Footer";
import CourseDetail from "./pages/CourseDetail";
import React from "react";
import ProtectedRoutes from "./app/ProtectedRoutes";
import IndexPage from "./pages/IndexPage";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<IndexPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route element={<ProtectedRoutes />} >
          <Route path="/home" exact element={<Home />} />
          <Route path="/school" element={<School />} />
          <Route path="/courses" exact element={<Courses />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
        </Route>
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
