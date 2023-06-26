import React from 'react';

import './App.css';
import Header from './components/header/Header';
import QuestionRouter from './router/QuestionsRouter';
import MainRouter from './router/MainRouter';
import Login from './router/LoginRouter';
import Users from './router/UserRouter';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <section>
      <Header />
      <MainRouter />
      <QuestionRouter />
      <Login />
      <Users />
      <Footer />
    </section>

  );
}

export default App;
