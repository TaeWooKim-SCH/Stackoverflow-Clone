import React from 'react';
import styled from 'styled-components';

import QuestionTop from '../../components/Questions/QuestionTop';
import QuestionCard from '../../components/Questions/QuestionCard';
import { QuestionsData } from '../../dummyData/questionData';
import QuestionPagination from '../../components/Questions/QuestionPagination';

function Questions() {
  return (
    <QuestionsSection>
      <QuestionTop totalQuestion={QuestionsData.pageInfo.totalElements} />
      {QuestionsData.results.map((question) => (
        <QuestionCard question={question} key={question.id} />
      ))}
      <QuestionPagination />
    </QuestionsSection>
  );
}

export default Questions;

const QuestionsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
