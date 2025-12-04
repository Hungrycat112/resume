import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Awards from "./pages/Awards.jsx";
import Skills from "./pages/Skills.jsx";
import Education from "./pages/Education.jsx";
import Experience from "./pages/Experience.jsx";
import Volunteer from "./pages/Volunteer.jsx";
import Socials from "./pages/Socials.jsx";
import BackgroundAudio from "./components/BackgroundAudio.jsx";
import GlobalClickSound from "./components/GlobalClickSound.jsx";
import Me from "./pages/Me.jsx";

export default function App() {
  return (
    <>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />


        <Route path="/home" element={<Home />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/socials" element={<Socials />} />
        <Route path="/me" element={<Me />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>


      {/* Background music player mounted globally */}
      <BackgroundAudio />
      <GlobalClickSound/>
    </>
  );
}
