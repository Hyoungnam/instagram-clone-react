import React, {Fragment} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  top: 25%;
  position: relative;
  width: 300px;
  height: 50%;
`
const Input = styled.input`
  margin: auto;
  width: 60%;
  height: 40%;
  border: 1px solid #bbb;
  border-radius: 2px;
  padding: 8px 14px;
  text-align: center;
  font-size: 13px;
  font-weight: 300;
  background-color: #F7F7F7;
`
const Img = styled.img`
  position: absolute;
  top: 34%;
  left: 40%;
  width: 12px;
`
const NavCenter = () => {
  return(
    <Fragment>
      <Wrapper>
        <Input type="text" placeholder="검색"/> 
        <Img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"/>
      </Wrapper>
    </Fragment>
  );
}

export default NavCenter;
