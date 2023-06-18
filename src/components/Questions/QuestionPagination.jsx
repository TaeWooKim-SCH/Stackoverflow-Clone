import React from 'react';
import styled from 'styled-components';

function QuestionPagination() {
  return (
    <PaginationSection>
      <PageBox href="/questions?page=1">1</PageBox>
      <PageBox href="/questions?page=2">2</PageBox>
      <PageBox href="/questions?page=3">3</PageBox>
      <PageBox href="/questions?page=4">4</PageBox>
      <PageBox href="/questions?page=5">5</PageBox>
    </PaginationSection>
  );
}

export default QuestionPagination;

const PaginationSection = styled.section`
  display: flex;
`;

const PageBox = styled.a`
  padding: 5px 8px;
  font-size: 13px;
  color: white;
  background-color: #F48225;
  border: 1px solid white;
  border-radius: 3px;
  text-decoration: none;
`;
