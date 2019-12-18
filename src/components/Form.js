import React, {Fragment, useState, useEffect}  from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
const Form_Wrapper = styled.div`
  padding: 0px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
`
const Forms = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`
const Input = styled.input`
  border: 1px solid rgba(0, 0, 0, 10%);
  background-color: rgba(0, 0, 0, 2%); 
  font-size: 16px;
  border-radius: 4px;
  width: 90%;
  margin: 4px auto;
  padding: 12px 8px;
  height: 24px;
`
const Button = styled.button`
  border: 1px solid #c5e1fa;
  background-color: #c5e1fa;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  border-radius: 4px;
  width: 94.5%;
  margin: 12px;
  padding: 12px 8px;
  height: 48px;
  ${({id,pwd})=> {
    return id && 
           pwd && 
           `{background: #80D8FF;}`}
  }
`

const Form = () => {
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  let history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLogin(true);
    
    //api 연결
    fetch('http://10.58.1.199:8000/user/auth', {
    method: 'POST',
    body: JSON.stringify({ email:id,
                            password:pwd,})
    })
    .then(res=> res.json())
    .then(res=> {
      //login fail
      if(res.message) throw new Error(res.message);
      //login success
      if(!res.message) {
        localStorage.setItem('login_user',res.access_token);
        history.push("/index");
      }
    })
    .catch(err=>{
      alert(err.message);
    })
  }
  
  return(
    <Fragment>
      <Form_Wrapper>
        <Forms onSubmit={handleSubmit}>
          <Input type="text" value={id} onChange={(e)=>setId(e.target.value)} placeholder="전화번호, 사용자 이름 또는 이메일"></Input>
          <Input type="password" value={pwd} onChange={(e)=>setPwd(e.target.value)} placeholder="비밀번호"></Input>
          <Button id={id} pwd={pwd}>로그인</Button>
        </Forms>
      </Form_Wrapper>
    </Fragment>  
  );
}

export default Form;

