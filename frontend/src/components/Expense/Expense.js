import classes from "./Expense.module.css";

const Expense = (props) => {
  return (
    <div className={classes.expense} onClick>
      <div className={classes["left-container"]}>
        <h1>{props.name}</h1>
        <span>{props.description}</span>
        <div className={classes["create-details"]}>
          <span>
            Created by: {props.createBy} at {props.createAt}
          </span>
          <span>
            Last updated by: {props.updatedBy} at {props.updatedAt}
          </span>
        </div>
      </div>
      <span className={classes.amount}>{props.amount}</span>
    </div>
  );
};

export default Expense;
