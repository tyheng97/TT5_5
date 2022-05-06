import classes from "./ContentWrapper.module.css";

const ContentWrapper = (props) => {
  return <div className={classes.wrapper} style={props.style}>{props.children}</div>;
};

export default ContentWrapper;
