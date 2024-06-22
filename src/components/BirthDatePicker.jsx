import React from "react";
import DatePicker from "react-datepicker";
import { getMonth, getYear } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

function subtractYears(date, years) {
  date.setFullYear(date.getFullYear() - years);
  return date;
}

const BirthDatePicker = ({ birthDate, setBirthDate }) => {
  const min = new Date("01.01.1940");
  const max = subtractYears(new Date(), 18);
  const range = (start, end) => {
    return new Array(end - start).fill().map((d, i) => i + start);
  };
  const years = range(1940, getYear(new Date()) - 17);
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
      id="birthDate"
      name="birthDate"
      selected={birthDate}
      onChange={(date) => setBirthDate(date)}
      autoComplete="off"
      format="MM/DD/YYYY"
      minDate={min}
      maxDate={max}
      startDate="01-01-1940"
      endDate={max}
      placeholderText={"Please select a date"}
      required
    />
  );
};

export default BirthDatePicker;
