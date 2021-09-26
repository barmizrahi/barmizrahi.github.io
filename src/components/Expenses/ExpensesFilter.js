import React from 'react';

import './ExpensesFilter.css';
//const [yearToShow,setYearToShow] = useState('');
const ExpensesFilter = (props) => {
    function changeYearHandler(event){
        props.onChangeFilter(event.target.value);
       // console.log(event.target.value);
        //setYearToShow(event.target.value);
        //console.log(yearToShow);
    };
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value = {props.selected} onChange={changeYearHandler}>
          <option value='2022' >2022</option>
          <option value='2021' >2021</option>
          <option value='2020' >2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;