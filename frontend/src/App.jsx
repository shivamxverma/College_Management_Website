import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChooseUser from './components/ChooseUser';
import Home from './components/Home';
import AdminRegister from './components/Adminregister';
import StudentSignIn from './components/Studentsignin';
import TeacherSignIn from './components/Teachersignin';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/choose-user" element={<ChooseUser />} />
          <Route path="/admin-signIn" element={<AdminRegister />} />
          <Route path="/student-signIn" element={<StudentSignIn />} />
          <Route path="/teacher-signIn" element={<TeacherSignIn />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
