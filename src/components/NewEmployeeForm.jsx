import { useState, useRef } from "react";
import { useForm } from "react-hook-form";

import Select from "react-select";
import statesDatas from "../assets/datas/states";
import departmentsDatas from "../assets/datas/departments.js";
import BirthDatePicker from "./BirthDatePicker";
import StartDatePicker from "./StartDatePicker";

import { useDispatch } from "react-redux";
import { addEmployee } from "../utils/redux";
import { nanoid } from "nanoid";

import { ModalComponent } from "modal-react-validation";

const NewEmployeeForm = () => {
  const [open, setOpen] = useState(false);
  const [birthDate, setBirthDate] = useState();
  const [startDate, setStartDate] = useState();
  const [selectedState, setSelectedState] = useState();
  const [selectedDepartment, setSelectedDepartment] = useState();
  const dispatch = useDispatch();
  const form = useRef(null);
  console.log(form);
  console.log(birthDate);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  console.log(errors);
  const onSubmit = () => {
    const datas = Object.fromEntries(new FormData(form.current));
    datas.id = nanoid();
    console.log(datas);
    dispatch(addEmployee(datas));
    reset();
    setOpen(true);
  };

  return (
    <>
      <div className="form-background">
        <form
          id="new-employee-form"
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="firstName">First Name</label>
          <input
            {...register("firstName", {
              required: "Enter the first name",
              pattern: {
                value:
                  /(^[A-Z]+[ \-'])?([[a-zA-ZÀ-ÿœé])+([ \-'])?]*([a-zA-ZÀ-ÿœ])+$/,
                message:
                  "Prohibited numbers and symbols. Minimum 2 characters.",
              },
            })}
            name="firstName"
            type="text"
            id="firstName"
            autoFocus
          />
          <span className="errorMessage">{errors.firstName?.message}</span>

          <label htmlFor="lastName">Last Name</label>
          <input
            {...register("lastName", {
              required: "Enter the last name",
              pattern: {
                value:
                  /(^[A-Z]+[ \-'])?([[a-zA-ZÀ-ÿœé])+([ \-'])?]*([a-zA-ZÀ-ÿœ])+$/,
                message:
                  "Prohibited numbers and symbols. Minimum 2 characters.",
              },
            })}
            name="lastName"
            type="text"
            id="lastName"
          />
          <span className="errorMessage">{errors.lastName?.message}</span>

          <label htmlFor="birthDate">Date of Birth</label>
          <BirthDatePicker birthDate={birthDate} setBirthDate={setBirthDate} />

          <label htmlFor="startDate">Start Date</label>
          <StartDatePicker startDate={startDate} setStartDate={setStartDate} />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input
              {...register("street", {
                required: "Enter the street",
                pattern: {
                  value: /^(\d{1,}) [a-zA-Z0-9\s]/,
                  message: "write a valid street",
                },
              })}
              name="street"
              id="street"
              type="text"
            />
            <span className="errorMessage">{errors.street?.message}</span>

            <label htmlFor="city">City</label>
            <input
              {...register("city", {
                required: "Enter the city",
                pattern: {
                  value: /^[a-zA-Z]/,
                  message: "write a valid city",
                },
              })}
              name="city"
              id="city"
              type="text"
            />
            <span className="errorMessage">{errors.city?.message}</span>

            <label htmlFor="state">State</label>
            <Select
              inputId="state"
              name="state"
              value={selectedState}
              onChange={setSelectedState}
              options={statesDatas}
              menuPlacement="auto"
              required
              placeholder={"Please select a state"}
            />

            <label htmlFor="zipCode">Zip Code</label>
            <input
              {...register("zipCode", {
                required: "Enter your zip code",
              })}
              name="zipCode"
              id="zipCode"
              type="number"
            />
            <span className="errorMessage">{errors.zipCode?.message}</span>
          </fieldset>

          <label htmlFor="department">Department</label>
          <Select
            inputId="department"
            name="department"
            value={selectedDepartment}
            onChange={setSelectedDepartment}
            options={departmentsDatas}
            menuPlacement="auto"
            required
            placeholder={"Please select a department"}
          />

          <button type="submit">Save</button>

          <ModalComponent open={open} setOpen={setOpen}>
            employee created !
          </ModalComponent>
        </form>
      </div>
    </>
  );
};

export default NewEmployeeForm;
