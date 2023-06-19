import React from 'react';
import styled from 'styled-components';

import { QuestionsDetailData } from '../../dummyData/questionData';
import QuestionDetailBody from '../../components/Questions/QuestionDetailBody';

function QuestionDetail() {
  return (
    <DetailSection>
      <DetailTop>
        <DetailTopTitle>{QuestionsDetailData.title}</DetailTopTitle>
        <DetailTopTime>
          Asked
          {' '}
          {QuestionsDetailData.createAt}
        </DetailTopTime>
      </DetailTop>
      <QuestionDetailBody QuestionsDetailData={QuestionsDetailData} />
      <Answered>
        <AnswerCount>2 Answers</AnswerCount>
        {QuestionsDetailData.answers.answerList.map((answer) => (
          <AnswerBox>
            <QuestionDetailBody QuestionsDetailData={answer} />
          </AnswerBox>
        ))}
      </Answered>
    </DetailSection>
  );
}

export default QuestionDetail;

const DetailSection = styled.section`
  padding: 24px;
  width: 80%;
  max-width: 1100px;
`;

const DetailTop = styled.section`
  border-bottom: 1px solid #ccced1;
`;

const DetailTopTitle = styled.div`
  font-size: x-large;
  margin-bottom: 10px;
`;

const DetailTopTime = styled.div`
  color: #6A737C;
  margin-bottom: 15px;
  font-size: 13px
`;

const Answered = styled.section`
  margin-top: 50px;
`;

const AnswerCount = styled.div`
  margin-bottom: 40px;
  font-size: large;
`;

const AnswerBox = styled.div`
  border-bottom: 1px solid #cacaca;
`;
