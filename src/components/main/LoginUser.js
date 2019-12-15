import React, {Fragment, useState} from 'react';
import styled from 'styled-components';
import Thumbnail_Icon from'../../atoms/Thumbnail_Icon';


const Wrapper = styled.div`
  width: 100%;
  height: 8%;
  display: flex;
`
const UserInfo = styled.div`
  padding: 14px 6px;
`
const UserId = styled.div`
    font-size: 16px;
    font-weight: 600;
`
const UserName = styled.div`
    font-size: 15px;
    color: #919191;
`

const LoginUser = () => {
  let userIconURL = 'https://scontent-icn1-1.cdninstagram.com/vp/ae8b4e447a9151324a749b4627d887d8/5DF50544/t51.2885-19/s320x320/58004192_2433784366854980_2844436572466577408_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com'

  return(
    <Fragment>
      <Wrapper>
          <Thumbnail_Icon url={userIconURL} width={40} height={40}/>
          <UserInfo>
            <UserId>wecode_bootcamp</UserId>
            <UserName>wecode | 위코드</UserName>
          </UserInfo>
      </Wrapper>
    </Fragment>
  );
}

export default LoginUser;

