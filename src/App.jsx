import React from 'react';

import './App.css';
import Header from './components/header/Header';
import QuestionRouter from './router/QuestionsRouter';
import MainRouter from './router/MainRouter';
import Login from './router/LoginRouter';

function App() {
  return (
    <section>
      <Header />
      <MainRouter />
      <QuestionRouter />
      <Login />
    </section>
  );
}

export default App;
