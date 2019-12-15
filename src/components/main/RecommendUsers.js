import React, {Fragment, useState} from 'react';
import styled from 'styled-components';
import Thumbnail_Icon from '../../atoms/Thumbnail_Icon'

const Wrapper = styled.div`
  display: flex;
  margin-top: 10px;
  width: 100%;
  height: 20%;
  padding-left: 8px;
`
const ForUserText = styled.div`
  display: flex;
  flex-direction: column;
  width: 64.2%;
`
const ForUserId = styled.div`
  display: inline-block;
  margin: 5px 0px 1px;
  padding: 4px 2px 0px;
  font-size: 15px;
`

const ForUserMsg = styled.div`
  display: inline-block;
  color: #bbb;
  padding: 0px 2px;
  font-size: 12px;
`
const Div = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #3897f0;
  padding: 18px 0px;
`


const RecommendUser = ({id, whatFor, picURL}) => {
  return(
    <Fragment>
      <Wrapper>
        <Thumbnail_Icon url={picURL} width={28} height={28}></Thumbnail_Icon>
        <ForUserText>
          <ForUserId>{id}</ForUserId>
          <ForUserMsg>{whatFor}</ForUserMsg>
        </ForUserText>
        <Div>팔로우</Div>
      </Wrapper>
    </Fragment>
  );
}

export default RecommendUser;

