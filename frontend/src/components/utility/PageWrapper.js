import classes from "./PageWrapper.module.css";

const PageWrapper = (props) => {
  return <div className={classes.wrapper}>{props.children}</div>;
};

export default PageWrapper;
