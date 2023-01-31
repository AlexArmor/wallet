import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import { Switch } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
// import OutlinedInput from '@mui/material/OutlinedInput';
import arrowDown from '../../icons/arrowDown.svg';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import { useSelector } from 'react-redux';
// import style from './ModalAddTransaction.module.css';
// import { SlArrowDown } from 'react-icons/sl';
// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       backgroundColor: 'red',
//       fontFamily: 'Circe',
//       fontStyle: 'normal',
//       fontWeight: 400,
//       fontSize: '18px',
//       lineHeight: 'calc(27 / 18)',
//       backgroundColor: ' rgba(255, 255, 255, 0.8)',
//       boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
//       borderRadius: '20px',
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//       scrollbarWidth: 'none',
//       '::-webkit-scrollbar': {
//         width: 0,
//         height: 0,
//       },
//     },
//   },
// };
// const CustomItem = styled(MenuItem)(({ theme }) => {
//   return {
//     '&.Mui-selected': {
//       backgroundColor: '#fff',
//       '&:hover': { backgroundColor: '#fff' },
//     },

//     // fontFamily: 'Circe',
//     // fontStyle: 'normal',
//     // fontWeight: 400,
//     // fontSize: '18px',
//     // lineHeight: 'calc(27 / 18)',
//     backgroundColor: ' rgba(255, 255, 255, 0.7)',
//     boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',

//     maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//     width: 250,
//     '&:hover': { backgroundColor: '#fff' },
//   };
// });
// const CustomInput = styled(OutlinedInput)(({ theme }) => {
//   return {
//     '& .MuiOutlinedInput-notchedOutline': {
//       border: 'none',
//     },
//     margin: '0 auto',
//     fontFamily: 'Circe',
//     fontStyle: ' normal',
//     fontWeight: 400,
//     fontSize: '18px',
//     lineHeight: 'calc(27 / 18)',
//     border: 'none',
//     borderBottom: '1px solid var(--main-light-color)',
//     color: '#000',
//     fill: 'var(--main-black-color)',
//     height: ' 32px',
//     '&:target': { color: '#000' },
//   };
// });
// const SelectAddTransaction = ({ onChange }) => {
//   const categories = useSelector(state => state.finance.categories);
//   const expenseCategories = categories.filter(
//     category => category.type !== 'INCOME'
//   );
//   const [category, setCategory] = React.useState('');
//   //   const incomeCategory = categories.find(
//   //     category => category.type === 'INCOME'
//   //   );
//   //   const theme = useTheme();

//   return (
//     <div>
//       <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
//         <Select
//           displayEmpty
//           defaultValue=""
//           className={style.selectInput}
//           IconComponent={SlArrowDown}
//           onChange={e => {
//             setCategory(e.target.value);
//             onChange(e.target.value);
//           }}
//           input={
//             <CustomInput
//               name="categoryId"
//               sx={{
//                 color: category === '' ? '#bdbdbd' : '#000',
//               }}
//               placeholder="Select a category"
//             />
//           }
//           MenuProps={MenuProps}
//           inputProps={{ 'aria-label': 'Without label' }}
//         >
//           <MenuItem disabled value="">
//             <em sx={{ color: '#bdbdbd' }}>Select a category</em>
//           </MenuItem>
//           {expenseCategories.map(category => (
//             <CustomItem
//               sx={{
//                 '&:hover': { backgroundColor: '#fff' },
//               }}
//               key={category.id}
//               value={category.id}
//               id={category.id}
//               className={style.selectItem}
//             >
//               {category.name}{' '}
//             </CustomItem>
//           ))}
//         </Select>
//       </FormControl>
//     </div>
//   );
// };
// export default SelectAddTransaction;
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
  margin: 40px auto;    
  padding: 20px; 
  display:flex;
  position: relative;
   height: 50px;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: calc(27 / 18);
  border: none;
  border-bottom: 1px solid var(--main-light-color);
  color: #bdbdbd;
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
        right: 15px;
        bottom: 15px;
        background-image: url(${arrowDown});
        background-repeat: no-repeat;

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
      right: 15px;
      bottom: 15px;
      background-image: url(${arrowDown});
      background-repeat: no-repeat;
    }
    `
);

const StyledListbox = styled('ul')(
  ({ theme }) => `
    background-сolor: rgba(255, 255, 255, 0.7);
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
    height: 352px;
    overflow: auto;
    scrollbar-width: none;
    outline: 0px;
    border: none;
    

    &::-webkit-scrollbar {
        width: 0;
        height: 0;
  }
    `
);

const StyledOption = styled(OptionUnstyled)(
  ({ theme }) => `
    list-style: none;
    padding: 8px;
    cursor: pointer;

    background: rgba(255, 255, 255, 0.7);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
  
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
        console.log(e.target.id);
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
