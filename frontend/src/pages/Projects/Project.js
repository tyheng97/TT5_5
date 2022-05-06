import { useState } from "react";

import NewExpenseForm from "../../components/Expense/NewExpenseForm";
import ContentWrapper from "../../components/utility/ContentWrapper";
import PageWrapper from "../../components/utility/PageWrapper";
import { FaPlusSquare } from "react-icons/fa";

import classes from "./Project.module.css";
import Expense from "../../components/Expense/Expense";

const DUMMY_EXPENSE = [
  {
    name: "Leisure",
    description: "ABCDEF",
    amount: "123",
    createAt: "11:00",
    createBy: "Gavin",
    updatedAt: "12:00",
    updatedBy: "Gavin",
  },
];

const Project = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const addExpenseHandler = (e) => {
    setShowExpenseForm(true);
  };

  const closeExpenseHandler = (e) => {
    setShowExpenseForm(false);
  };

  return (
    <PageWrapper>
      <ContentWrapper>
        {showExpenseForm && <NewExpenseForm onCancel={closeExpenseHandler} />}
        <div className={classes.header}>
          <h1>Project Name</h1>
          <button
            className={classes["add-expense"]}
            onClick={addExpenseHandler}
          >
            Add New Expense <FaPlusSquare />
          </button>
        </div>
        <div className={classes.divider} />
        {DUMMY_EXPENSE.map((expense) => {
          return <Expense {...expense}/>
        })}
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Project;
