import React from 'react';
import { render } from 'react-dom';
import logo from './source.png';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 4em;
  background: #ededed;
`;

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: #ea1ed4;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Greeting = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;


const App = () => {
    return (
        <Wrapper>
          <Title>my first snowpack+react app</Title>
          <ImageWrapper>
              <img src={logo} />
          </ImageWrapper>
          <Greeting>hello ❄️Snowpack❄️</Greeting>
        </Wrapper>
    );
};
render(<App />, document.getElementById('root'));