import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useSearchParams } from 'react-router-dom';
import QuestionTop from '../../components/Questions/QuestionTop';
import QuestionCard from '../../components/Questions/QuestionCard';
import QuestionPagination from '../../components/Questions/QuestionPagination';

function Questions() {
  const [questions, setQuestions] = useState({});
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') || 1;

  const questionsFetch = async () => {
    const res = await fetch(`http://ec2-52-78-106-127.ap-northeast-2.compute.amazonaws.com:8080/questions?page=${page}`);
    const json = await res.json();
    setQuestions(json);
  };

  useEffect(() => {
    questionsFetch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <QuestionsSection>
      {questions.result && <QuestionTop totalQuestion={questions.pageInfo.totalElements} />}
      {questions.result && questions.result.map((question) => (
        <QuestionCard question={question} key={question.questionId} />
      ))}
      {questions.pageInfo && <QuestionPagination pageInfo={questions.pageInfo} />}
    </QuestionsSection>
  );
}

export default Questions;

const QuestionsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
