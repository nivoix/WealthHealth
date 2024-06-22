import React from "react";
import DatePicker from "react-datepicker";
import { getMonth, getYear } from "date-fns";

const StartDatePicker = ({ startDate, setStartDate }) => {
  const range = (start, end) => {
    return new Array(end - start).fill().map((d, i) => i + start);
  };
  const years = range(1958, getYear(new Date()) + 1).reverse();
  const max = new Date();
  const min = new Date("01.01.1958");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <DatePicker
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              width: "100%",
              padding: "5px",
              marginInline: "5px",
              cursor: "pointer",
            }}
            onClick={decreaseMonth}
            disabled={prevMonthButtonDisabled}
          >
            {"<"}
          </span>
          <select
            value={getYear(date)}
            onChange={({ target: { value } }) => changeYear(value)}
          >
            {years.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select
            value={months[getMonth(date)]}
            onChange={({ target: { value } }) =>
              changeMonth(months.indexOf(value))
            }
          >
            {months.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <span
            style={{
              width: "100%",
              padding: "5px",
              marginInline: "5px",
              cursor: "pointer",
            }}
            onClick={increaseMonth}
            disabled={nextMonthButtonDisabled}
          >
            {">"}
          </span>
        </div>
      )}
      id="startDate"
      name="startDate"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      autoComplete="off"
      maxDate={max}
      minDate={min}
      startDate="01-01-1958"
      endDate={new Date()}
      required
      placeholderText={"Please select a date"}
    />
  );
};

export default StartDatePicker;
