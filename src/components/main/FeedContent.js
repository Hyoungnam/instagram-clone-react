import React, {Fragment} from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  display: flex;
  width: 100%;
`
const Span = styled.span`
  font-size: 16px;
  font-weight: 700;
  padding: 2px 10px;
  ${props=> props.content && `
    font-size: 15px;
    font-weight: 400;
    padding: 2px 0px;
  `}
`

const FeedContent = ({postOwner}) => {

  return(
    <Fragment>
      <Wrapper>
        <Span>{postOwner.id}</Span>
        <Span content="true">{postOwner.content}</Span>         
      </Wrapper>
    </Fragment>
  );
}

export default FeedContent;
