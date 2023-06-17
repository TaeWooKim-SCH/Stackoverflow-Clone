import React from 'react';
import styled from 'styled-components';

function QuestionCard({ question }) {
  return (
    <QuestionCardSection>
      <QuestionCardLeft>
        <div>
          {question.votes}
          {' '}
          votes
        </div>
        <div>
          {question.answerCount}
          {' '}
          answers
        </div>
      </QuestionCardLeft>
      <QuestionCardRight>
        <QuestionCartTitle>{question.title}</QuestionCartTitle>
        <QuestionCardBody>{question.content}</QuestionCardBody>
        <QuestionCardTagList>
          {question.tags.map((tag) => (
            <QuestionCardTag>{tag}</QuestionCardTag>
          ))}
        </QuestionCardTagList>
        <QuestionCardInfo>
          김태우
          {' '}
          {question.createAt}
        </QuestionCardInfo>
      </QuestionCardRight>
    </QuestionCardSection>
  );
}

export default QuestionCard;

const QuestionCardSection = styled.section`
  width: 750px;
  padding: 16px;
  display: flex;
  border-bottom: 1px solid #dadada;
`;

const QuestionCardLeft = styled.section`
  width: 108px;
  text-align: right;
  font-size: small;
  padding-top: 2px;
`;

const QuestionCardRight = styled.section`
  width: 600px;
  margin-left: 16px;
`;

const QuestionCartTitle = styled.div`
  font-size: large;
  font-weight: 400;
  color: #0063BF;
`;

const QuestionCardBody = styled.div`
  font-size: small;
  font-weight:400;
  margin-bottom: 8px;
`;

const QuestionCardInfo = styled.section`
  text-align: right;
  font-size: x-small;
`;

const QuestionCardTagList = styled.section`
  display: flex;
`;
const QuestionCardTag = styled.section`
  background-color: #E1ECF4;
  border-radius: 3px;
  color: #39739D;
  font-size: x-small;
  margin-right: 4px;
  padding: 4.8px 6px;
`;
