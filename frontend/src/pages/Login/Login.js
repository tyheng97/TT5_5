import PageWrapper from "../../components/utility/PageWrapper"
import ContentWrapper from "../../components/utility/ContentWrapper";
import LoginForm from "../../components/Login/LoginForm";
import Logo from "../../components/utility/Logo";

import classes from "./Login.module.css";

const Login = (props) => {
  return (
    <PageWrapper>
      <ContentWrapper>
        <Logo />
        <LoginForm />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Login;
