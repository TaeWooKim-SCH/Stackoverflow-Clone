/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  SideBarBody, WorldIconImg, SideBarTopSection, SideBarTopText, SideBarSection, SideBarText1, SideBarText2,
} from '../../styles/header/SideBar';
import WorldIcon from '../../assets/header/WorldIcon.png';

function SideBar() {
  const navigate = useNavigate();

  return (
    <SideBarBody>
      <SideBarTopSection>
        <SideBarTopText>PUBLIC</SideBarTopText>
      </SideBarTopSection>
      <SideBarSection onClick={() => navigate('/questions')}>
        <WorldIconImg src={WorldIcon} />
        <SideBarText1>Questions</SideBarText1>
      </SideBarSection>
      <SideBarSection onClick={() => navigate('/tags')}>
        <SideBarText2>Tags</SideBarText2>
      </SideBarSection>
      <SideBarSection onClick={() => navigate('/users')}>
        <SideBarText2>Users</SideBarText2>
      </SideBarSection>
    </SideBarBody>
  );
}

export default SideBar;
