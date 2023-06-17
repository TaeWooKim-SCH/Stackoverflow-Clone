import React from 'react';
import styled from 'styled-components';

import QuestionFilter from './QuestionFilter';

function QuestionTop({ totalQuestion }) {
  return (
    <QuestionTopSection>
      <Top>
        <div>All Questions</div>
        <AskQuestion type="button">Ask Question</AskQuestion>
      </Top>
      <Bottom>
        <div>
          {totalQuestion.toLocaleString('ko-KR')}
          {' '}
          questions
        </div>
        <QuestionFilter />
      </Bottom>
    </QuestionTopSection>
  );
}

export default QuestionTop;

const QuestionTopSection = styled.section`
  padding: 24px 16px 0 16px;
  width: 727px;
  border-bottom: 1px solid #d7dce0;
`;

const Top = styled.section`
  font-size: x-large;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const AskQuestion = styled.button`
  height: 37px;
  color: white;
  background-color: #0A95FF;
  padding: 10.4px;
  font-size: small;
  border: 1px solid white;
  border-radius: 3px;
  box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.4);
  cursor: pointer;
`;

const Bottom = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
