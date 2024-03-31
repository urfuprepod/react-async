import React from 'react';
import { Navigate, Route, Routes, } from "react-router-dom";
import PostsPage from './pages/PostsPage/PostsPage'
import TestPage from './pages/TestPage/TestPage';

const App = () => {
  return (
    <Routes>
            <Route path="/" element={<PostsPage />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
  )
}

export default App