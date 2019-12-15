import React, {Fragment} from 'react';
import styled from 'styled-components';
import Form from '../components/Form';

const LoginPage_Wrapper = styled.div`
  padding: 100px 24px;
`
const Section = styled.section`
  margin: 0 auto;
  max-width: 500px;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 20%);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  align-items: center;
  height: 600px;
`;
const Logo = styled.div`
  background-image: url('../img/logo_text.png');
  width:213px;
  height:64px;
  background-repeat: no-repeat no-repeat ;
  background-origin: content-box;
  padding: 60px 16px 0px ;
  display: inline-block;
`
const FindPwd = styled.a`
  font-size: 14px;
  color: #567798;
  font-weight: 600;
  padding-bottom: 60px;
`

const Login = () => {
  return(
    <Fragment>
      <LoginPage_Wrapper>
        <Section>
          <Logo/>
          <Form/>
          <FindPwd>비밀번호를 잊으셨나요?</FindPwd>
        </Section>
      </LoginPage_Wrapper>
    </Fragment>
  );
}

export default Login;
