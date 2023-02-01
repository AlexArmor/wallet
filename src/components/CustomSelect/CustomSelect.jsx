import SelectUnstyled from '@mui/base/SelectUnstyled';
import { useEffect } from 'react';
import { useState } from 'react';
import {
  StyledButton,
  StyledListbox,
  StyledOption,
  StyledPopper,
} from './CustomSelect.styled';
import { useDispatch } from 'react-redux';
import { getTransactionSummary } from 'redux/finance/transactionOperation';

const slots = {
  root: StyledButton,
  listbox: StyledListbox,
  popper: StyledPopper,
};

function renderValueMonth(option) {
  if (option == null) {
    return <span>Month</span>;
  }

  return <span>{option.label}</span>;
}

function renderValueYear(option) {
  if (option == null) {
    return <span>Year</span>;
  }

  return <span>{option.label}</span>;
}

export default function UnstyledSelectSimple() {
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();
  const dispatch = useDispatch();
  const onMonthChange = (e, newValue) => {
    setMonth(newValue);
  };
  const onYearChange = (e, newValue) => {
    setYear(newValue);
  };
  useEffect(() => {
    setMonth(currentMonth);
    setYear(currentYear);
  }, [currentMonth, currentYear, dispatch]);
  useEffect(() => {
    if (!month || !year) return;
    dispatch(
      getTransactionSummary({
        month,
        year,
      })
    );
  }, [dispatch, month, year]);
  return (
    <>
      <SelectUnstyled
        defaultValue={currentMonth}
        onChange={onMonthChange}
        slots={slots}
        renderValue={renderValueMonth}
      >
        <StyledOption value={1}>January</StyledOption>
        <StyledOption value={2}>February</StyledOption>
        <StyledOption value={3}>March</StyledOption>
        <StyledOption value={4}>April</StyledOption>
        <StyledOption value={5}>May</StyledOption>
        <StyledOption value={6}>June</StyledOption>
        <StyledOption value={7}>July</StyledOption>
        <StyledOption value={8}>August</StyledOption>
        <StyledOption value={9}>September</StyledOption>
        <StyledOption value={10}>October</StyledOption>
        <StyledOption value={11}>November</StyledOption>
        <StyledOption value={12}>December</StyledOption>
      </SelectUnstyled>
      <SelectUnstyled
        defaultValue={currentYear}
        onChange={onYearChange}
        slots={slots}
        renderValue={renderValueYear}
      >
        <StyledOption value={2020}>2020</StyledOption>
        <StyledOption value={2021}>2021</StyledOption>
        <StyledOption value={2022}>2022</StyledOption>
        <StyledOption value={2023}>2023</StyledOption>
      </SelectUnstyled>
    </>
  );
}
