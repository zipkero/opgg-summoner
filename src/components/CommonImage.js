import React from 'react';
import styled from 'styled-components';

const CommonImageBox = styled.div`
  width: ${props => props.width || '45px'};
  height: ${props => props.height || '45px'};

  img {
    width: inherit;
    height: inherit;
  }
`;

function CommonImage({width, height, src, style, imgStyle, children}) {
  return (
      <CommonImageBox width={width} height={height} style={style}>
        <img src={src} style={imgStyle}/>
        {children}
      </CommonImageBox>
  );
}

export default CommonImage;