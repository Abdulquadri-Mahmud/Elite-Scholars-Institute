import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home';
import Login from '../pages/Login';
import AboutPage from '../pages/About';
import Layout from '../Layout/Layout';
import Dashboard from '../pages/dashboard/Dashboard';
import Courses from '../pages/dashboard/Courses';
import NotFound from '../pages/NotFound';
// import Profile from '../pages/dashboard/profile';

export default function AppRoutes() {
  return (
    <Router>
        <Routes>
            <Route path='' element={<Home/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/login' element={<Login/>}/>

            <Route path='/dashboard' element={<Layout/>}>
              <Route index element={<Dashboard />} />
              <Route path='courses' element={<Courses />} />
              <Route path='*' element={<NotFound />} />
              {/* <Route path='profile' element={<Profile />} /> */}
            </Route>
        </Routes>
    </Router>
  )
}
