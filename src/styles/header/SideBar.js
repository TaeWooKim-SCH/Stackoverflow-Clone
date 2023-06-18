/* eslint-disable max-len */
import styled from 'styled-components';

const SideBarBody = styled.ul`
  display: flex;
  border-right: 1px solid #e0e0e0;
  flex-direction: column;
  width: 340px;
  height: 100%;
  position: fixed;
  margin: 0;
  padding: 0;
  background-color: white;
  
`;

const SideBarTopSection = styled.li`
  display: flex;
  height: 50px;
  width: 186px;
  margin-left: 150px;
  margin-top: 50px;
  cursor: pointer;
`;

const SideBarSection = styled.li`
  display: flex;
  height: 50px;
  width: 186px;
  margin-left: 150px;
  align-items: center;

  &:hover{  
    background-color : #D7D9DC;
    border-right: 5px solid #E5883E ;
    }
    cursor: pointer;
`;

const SideBarTopText = styled.li`
    display: flex;
    height: 50px;
    width: 100%;
    justify-content: left;
    align-items: center;
    font-size: 14px;
    margin-left: 10px;
    margin-top: 10px;

    color: #8C8C8C;
`;

const SideBarText1 = styled.li`
    display: flex;
    height: 50px;
    width: 100%;
    justify-content: left;
    align-items: center;
    font-size: 15px;
    margin-left: 10px;
 
    &:hover{  
    color: black;
    }
    color: #8C8C8C;
`;

const SideBarText2 = styled.li`
    display: flex;
    height: 50px;
    width: 100%;
    justify-content: left;
    align-items: center;
    font-size: 15px;
    margin-left: 40px;

    color: #8C8C8C;
    &:hover{  
    color: black;
    }
`;

const WorldIconImg = styled.img`
    height: 20px;
    width: 20px;
    margin-left: 10px;
    &:hover{  
    color: black;
    }
`;

export {
  SideBarBody, WorldIconImg, SideBarTopSection, SideBarTopText, SideBarSection, SideBarText1, SideBarText2,
};
