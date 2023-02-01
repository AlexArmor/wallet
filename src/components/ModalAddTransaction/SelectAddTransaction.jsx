import * as React from 'react';
import arrowDown from '../../icons/arrowDown.svg';
import SelectUnstyled, {
  selectUnstyledClasses,
} from '@mui/base/SelectUnstyled';
import OptionUnstyled, {
  optionUnstyledClasses,
} from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import { styled } from '@mui/system';
import { useSelector } from 'react-redux';

const StyledButton = styled('button')(
  ({ theme }) => `
  margin: 0 auto 40px;    
  padding-left: 20px; 
  display:flex;
  position: relative;
 
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: calc(27 / 18);
  border: none;
  border-bottom: 1px solid var(--main-light-color);

  height: 32px;
  min-width: 280px;
    box-sizing: border-box;
    text-align: left;
    background: transparent;
    color: #bdbdbd;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
    &:hover {
    }
    &.${selectUnstyledClasses.focusVisible} {
    }
    &.${selectUnstyledClasses.expanded} {
      &::after {
        content: '';
        color: #000;
        fill: #000;
        stroke: #000;
        position: absolute;
        width: 20px;
        height:11px;
        right: 20px;
        bottom: 8px;
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
      height:11px;
      right: 20px;
      bottom: 8px;
      background-image: url(${arrowDown});
      background-repeat: no-repeat;
     
    }
    @media screen and (max-width: 480px) {
     width: calc(100% - 20px);
    }
    @media screen and (min-width: 767px) {
      width: 394px;
    }
    `
);

const StyledListbox = styled('ul')(
  ({ theme }) => `
  background: rgba(255, 255, 255, 0.7);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(25px);
    border-radius: 20px;
    font-family: 'Circe';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: calc(27 / 18);
    box-sizing: border-box;
    padding: 6px 0;
    margin: 0;
    min-width: 280px;
    height: 342px;
    overflow: auto;
    scrollbar-width: none;
    outline: 0px;
    border: none;
    &::-webkit-scrollbar {
        width: 0;
        height: 0;
  }
  @media screen and (max-width: 480px) {
    width: calc(100% - 20px);
   }
   @media screen and (min-width: 767px) {
    width: 394px;
  }
    `
);

const StyledOption = styled(OptionUnstyled)(
  ({ theme }) => `
    list-style: none;
    padding: 8px;
    cursor: pointer;
    color: var(--main-black-color);
    &:last-of-type {
      border-bottom: none;
    }

    &.${optionUnstyledClasses.selected} {
      background-color: white;
      color:   var(--accent-secondary-color);
    }

    &.${optionUnstyledClasses.highlighted} {
      background-color: white;
      color:   var(--accent-secondary-color);
    }

    &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
      color:   var(--accent-secondary-color);
    }

    &.${optionUnstyledClasses.disabled} {
      color:   var(--accent-secondary-color);
    }

    &:hover:not(.${optionUnstyledClasses.disabled}) {
      background-color: white;
      color:   var(--accent-secondary-color);
    }
    `
);

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
  background: transparent;

  @media screen and (max-width: 480px) {
    width: calc(100% - 20px);
  }
  @media screen and (min-width: 767px) {
    width: 394px;
  }
`;

const slots = {
  root: StyledButton,
  listbox: StyledListbox,
  popper: StyledPopper,
};
function renderValue(option) {
  if (!option) {
    return (
      <span style={{ position: 'absolute', top: ' 7px' }}>
        Select a category
      </span>
    );
  }
  return (
    <span style={{ position: 'absolute', top: ' 7px' }}>{option.label} </span>
  );
}

export const UnstyledSelectSimple = ({ onChange }) => {
  const categories = useSelector(state => state.finance.categories);
  const expenseCategories = categories.filter(
    category => category.type !== 'INCOME'
  );
  const [category, setCategory] = React.useState('');

  return (
    <SelectUnstyled
      slots={slots}
      renderValue={renderValue}
      onChange={e => {
  
        setCategory(e.target.id);
        onChange(e.target.id);
      }}
      sx={{
        color: category === '' ? '#bdbdbd' : '#000',
      }}
    >
      {expenseCategories.map(category => (
        <StyledOption key={category.id} value={category.id} id={category.id}>
          {category.name}{' '}
        </StyledOption>
      ))}
    </SelectUnstyled>
  );
};
