import React, {Fragment, useState} from 'react';
import styled from 'styled-components';
import Stories from './Stories';

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 24px;
   border: 1px solid rgba(0, 0, 0, 10%);
   border-radius: 4px;
   width: 100%;
   height: 30%;
   background-color: white;
   overflow: auto;
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
  ${props=>props.all && `
    font-size: 12px;
    color: #212121;
    font-weight:600;
  `}
`

const Story = ({storyData}) => {
  const stories = storyData.map((item,index)=>{
    return <Stories key={index} id={item.id}  url={item.picURL} date={item.date}/>
  });
  return(
    <Fragment>
      <Wrapper>
        <Header>
          <Div>스토리</Div>
          <Div all="true">모두 보기</Div>
        </Header>
      {stories}
      </Wrapper>
    </Fragment>
  );
}

export default Story;
