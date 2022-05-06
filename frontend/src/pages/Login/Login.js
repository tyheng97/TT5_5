import PageWrapper from "../../components/utility/PageWrapper";
import ContentWrapper from "../../components/utility/ContentWrapper";
import LoginForm from "../../components/Login/LoginForm";
import Logo from "../../components/utility/Logo";

import classes from "./Login.module.css";

const Login = (props) => {
  const pageWrapperStyle = {
    alignItems: "center",
  };

  const contentWrapperStyle = {
    width: "60%",
    maxWidth: "300px",
  };

  return (
    <PageWrapper style={pageWrapperStyle}>
      <ContentWrapper style={contentWrapperStyle}>
        <Logo />
        <LoginForm />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Login;
