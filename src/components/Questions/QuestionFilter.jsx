import React from 'react';
import styled from 'styled-components';

function QuestionFilter() {
  return (
    <section>
      <FilterBtn href="/questions">Newest</FilterBtn>
      <FilterBtn href="/questions">Answered</FilterBtn>
      <FilterBtn href="/questions">Unanswered</FilterBtn>
    </section>
  );
}

export default QuestionFilter;

const FilterBtn = styled.a`
  width: 39.36px;
  height: 13.84px;
  color: #3B4045;
  /* background-color: #E3E6E8; */
  font-size: x-small;
  padding: 9.6px;
  text-decoration: none;
  border: 1px solid gray;
  border-radius: 3px;
`;
