// ParallaxHelper.js

import React from 'react';
import { MouseParallaxContainer, MouseParallaxChild } from 'react-parallax-mouse';

const ParallaxHelper = ({ children }) => (
  <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
    {children}
  </MouseParallaxContainer>
);

export const ParallaxLayer = ({ factorX, factorY, children }) => (
  <MouseParallaxChild factorX={factorX} factorY={factorY}>
    {children}
  </MouseParallaxChild>
);

export default ParallaxHelper;
