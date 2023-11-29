import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/home/Footer";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import Courses from "./pages/Courses/Courses";
import Home from "./pages/Home/Home";
import StartCoursePage from "./pages/StartCourse.jsx/StartCoursePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Courses />
            </>
          }
        />
        <Route path="/coursedetails" element={<CourseDetails />} />
        <Route path="/coursestart" element={<StartCoursePage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
