/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable max-len */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  HeaderBody, HeaderMenuImg, HeaderLogoImg, HeaderSearchIconImg, HeaderSearchInput, HeaderLoginButton, HeaderSignUpButton,
} from '../../styles/header/Header';
import HeaderMenu from '../../assets/header/HeaderMenu.png';
import HeaderLogo from '../../assets/header/HeaderLogo.png';
import SearchIcon from '../../assets/header/SearchIcon.png';
import DropDown from './DropDown';

function Header() {
  const navigate = useNavigate();
  const [isClick, setDropClick] = useState(false);

  return (
    <HeaderBody>
      {isClick && <DropDown/>}
      <HeaderMenuImg src={HeaderMenu} onClick={() => setDropClick(!isClick)} />
      <HeaderLogoImg src={HeaderLogo} onClick={() => navigate('/questions')}/>
      <HeaderSearchIconImg src={SearchIcon} />
      <HeaderSearchInput placeholder=" [tag] search within a tag" />
      <HeaderLoginButton onClick={() => navigate('/login')}>Log in</HeaderLoginButton>
      <HeaderSignUpButton onClick={() => navigate('/')}>Sign up</HeaderSignUpButton>
    </HeaderBody>

  );
}

export default Header;
