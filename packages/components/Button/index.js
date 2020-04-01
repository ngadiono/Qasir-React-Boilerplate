import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { darken } from 'polished';

import CONSTANTS from '@qasir/styles/constants';
import colors from '@qasir/styles/colors';
import { button } from '@qasir/styles/variables';

const { SIZES, ALIGN, WIDTH } = CONSTANTS;
const { white, theme, black } = colors;

const StyledButton = styled.button.attrs(props => console.log(props))`
    background-color: ${white};
    color: ${black};
    border: 1px solid #EDECF3;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    transition: ease all .2s;
    -webkit-transition: ease all .2s;
    width: ${({ width }) => {
      const { WIDTH50, WIDTH75, WIDTH100 } = WIDTH;
      switch (width) {
        case WIDTH50:
          return button.width50;
        case WIDTH75:
          return button.width75;
        case WIDTH100:
          return button.width100;
        default:
          return button.width100;
      }
    }};
    height: ${({ size }) => {
      const { SMALL, MEDIUM, LARGE, EXTRALARGE } = SIZES;
      switch (size) {
        case SMALL:
          return button.small;
        case MEDIUM:
          return button.medium;
        case LARGE:
          return button.large;
        case EXTRALARGE:
          return button.extralarge;
        default:
          return button.medium;
      }
    }};
    font-size: 14px;
    padding: 0 14px;
    display: inline-flex;
    justify-content: ${({ textAlign }) => {
      const { LEFT, CENTER, RIGHT } = ALIGN;
      switch (textAlign) {
        case LEFT:
          return LEFT;
        case CENTER:
          return CENTER;
        case RIGHT:
          return RIGHT;
        default:
          return LEFT;
      }
    }};
    &:hover {
        border: 1px solid ${darken(0.1, '#EDECF3')};
    }
    ${({ primary }) => {
      return (
        primary &&
        css`
          background-color: ${theme};
          color: ${white};
          border: 1px solid ${theme};
          &:hover {
            background-color: ${darken(0.1, theme)};
          }
        `
      );
    }}
    ${({ secondary }) => {
      return (
        secondary &&
        css`
          background-color: #f2f4f7;
          color: ${black};
          border: 1px solid #f2f4f7;
          &:hover {
            background-color: ${darken(0.1, '#F2F4F7')};
          }
        `
      );
    }}
    ${({ link }) => {
      return (
        link &&
        css`
          background-color: ${white};
          color: #007bff;
          border: none;
          &:hover {
            text-decoration: underline;
          }
        `
      );
    }}
`;

const Button = ({
  children,
  className,
  htmlType,
  size,
  textAlign,
  width,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      htmlType={htmlType}
      size={size}
      textAlign={textAlign}
      width={width}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  type: PropTypes.string,
  htmlType: PropTypes.oneOfType([
    PropTypes.oneOf(['a', 'button', 'input']),
    PropTypes.func
  ]),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
  width: PropTypes.oneOf(['width50', 'width75', 'width100']),
  href: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

Button.defaultProps = {
  children: null,
  className: undefined,
  style: undefined,
  type: 'button',
  htmlType: 'button',
  size: undefined,
  textAlign: undefined,
  width: undefined,
  href: undefined,
  disabled: false,
  onClick: () => null
};

export default Button;
