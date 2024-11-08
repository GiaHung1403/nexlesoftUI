// import { ColorProps, useTheme } from '@shopify/restyle'
// import { Theme } from '@themes'
import React, {forwardRef} from 'react';
import {TextProps} from 'react-native';

interface IconProps {
  size?: number;
  marginRight?: number;
  marginLeft?: number;
  name?: string;
  color?: string;
  as?: any;
}

const Icon = (rest: IconProps & TextProps) => {
  // const theme = useTheme<Theme>()
  const bgColor = '#fff';
  const handleColor = '#202020';

  const IconVector = rest?.as;
  const size = (rest?.size || 0) * 4;
  const marginRight = (rest?.marginRight || 0) * 4;
  const marginLeft = (rest?.marginLeft || 0) * 4;
  const color = rest?.color;

  return (
    <IconVector
      {...rest}
      size={size}
      marginRight={marginRight}
      marginLeft={marginLeft}
      color={color}
    />
  );
};

export default Icon;
