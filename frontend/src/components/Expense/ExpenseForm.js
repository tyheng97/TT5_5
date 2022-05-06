import classes from "./ExpenseForm.module.css";

const ExpenseForm = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    props.onCancel();
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label>
        Name:
        <input type="text" name="type" />
      </label>
      <label>
        Description:
        <input type="text" name="description" />
      </label>
      <label>
        Amount:
        <input type="text" name="description" />
      </label>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default NewExpenseForm;
