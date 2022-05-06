import classes from "./PageWrapper.module.css";

const PageWrapper = (props) => {
  return <div className={classes.wrapper} style={props.style}>{props.children}</div>;
};

export default PageWrapper;
