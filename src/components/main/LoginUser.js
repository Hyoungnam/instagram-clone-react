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
  let userIconURL = 'https://scontent-icn1-1.cdninstagram.com/vp/fe72f0704a8e80eab0e1040e42a4b465/5E0DD110/t51.2885-19/s320x320/67879165_662272640917279_8881524564585086976_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com'

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

