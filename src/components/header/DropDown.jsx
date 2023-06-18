/* eslint-disable max-len */
/* eslint-disable import/named */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  DropDownBody, DropDownSectionTop, DropDownTopText, DropDownText1, DropDownText2, DropDownSection, WorldIconImg,
} from '../../styles/header/DropDown';
import WorldIcon from '../../assets/header/WorldIcon.png';

function DropDown() {
  const navigate = useNavigate();

  return (
    <DropDownBody>
      <DropDownSectionTop>
        <DropDownTopText>PUBLIC</DropDownTopText>
      </DropDownSectionTop>
      <DropDownSection onClick={() => navigate('/questions')}>
        <WorldIconImg src={WorldIcon} />
        <DropDownText1>Questions</DropDownText1>
      </DropDownSection>
      <DropDownSection onClick={() => navigate('/tags')}>
        <DropDownText2>Tags</DropDownText2>
      </DropDownSection>
      <DropDownSection onClick={() => navigate('/users')}>
        <DropDownText2>Users</DropDownText2>
      </DropDownSection>
    </DropDownBody>
  );
}

export default DropDown;
