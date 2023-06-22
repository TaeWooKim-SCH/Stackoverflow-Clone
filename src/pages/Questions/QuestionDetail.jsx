import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import QuestionDetailBody from '../../components/Questions/QuestionDetailBody';

function QuestionDetail() {
  const [detailData, setDetailData] = useState({});
  const location = useLocation();

  const detailFetch = async () => {
    const res = await fetch(`http://ec2-52-78-106-127.ap-northeast-2.compute.amazonaws.com:8080${location.pathname}`);
    const json = await res.json();
    json.createdAt = new Date(json.createdAt).toLocaleDateString();
    setDetailData(json);
  };

  useEffect(() => {
    detailFetch();
  }, []);

  return (
    <DetailSection>
      {detailData && (
        <>
          <DetailTop>
            <DetailTopTitle>{detailData.questionTitle}</DetailTopTitle>
            <DetailTopTime>
              Asked
              {' '}
              {detailData.createdAt}
            </DetailTopTime>
          </DetailTop>
          <QuestionDetailBody detailData={detailData} />
          <Answered>
            {detailData.answers && (
              <AnswerCount>
                {detailData.answers.answerCount}
                {' '}
                Answers
              </AnswerCount>
            )}
            {detailData.answers && detailData.answers.answers.length
              ? detailData.answers.answers.map((answer) => (
                <AnswerBox key={answer.answerId}>
                  <QuestionDetailBody QuestionsDetailData={answer} />
                </AnswerBox>
              )) : <div>답변 없음</div>}
          </Answered>
        </>
      )}
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
  font-size: 13px;
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
