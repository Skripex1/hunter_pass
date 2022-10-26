import { motion } from 'framer-motion';
import styled, { css } from '../../../../../../theme';

export const LfToggleContainer = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: 20px;
  position: relative;
  display: flex;
  align-self: center;
`;
export const LftButton = styled.button<{ isActive: boolean }>`
  outline: 0;
  border: 0;
  width: 100px;
  font-size: ${props => props.theme.fontSize.small};
  text-transform: uppercase;
  border-radius: 20px;
  font-family: ${props => props.theme.fonts.regular};
  background-color: transparent;
  z-index: 5;
  color: ${props => (props.isActive ? props.theme.colors.white : props.theme.colors.black)};

  padding: 10px 0;
  &:hover {
    outline: 0;
    border: 0;
    cursor: pointer;
  }
  &:focus {
    outline: 0;
    border: 0;
  }
  @media screen and (max-width: 350px) {
    width: 60px;
    font-size: ${props => props.theme.fontSize.xSmall};
  }
`;
export const LftHover = styled(motion.div)<{ position: number }>`
  position: absolute;
  width: 100px;
  height: 43px;
  top: 0;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.primary};
  ${props =>
    props.position === 0 &&
    css`
      left: 0;
    `}
  ${props =>
    props.position === 1 &&
    css`
      left: 34%;
    `}
    ${props =>
    props.position === 2 &&
    css`
      right: 0;
    `}
    @media screen and (max-width: 350px) {
    width: 60px;
    height: 35px;
  }
`;
