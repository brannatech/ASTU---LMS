import { useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material';
import theme from "./theme";
import LoginPage from "./pages/LoginPage";
import Courses from "./pages/Courses";
function App() {
  const [mode, setMode] = useState("dark");
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home setMode={setMode} mode={mode} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/courses" element={<Courses/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
