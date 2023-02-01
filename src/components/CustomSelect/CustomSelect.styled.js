import { selectUnstyledClasses } from '@mui/base/SelectUnstyled';
import OptionUnstyled, {
  optionUnstyledClasses,
} from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import { styled } from '@mui/system';
import arrowDown from '../../icons/arrowDown.svg';
export const StyledButton = styled('button')`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  text-align: left;
  line-height: calc(24 / 16);
  box-sizing: border-box;
  width: 280px;
  height: 50px;
  padding: 12px 20px;
  background: transparent;
  border: 1px solid #000000;
  border-radius: 30px;
  position: relative;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    border-color: grey;
  }

  &.${selectUnstyledClasses.focusVisible} {
    border-color: blue;
    outline: 3px solid blue;
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: '';
      color: #000;
      fill: #000;
      stroke: #000;
      position: absolute;
      width: 20px;
      height: 11px;
      right: 20px;
      bottom: 20px;
      background-image: url(${arrowDown});
      background-repeat: no-repeat;
      transform: rotate(180deg);
    }
  }

  &::after {
    content: '';
    color: #000;
    fill: #000;
    stroke: #000;
    position: absolute;
    width: 20px;
    height: 11px;
    right: 20px;
    bottom: 20px;
    background-image: url(${arrowDown});
    background-repeat: no-repeat;
  }

  @media screen and (min-width: 768px) {
    width: 160px;
  }

  @media screen and (min-width: 1280px) {
    width: 182px;
  }
`;

export const StyledListbox = styled('ul')`
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(25px);
  border-radius: 20px;
  padding: 12px 0;
  margin: 0;
  width: 280px;
  height: 157px;
  overflow: auto;
  scrollbar-width: none;
  outline: 0px;
  border: none;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  @media screen and (min-width: 768px) {
    width: 160px;
  }

  @media screen and (min-width: 1280px) {
    width: 182px;
  }
`;

export const StyledOption = styled(OptionUnstyled)`
  width: 280px;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: calc(24 / 16);
  list-style: none;
  padding: 3px 20px;
  cursor: pointer;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: white;
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: white;
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: white;
  }

  &.${optionUnstyledClasses.disabled} {
    color: grey;
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: white;
  }

  @media screen and (min-width: 768px) {
    width: 160px;
  }

  @media screen and (min-width: 1280px) {
    width: 182px;
  }
`;

export const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;
