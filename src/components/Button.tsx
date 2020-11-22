import React from 'react';
import { TouchableHighlight as RNButton, ButtonProps as RNButtonProps, StyleSheet, Text } from 'react-native'

export interface ButtonProps extends RNButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Button contents
   */
  label: string,
};

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary = false, backgroundColor, size = 'medium', label, ...props }: ButtonProps) => {
  const buttonStyle = [styles.button, primary ? styles.primary : styles.secondary]
  let labelStyle

  switch (size) {
    case 'small':
      labelStyle = styles.small
      break;
    case 'medium':
      labelStyle = styles.medium
      break;
    case 'large':
      labelStyle = styles.large
      break;
  }

  return (
    <RNButton style={buttonStyle} {...props}>
      <Text style={labelStyle}>{label}</Text>
    </RNButton>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 0,
    borderRadius: 3,
  },
  label: {
    fontFamily: 'Nunito Sans, Helvetica Neue, Helvetica, Arial, sans- serif',
    fontWeight: '700',
  },
  primary: {
    color: 'white',
    backgroundColor: '#1ea7fd'
  },
  secondary: {
    color: '#333333',
    backgroundColor: 'transparent',
    elevation: 1,
  },
  small: {
    fontSize: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  medium: {
    fontSize: 14,
    paddingVertical: 11,
    paddingHorizontal: 20,
  },
  large: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 24
  }
})