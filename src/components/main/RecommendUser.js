import React, {Fragment, useState} from 'react';
import styled from 'styled-components';
import RecommendUsers from './RecommendUsers';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  border: 1px solid rgba(0, 0, 0, 10%);
  width: 100%;
  height: 40%;
  background-color: white;
  border-radius: 4px;
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 30px;
`
const Div = styled.div`
  font-size: 14px;
  color: #919191;
  padding: 14px 18px 10px 14px;
  ${props=> props.all && `
    font-size: 12px;
    font-weight: 600;
    color: #212121;
  `}
`


const RecommendUser = ({forUser}) => {
  const forUsers = forUser.map((item,index)=>{
      return <RecommendUsers key={index} id={item.id}  whatFor={item.whatFor} picURL={item.picURL}/>
  })
  return(
    <Fragment>
      <Wrapper>
        <Header>
          <Div>회원님을 위한 추천</Div>
          <Div all="true">모두 보기</Div>
        </Header>
        {forUsers}
      </Wrapper>
    </Fragment>
  );
}

export default RecommendUser;

