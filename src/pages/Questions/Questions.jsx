import React from 'react';

import QuestionTop from '../../components/Questions/QuestionTop';
import QuestionCard from '../../components/Questions/QuestionCard';
import { QuestionsData } from '../../dummyData/questionData';
import QuestionPagination from '../../components/Questions/QuestionPagination';

function Questions() {
  return (
    <section>
      <QuestionTop totalQuestion={QuestionsData.pageInfo.totalElements} />
      {QuestionsData.results.map((question) => (
        <QuestionCard question={question} key={question.id} />
      ))}
      <QuestionPagination />
    </section>
  );
}

export default Questions;
