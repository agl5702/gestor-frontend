import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { TaskFormPage } from "./pages/TaskFormPage";
import { TasksPage } from "./pages/TasksPage";
import { Toaster } from "react-hot-toast";
import img from './assets/password.jpeg'

function App() {
  return (
    <BrowserRouter>
      <div style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', minHeight: '100vh' }}  className="container mx-auto">
        <Navigation />
        <Routes>
          {/* redirect to tasks */}
          <Route path="/" element={<Navigate to="/" />} />
          <Route path="/index" element={<TasksPage />} />
          <Route path="/:id" element={<TaskFormPage />} />
          <Route path="/create" element={<TaskFormPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
