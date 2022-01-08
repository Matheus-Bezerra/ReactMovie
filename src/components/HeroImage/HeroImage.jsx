import React from 'react';

import { Wrapper, Content, Text } from '../HeroImage/HeroImage.styles';

const HeroImage = ({ image, title, text }) => {
  return (
    <div>
      <Wrapper image={image}>
        <Content>
          <Text>
            <h1>{title}</h1>
            <p>{text}</p>
          </Text>
        </Content>
      </Wrapper>
    </div>
  );
};

export default HeroImage;
