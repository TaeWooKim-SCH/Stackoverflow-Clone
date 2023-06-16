import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Questions from '../pages/Questions/Questions';
import QuestionDetail from '../pages/Questions/QuestionDetail';

export default function QuestionRouter() {
  return (
    <Routes>
      <Route path="/questions" element={<Questions />} />
      <Route path="/questions/:id" element={<QuestionDetail />} />
    </Routes>
  );
}
