import SelectUnstyled from '@mui/base/SelectUnstyled';
import { useEffect } from 'react';
import { useState } from 'react';
import { StyledButton, StyledListbox, StyledOption, StyledPopper } from './CustomSelect.styled';
import axios from "axios"

const slots = {
      root: StyledButton,
      listbox: StyledListbox,
      popper: StyledPopper,
    };

    function renderValue(option) {
        if (option == null) {
          return <span>Select an option...</span>;
        }
      
        return (
          <span>
            {option.label}
          </span>
        );
      }
      const instance = axios.create({
        baseURL: 'https://wallet.goit.ua/api/',
        headers: {'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOiJkYTNhY2YyOC0wMzM1LTRiNTUtOGUzYi0xMTkzNTViMzFlZjciLCJpYXQiOjE2NzQ4MjMzNDUsImV4cCI6MTAwMDAwMDE2NzQ4MjMzNDR9.ijSfMY6Gy2B2v-g7uVqcp35hWETTYT4zCrTlZZmVN4I'}});
      
      const getTransactionsSummary = async(month, year) => {
        const {data} = await instance.get('transactions-summary', {params: {
          month,
          year
        }})
        return data
      };
  
  export default function UnstyledSelectSimple({setStat}) {
    const [month, setMonth] = useState(null)
    const [year, setYear] = useState(null)
    const onMonthChange = (e, newValue) => {
        setMonth(newValue)
    }
    const onYearChange = (e, newValue) => {
        setYear(newValue)
    }
    useEffect(() =>{
        if(!month || !year) return
        const getData = async () => {
            try {
              const data = await getTransactionsSummary(month, year)
                setStat(data)
            } catch (error) {
              console.log(error.message);
            }
          }
          getData()
    },[month, setStat, year])
    return (
        <>
        <SelectUnstyled onChange={onMonthChange} slots={slots} renderValue={renderValue}>
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
       <SelectUnstyled onChange={onYearChange} slots={slots} renderValue={renderValue}>
       <StyledOption value={2020}>2020</StyledOption>
       <StyledOption value={2021}>2021</StyledOption>
       <StyledOption value={2022}>2022</StyledOption>
       <StyledOption value={2023}>2023</StyledOption>
      </SelectUnstyled>
        </>
    );
  }