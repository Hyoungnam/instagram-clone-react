import React, {Fragment} from 'react';
import styled from 'styled-components';

const Div = styled.div`
  background-image: url(https://scontent-icn1-1.cdninstagram.com/vp/ae8b4e447a9151324a749b4627d887d8/5DF50544/t51.2885-19/s320x320/58004192_2433784366854980_2844436572466577408_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  margin: 10px 10px;
  ${props=>props.url && `
    background-image: url(${props.url});
    width: ${props.width}px;
    height: ${props.height}px;
  `}
`


const Thumbnail_Icon = ({url, width, height}) => {
  return(
    <Fragment>
      <Div url={url} width={width} height={height}></Div>
    </Fragment>
  );
}

export default Thumbnail_Icon;

