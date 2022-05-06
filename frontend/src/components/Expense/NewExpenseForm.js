import { useRef } from "react";

import classes from "./ExpenseForm.module.css";

const NewExpenseForm = (props) => {
  const nameRef = useRef();
  const descriptionRef = useRef();
  const AmountRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const dataForm = {
      name: nameRef,
      description: descriptionRef,
      amount: AmountRef,
      createAt: "11:00",
      createBy: "Gavin",
    };
    console.log(dataForm);
    props.onAdd(dataForm);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label>
        Name:
        <input type="text" name="type" ref={nameRef} />
      </label>
      <label>
        Description:
        <input type="text" name="description" ref={descriptionRef} />
      </label>
      <label>
        Amount:
        <input type="text" name="description" ref={AmountRef} />
      </label>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default NewExpenseForm;
