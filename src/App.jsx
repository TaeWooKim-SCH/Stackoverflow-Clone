import React from 'react';

import './App.css';
import Header from './components/header/Header';
import QuestionRouter from './router/QuestionsRouter';

function App() {
  return (
    <section>
      <Header />
      <QuestionRouter />
    </section>
  );
}

export default App;
